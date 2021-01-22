import React from "react"
import * as S from "./index-page.style"
import FeaturedPostCard from "./featured-post-card/featured-post-card"
import PostDescription from "../post-description/post-description"

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
          {posts.slice(1, 4).map(post => {
            return (
              <FeaturedPostCard
                key={post.frontmatter.slug}
                post={post}
              ></FeaturedPostCard>
            )
          })}
        </S.HomeSecondaryGrid>
      </S.HomeSecondary>

      <S.HomeLatest>
        <S.LatestPosts>
          <S.Title>Novidades</S.Title>

          {posts.slice(4).map(post => {
            return (
              <PostDescription
                key={post.frontmatter.slug}
                post={post}
              ></PostDescription>
            )
          })}
        </S.LatestPosts>
        <S.TrendingPosts></S.TrendingPosts>
      </S.HomeLatest>
    </S.Home>
  )
}

export default IndexPage
