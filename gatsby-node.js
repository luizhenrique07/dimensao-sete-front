const path = require(`path`)
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              slug
              category
              date
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      const category = post.frontmatter.category

      createPage({
        path: post.frontmatter.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          category,
          dateTime: post.frontmatter.date,
        },
      })
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // Thi way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "Mdx" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      siteName: String
      siteUrl: String
      siteDescription: String
      social: Social
    }

    type Social {
      twitter: String
      facebook: String
      instagram: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      featuredImage: File @link(from: "featuredImage___NODE")
    }

    type Frontmatter {
      slug: String
      title: String
      description: String
      date: Date @dateformat
      featuredImageUrl: String
      featuredImageAlt: String
      category: String
      keywords: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  store,
  cache,
}) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === `Mdx`) {
    if (node.frontmatter.featuredImageUrl) {
      let fileNode = await createRemoteFileNode({
        url: node.frontmatter.featuredImageUrl, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        cache, // Gatsby's cache
        store, // Gatsby's Redux store
      })
      // if the file was created, attach the new node to the parent node
      if (fileNode) {
        node.featuredImage___NODE = fileNode.id
      }
    }

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
