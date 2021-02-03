import React from "react"
import * as S from "./featured-post-card.style"

const FeaturedPostCard = ({ post, mainCard }) => {
  let featuredImage = post.frontmatter?.featuredImage?.childImageSharp?.fluid
  const title = post.frontmatter.title || post.frontmatter.slug

  return (
    <S.Article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/article"
    >
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
        {mainCard && (
          <S.MainCardDescription>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
          </S.MainCardDescription>
        )}
      </S.ArticleInfo>
    </S.Article>
  )
}

export default FeaturedPostCard
