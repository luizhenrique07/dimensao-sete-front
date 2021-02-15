import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({
  description,
  lang,
  meta,
  image: metaImage,
  title,
  pathname,
  keywords,
  time,
}) {
  const image = metaImage

  const siteUrl = `https://dimensaosete.com.br`

  const canonical = pathname ? `${siteUrl}/${pathname}` : null

  const metaTags = [
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
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `article:published_time`,
      content: time,
    },
  ]
    .concat(
      metaImage
        ? [
            {
              property: "og:image",
              content: `${siteUrl}/${image.src}`,
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
