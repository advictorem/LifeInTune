import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { Location } from '@reach/router'
import shareImage from '../assets/ravel-share-img.jpg'

const SEO = ({
  lang: userLang,
  title: userTitle,
  description: userDescription,
  keywords: userKeywords = [],
  facebookImage: userFacebookImage,
  twitterImage: userTwitterImage,
  meta = [],
}) => {
  console.log(shareImage)
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultLang
          defaultTitle
          defaultDescription
          defaultKeywords
          siteUrl
          siteName
          twitterCreator
          twitterSite
          fbAppId
        }
      }
      facebookImage: file(relativePath: { eq: "share-image.jpg" }) {
        ...facebookShareImage
      }
      twitterImage: file(relativePath: { eq: "share-image.jpg" }) {
        ...twitterShareImage
      }
    }
  `)

  const {
    defaultLang,
    defaultTitle,
    defaultDescription,
    defaultKeywords,
    siteUrl,
    siteName,
    twitterCreator,
    twitterSite,
    fbAppId,
  } = data.site.siteMetadata
  const defaultFacebookImage = data.facebookImage.childImageSharp.fixed.src
  const defaultTwitterImage = data.twitterImage.childImageSharp.fixed.src

  const lang = userLang || defaultLang
  const title = userTitle ? `${userTitle} • ${defaultTitle}` : defaultTitle
  const description = userDescription || defaultDescription
  const keywords = userKeywords || defaultKeywords
  const facebookImage = siteUrl + (userFacebookImage || defaultFacebookImage)
  const twitterImage = siteUrl + (userTwitterImage || defaultTwitterImage)

  return (
    <Location>
      {({ location: { pathname } }) => (
        <Helmet
          htmlAttributes={{ lang }}
          title={title}
          meta={[
            { name: 'description', content: description },
            keywords.length > 0
              ? { name: 'keywords', content: keywords.join(', ') }
              : {},

            // Used by Facebook and Twitter
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: siteUrl + pathname },
            { property: 'fb:app_id', content: fbAppId },

            // Facebook specific
            { property: 'og:site_name', content: siteName },
            { property: 'og:locale', content: lang },
            { property: 'og:image', content: siteUrl + shareImage },
            { property: 'og:type', content: 'website' },

            // Twitter specific
            { name: 'twitter:site', content: twitterSite },
            { name: 'twitter:creator', content: twitterCreator },
            { name: 'twitter:image', content: siteUrl + shareImage },
            { name: 'twitter:card', content: 'summary_large_image' },

            //youtube meta
            {name: 'referrer', content: "no-referrer"},

            ...meta,
          ]}
        />
      )}
    </Location>
  )
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  facebookImage: PropTypes.string,
  twitterImage: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
