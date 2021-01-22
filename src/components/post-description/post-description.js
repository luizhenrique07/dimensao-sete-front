import React from "react"
import * as S from "./post-description.style"

const PostDescription = ({ post }) => {
  let featuredImage = post.frontmatter?.featuredImage?.childImageSharp?.fluid
  const title = post.frontmatter.title || post.frontmatter.slug

  return (
    <S.Article>
      <S.ArticleLink to={post.frontmatter.slug} itemProp="url">
        {featuredImage && <S.Image fluid={featuredImage} />}
      </S.ArticleLink>
      <S.ArticleInfo>
        <header>
          <S.ArticleTitle>
            <S.ArticleTitleLink to={post.frontmatter.slug} itemProp="url">
              {title}
            </S.ArticleTitleLink>
          </S.ArticleTitle>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </S.ArticleInfo>
    </S.Article>
  )
}

export default PostDescription
