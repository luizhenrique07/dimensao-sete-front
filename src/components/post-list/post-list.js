import React from "react"
import Divider from "@material-ui/core/Divider"
import PostDescription from "../post-description/post-description"

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map(post => {
        return (
          <div key={post.frontmatter.slug}>
            <PostDescription post={post}></PostDescription>
            <Divider />
          </div>
        )
      })}
    </>
  )
}

export default PostList
