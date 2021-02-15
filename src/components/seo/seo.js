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

  const imageUrl = `${siteUrl}/${image.src}`

  const metaTags = [
    {
      property: `og:url`,
      content: canonical,
    },

    {
      name: `description`,
      content: description,
    },
    {
      name: "keywords",
      content: keywords,
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
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `article`,
    },
    {
      name: `article:published_time`,
      content: time,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      property: `twitter:url`,
      content: canonical,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `twitter:domain`,
      content: siteUrl,
    },
  ]
    .concat(
      metaImage
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
              property: "twitter:url",
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
