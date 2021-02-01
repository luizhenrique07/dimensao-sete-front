import React from "react"
import { SectionTitle } from "../../section-title/section-title"
import PostList from "../../post-list/post-list"

const ListsPage = props => {
  const { posts } = props

  return (
    <section>
      <SectionTitle>Listas</SectionTitle>
      <PostList posts={posts}></PostList>
    </section>
  )
}

export default ListsPage
