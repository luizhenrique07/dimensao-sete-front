import React from "react"
import PostDescription from "../../post-description/post-description"
import Divider from "@material-ui/core/Divider"
import { SectionTitle } from "../../section-title/section-title"

const NewsPage = props => {
  const { posts } = props

  return (
    <section>
      <SectionTitle>Notícias</SectionTitle>
      {posts.map(post => {
        return (
          <div key={post.frontmatter.slug}>
            <PostDescription post={post}></PostDescription>
            <Divider />
          </div>
        )
      })}
    </section>
  )
}

export default NewsPage
