import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo/seo"
import IndexPage from "../components/pages/index/index-page"

const Index = ({ data, location }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout location={location}>
      <SEO title="Home" description="Página Inicial" />
      <IndexPage posts={posts} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
