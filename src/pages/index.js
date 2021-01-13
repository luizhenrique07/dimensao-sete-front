import React from "react"
import Layout from "../components/layout/layout"
import FeaturedPostCard from "../components/index-page/featured-post-card/featured-post-card"
import SEO from "../components/seo/seo"

const IndexPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
      <SEO title="Home | Dimensão 7" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          return (
            <li key={post.frontmatter.slug}>
              <FeaturedPostCard post={post}></FeaturedPostCard>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          slug
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
