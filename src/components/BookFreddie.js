import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ButtonLink from './ButtonLink'
import { AutoSlide, AutoFade } from './Animated'
import { media } from '../styles/tools'

import warnerBros from '../assets/logos/WarnerBros.svg'

const BookFreddie = () => {
  const data = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "book-freddie-ravel.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      freddie: file(relativePath: { eq: "freddie-book-footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="relative flex flex-col items-center py-20 overflow-hidden bg-gray-900">
      <Img
        fluid={data.bg.childImageSharp.fluid}
        className="top-0 left-0 w-full h-full"
        css={{ position: 'absolute !important' }}
      />
      <AutoFade>
        <h3
          className="relative text-xl font-bold leading-tight text-center uppercase font-display sm:text-3xl text-gold-500"
          css={{
            maxWidth: '50ex',
            backgroundImage:
              'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          "PERFECT BALANCE OF ENTERTAINMENT AND CONTENT"
        </h3>
        <img
          src={warnerBros}
          alt=""
          className="mx-auto mt-5 opacity-75"
          css={{ maxWidth: 80, filter: 'invert(1)' }}
        />
      </AutoFade>
      <AutoFade>
        <ButtonLink to="/contact" className="mt-6 text-white">
          BOOK ON STAGE OR ONLINE
        </ButtonLink>
      </AutoFade>
      <AutoSlide up translate="50" duration={2000}>
        <Img
          fluid={data.freddie.childImageSharp.fluid}
          className="mt-6"
          css={{
            width: '50vw',
            marginBottom: '-50vw',
            marginLeft: '-2vw',
            [media.tabletMd]: {
              width: '25vw',
              marginBottom: '-24vw',
              marginLeft: '-2vw',
            },
          }}
        />
      </AutoSlide>
    </section>
  )
}

export default BookFreddie
