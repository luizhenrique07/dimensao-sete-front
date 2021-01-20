import React from "react"
import * as S from "./index-page.style"
import FeaturedPostCard from "./featured-post-card/featured-post-card"

const IndexPage = props => {
  const { posts } = props

  return (
    <S.Home>
      {posts[0] && (
        <S.HomePrimary>
          <S.FeaturedTitle>Destaques</S.FeaturedTitle>
          <FeaturedPostCard
            post={posts[0]}
            key={posts[0].frontmatter.slug}
          ></FeaturedPostCard>
        </S.HomePrimary>
      )}
      <S.HomeSecondary>
        <S.HomeSecondaryGrid>
          {posts.slice(1).map(post => {
            return (
              <FeaturedPostCard
                key={post.frontmatter.slug}
                post={post}
              ></FeaturedPostCard>
            )
          })}
        </S.HomeSecondaryGrid>
      </S.HomeSecondary>
    </S.Home>
  )
}

export default IndexPage
