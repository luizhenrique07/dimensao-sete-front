import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import NewsPage from "../components/pages/news/news-page"

const News = ({ data, location }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      <SEO title="Notícias" />
      <NewsPage posts={posts} />
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
      filter: { frontmatter: { category: { eq: "news" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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

export default News
