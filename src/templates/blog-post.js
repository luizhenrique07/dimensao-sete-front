import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import * as S from "./blog-post.style"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Button from "@material-ui/core/Button"
import MDXComponents from "../components/mdx-components/mdx-components"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <S.Article itemScope itemType="http://schema.org/Article">
        <MDXProvider components={MDXComponents}>
          <MDXRenderer frontmatter={post.frontmatter}>{post.body}</MDXRenderer>
        </MDXProvider>
        {/* <hr /> */}
      </S.Article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Button
                variant="contained"
                color="secondary"
                href={previous.frontmatter.slug}
              >
                Post Anterior
              </Button>
            )}
          </li>
          <li>
            {next && (
              <Button
                variant="contained"
                color="secondary"
                href={next.frontmatter.slug}
              >
                Próximo Post
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "DD [de] MMMM, YYYY", locale: "pt-br")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      frontmatter {
        slug
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      frontmatter {
        slug
        title
      }
    }
  }
`
