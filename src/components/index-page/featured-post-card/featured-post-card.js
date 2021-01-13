import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const FeaturedPostCard = ({ post }) => {
  let featuredImage = post.frontmatter?.featuredImage?.childImageSharp?.fluid
  const title = post.frontmatter.title || post.frontmatter.slug

  return (
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h2>
          <Link to={post.frontmatter.slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        <small>{post.frontmatter.date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
      {featuredImage && <Img fluid={featuredImage} />}
    </article>
  )
}

export default FeaturedPostCard
