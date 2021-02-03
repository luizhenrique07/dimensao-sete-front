import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import ListsPage from "../components/pages/lists/lists-page"

const Lists = ({ data, location }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      <SEO title="Listas" />
      <ListsPage posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { frontmatter: { category: { eq: "list" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          slug
          date(fromNow: true, locale: "pt-br")
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

export default Lists
