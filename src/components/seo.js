/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  dateModified,
  datePublished,
  description,
  image,
  keywords,
  lang,
  meta,
  title,
  schemaType,
  url,
  wordCount,
}) {
  const { logo, site } = useStaticQuery(
    graphql`
      query {
        logo: file(absolutePath: { regex: "/badmintonsbest-logo-full.png/" }) {
          childImageSharp {
            fixed(width: 1200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  let additionalMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  const copyrightYear = new Date(dateModified).getFullYear()
  const articleSection = url ? url.split("/")[3] : ""

  const imageFullLogo = `${site.siteMetadata.siteUrl}${logo.childImageSharp.fixed.src}`
  let imageFullSrc = null
  if (image) {
    imageFullSrc = `${site.siteMetadata.siteUrl}${image.src}`
    const imageProps = [
      {
        property: `twitter:image`,
        content: imageFullSrc,
      },
      {
        property: `og:image`,
        content: imageFullSrc,
      },
    ]
    additionalMeta = imageProps.concat(additionalMeta)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={additionalMeta.concat(meta)}
    >
      {/* inline script elements */}
      <script type="application/ld+json">{`
        {
          "@context" : "http://schema.org",
          "@type" : "${schemaType}",
          "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${site.siteMetadata.siteUrl}"
          },
          ${
            schemaType === "BlogPosting"
              ? `"articleSection" : "${articleSection}",`
              : ""
          }
          "name" : "${title}",
          "headline" : "${title}",
          "description" : "${metaDescription}",
          ${image ? `"image": "${imageFullSrc}",` : ""}
          "inLanguage" : "${lang}",
          "author" : "${site.siteMetadata.author}",
          "creator" : "${site.siteMetadata.author}",
          "publisher": {
            "@type": "Organization",
            "name": "${site.siteMetadata.title}",
            "logo": {
              "@type": "ImageObject",
              "url": "${imageFullLogo}"
            }
          },
          "accountablePerson" : "${site.siteMetadata.author}",
          "copyrightHolder" : "${site.siteMetadata.title}",
          "copyrightYear" : "${copyrightYear}",
          "datePublished": "${datePublished}",
          "dateModified" : "${dateModified}",
          "url" : "${url}",
          ${wordCount ? `"wordCount" : "${wordCount}",` : ""}
          "keywords" : [${keywords.join(", ")}]
        }
      `}</script>
    </Helmet>
  )
}

const now = new Date()
let defaultDate =
  now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()

SEO.defaultProps = {
  dateModified: defaultDate,
  datePublished: defaultDate,
  description: ``,
  image: null,
  keywords: [],
  lang: `en`,
  meta: [],
  schemaType: `WebPage`,
  wordCount: null,
}

SEO.propTypes = {
  dateModified: PropTypes.string,
  datePublished: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({}),
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  schemaType: PropTypes.string,
  url: PropTypes.string.isRequired,
  wordCount: PropTypes.number,
}

export default SEO
