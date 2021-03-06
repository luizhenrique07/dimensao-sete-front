import React from "react"
import { SectionTitle } from "../../section-title/section-title"
import PostList from "../../post-list/post-list"

const NewsPage = props => {
  const { posts } = props

  return (
    <section>
      <SectionTitle>Notícias</SectionTitle>
      <PostList posts={posts}></PostList>
    </section>
  )
}

export default NewsPage
