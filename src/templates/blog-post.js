import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import * as S from "./blog-post.style"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import MDXComponents from "../components/mdx-components/mdx-components"
import PostDescription from "../components/post-description/post-description"
import { SectionTitle } from "../components/section-title/section-title"
import { Disqus } from "gatsby-plugin-disqus"
import ShareButtons from "../components/share-buttons/share-buttons"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  let featuredImage = post.frontmatter.featuredImage
    ? post.frontmatter?.featuredImage?.childImageSharp?.fluid
    : null
  const url = `https://dimensaosete.com.br${location.pathname}`
  const twitterHandle = "dimensao_sete"

  const postDate = new Date(pageContext.dateTime + "(pt-br)")

  let disqusConfig = {
    url,
    identifier: post.id,
    title: post.title,
  }

  return (
    <Layout location={location} title={siteTitle}>
      <S.BlogPost>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={featuredImage}
          pathname={location.pathname}
          keywords={post.frontmatter.keywords}
          time={pageContext.dateTime}
        />
        <S.Article itemScope itemType="http://schema.org/Article">
          <S.Title>{post.frontmatter.title}</S.Title>
          <S.Subtitle>{post.frontmatter.description}</S.Subtitle>
          <S.ArticleInfo>
            <S.Time dateTime={postDate}>{post.frontmatter.date}</S.Time>

            <S.ShareButtonsContainer>
              <ShareButtons
                title={post.frontmatter.title}
                url={url}
                twitterHandle={twitterHandle}
              />
            </S.ShareButtonsContainer>
          </S.ArticleInfo>

          {featuredImage && <S.Image fluid={featuredImage} />}
          <MDXProvider components={MDXComponents}>
            <MDXRenderer frontmatter={post.frontmatter}>
              {post.body}
            </MDXRenderer>
          </MDXProvider>
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
                <Button variant="outlined" href={previous.frontmatter.slug}>
                  ← Post Anterior
                </Button>
              )}
            </li>
            <li>
              {next && (
                <Button variant="outlined" href={next.frontmatter.slug}>
                  Próximo Post →
                </Button>
              )}
            </li>
          </ul>
        </nav>

        <Disqus config={disqusConfig} />
        <Divider />
        {data.suggestions && data.suggestions.nodes.length > 0 && (
          <>
            <SectionTitle>Relacionados</SectionTitle>
            {data.suggestions.nodes.map(post => {
              return (
                <div key={post.frontmatter.slug}>
                  <PostDescription post={post}></PostDescription>
                  <Divider />
                </div>
              )
            })}
          </>
        )}
        <div></div>
      </S.BlogPost>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $category: String
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
        keywords
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1232) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
    suggestions: allMdx(
      filter: { frontmatter: { category: { eq: $category } }, id: { ne: $id } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      nodes {
        excerpt
        frontmatter {
          slug
          date(formatString: "DD [de] MMMM, YYYY", locale: "pt-br")
          title
          description
          category
          keywords
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1232) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
