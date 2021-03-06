import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import {
  EVENT_CLICK,
  RELATED_CONTENT_IMAGE_LINK_CLICK,
  RELATED_CONTENT_LINK_CLICK,
} from "../constants/gtm"
import { rhythm } from "../utils/typography"

const ExcerptContainer = styled("div")`
  & + & {
    margin-top: ${rhythm(2)};
  }
`

class Excerpt extends React.Component {
  render() {
    const { node, variant } = this.props
    const title = node.frontmatter.title || node.fields.slug
    const featuredImgFluid = node.frontmatter.featured
      ? node.frontmatter.featured.childImageSharp.fluid
      : false

    const isRelatedContent = variant && variant === "mini" ? true : false

    return (
      <ExcerptContainer>
        {featuredImgFluid &&
          (isRelatedContent ? (
            <Link
              style={{
                boxShadow: `none`,
                display: `block`,
                marginBottom: rhythm(1),
              }}
              to={node.fields.slug}
              data-ga-event={EVENT_CLICK}
              data-ga-event-category={RELATED_CONTENT_IMAGE_LINK_CLICK}
              data-ga-event-action={title}
              data-ga-event-label={node.fields.slug}
            >
              <Img fluid={featuredImgFluid} />
            </Link>
          ) : (
            <Link
              style={{
                boxShadow: `none`,
                display: `block`,
                marginBottom: rhythm(1),
              }}
              to={node.fields.slug}
            >
              <Img fluid={featuredImgFluid} />
            </Link>
          ))}
        {isRelatedContent ? (
          <h4
            style={{
              marginTop: 0,
            }}
          >
            <Link
              style={{ boxShadow: `none` }}
              to={node.fields.slug}
              data-ga-event={EVENT_CLICK}
              data-ga-event-category={RELATED_CONTENT_LINK_CLICK}
              data-ga-event-action={title}
              data-ga-event-label={node.fields.slug}
            >
              {title}
            </Link>
          </h4>
        ) : (
          <h2
            style={{
              marginTop: 0,
            }}
          >
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h2>
        )}
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
          style={{
            marginBottom: 0,
          }}
        />
      </ExcerptContainer>
    )
  }
}

export default Excerpt
