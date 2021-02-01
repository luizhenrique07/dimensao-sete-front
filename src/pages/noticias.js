import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const NewsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <IndexPage posts={posts} />
    </Layout>
  )
}

export default NewsPage
