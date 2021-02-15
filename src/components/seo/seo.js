import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({
  description,
  lang,
  meta,
  image,
  title,
  pathname,
  keywords,
  time,
}) {
  const siteUrl = `https://dimensaosete.com.br`

  const canonical = pathname ? `${siteUrl}/${pathname}` : null

  const imageUrl = image ? `${siteUrl}${image.src}` : null

  const metaTags = [
    {
      property: `og:url`,
      content: canonical || siteUrl,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:site_name`,
      content: `Dimensão Sete`,
    },

    {
      name: `twitter:title`,
      content: title,
    },
    {
      property: `twitter:url`,
      content: canonical || siteUrl,
    },

    {
      name: `twitter:domain`,
      content: siteUrl,
    },
  ]
    .concat(
      image
        ? [
            {
              property: "og:image",
              content: imageUrl,
            },
            {
              property: "twitter:image",
              content: imageUrl,
            },

            {
              name: "twitter:card",
              content: "summary_large_image",
            },
          ]
        : [
            {
              name: "twitter:card",
              content: "summary",
            },
          ]
    )
    .concat(meta)
    .concat(
      description
        ? [
            {
              property: `og:description`,
              content: description,
            },
            {
              name: `description`,
              content: description,
            },
            {
              name: `twitter:description`,
              content: description,
            },
            {
              property: `og:type`,
              content: `article`,
            },
            {
              name: "article:tag",
              content: keywords,
            },
            {
              name: `article:published_time`,
              content: time,
            },
          ]
        : [
            {
              property: `og:type`,
              content: `website`,
            },
          ]
    )

  console.log(metaTags)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={metaTags}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO
