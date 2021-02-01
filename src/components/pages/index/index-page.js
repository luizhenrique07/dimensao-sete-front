import React from "react"
import * as S from "./index-page.style"
import FeaturedPostCard from "./featured-post-card/featured-post-card"
import PostDescription from "../../post-description/post-description"
import Divider from "@material-ui/core/Divider"
import {
  SectionTitle,
  SectionTitleLargeScreen,
} from "../../section-title/section-title"

const IndexPage = props => {
  const { posts } = props

  return (
    <S.Home>
      {posts[0] && (
        <S.HomePrimary>
          <SectionTitleLargeScreen>Destaques</SectionTitleLargeScreen>
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
          <SectionTitle>Novidades</SectionTitle>

          {posts.slice(4).map(post => {
            return (
              <div key={post.frontmatter.slug}>
                <PostDescription post={post}></PostDescription>
                <Divider />
              </div>
            )
          })}
        </S.LatestPosts>
        {/* <S.TrendingPosts></S.TrendingPosts> */}
      </S.HomeLatest>
    </S.Home>
  )
}

export default IndexPage
