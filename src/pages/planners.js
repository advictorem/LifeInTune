import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { media } from '../styles/tools'

import SEO from '../components/SEO'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import ButtonLink from '../components/ButtonLink'
import { AutoSlide, AutoFade } from '../components/Animated'

import abwa from '../assets/logos/ABWA.svg'

export const query = graphql`
  query {
    waves: file(relativePath: { eq: "gold-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    planners: file(relativePath: { eq: "planners.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Planners" />
    <section className="pt-10 text-white" css={{ backgroundColor: '#1b1b1b' }}>
      <div
        css={{
          display: 'grid',
          '--space': '20px',
          gridTemplateColumns: 'var(--space) 1fr var(--space)',
          [media.laptop]: {
            '--space': '13vw',
          },
        }}
      >
        <AutoFade
          duration={3000}
          css={{ gridRow: 1, gridColumn: '1 / -1', zIndex: 1 }}
        >
          <Img
            fluid={data.waves.childImageSharp.fluid}
            className="self-start w-full select-none"
          />
        </AutoFade>
        <AutoSlide
          up
          delay={300}
          css={{
            gridRow: 1,
            gridColumn: '2 / -2',
            zIndex: 3,
            marginTop: '13.5vw',
          }}
        >
          <header className="flex flex-col justify-center px-6 py-6 bg-black lg:py-12">
            <h3
              className="relative mx-auto text-lg font-hairline leading-tight text-center uppercase font-display lg:text-3xl text-gold-500"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              "NO MAINTENANCE AND DELIVERS"
            </h3>
            <img
              src={abwa}
              alt=""
              className="mx-auto mt-5 opacity-50"
              css={{ maxWidth: 150, filter: 'invert(1)' }}
            />
          </header>
          <div className="flex bg-white">
            <div className="flex-1 px-6 py-8 lg:py-12">
              <div css={{ maxWidth: '39em', marginLeft: 'auto' }}>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  Every year you've got to top yourself and your upcoming
                  virtual/live event is no different. The pressure is ON…and…We
                  Get It. That’s why our team tunes in deep to your goals and
                  desires to deliver solid solutions. Getting drop-the-mic
                  results from our clients is not a stretch - it’s what we do.
                  With years of RAVE reviews from start ups to the Fortune 500
                  who describe our customized keynotes as the “perfect balance
                  of entertainment and content,” we’ll make sure you too receive
                  rave kudos for that YES-we-nailed-it feeling you and your
                  people deserve. Let Freddie amplify YOUR event to 11.
                </p>
                <div css={{ maxWidth: 460 }}>
                  <ButtonLink
                    href="/Freddie-Ravel-Speaker-Program(2025).pdf"
                    className="mt-5 md:mt-12"
                    css={{ [media.max.tablet]: { fontSize: 10 } }}
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="hidden w-5 h-5 ml-3 -mr-2 fill-current md:block"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    Download one-sheet
                  </ButtonLink>
                  <ButtonLink
                    href="/Freddie-Ravel-Questionnaire.pdf"
                    className="mt-3 md:mt-6"
                    css={{ [media.max.tablet]: { fontSize: 10 } }}
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="hidden w-5 h-5 ml-3 -mr-2 fill-current md:block"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    Pre-Event Questionnaire
                  </ButtonLink>
                  <ButtonLink
                    href="/Freddie-Ravel_Rider_Keyboard.pdf"
                    className="mt-3 md:mt-6"
                    css={{ [media.max.tablet]: { fontSize: 10 } }}
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="hidden w-5 h-5 ml-3 -mr-2 fill-current md:block"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    A/V Requirements
                  </ButtonLink>
                  <ButtonLink
                    href="/Ravel-Press-Photos.zip"
                    className="mt-3 md:mt-6"
                    css={{ [media.max.tablet]: { fontSize: 10 } }}
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="hidden w-5 h-5 ml-3 -mr-2 fill-current md:block"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    Download photos
                  </ButtonLink>
                </div>
              </div>
            </div>
            <div className="self-start flex-1 hidden p-12 md:block">
              <Img fluid={data.planners.childImageSharp.fluid} />
            </div>
          </div>
        </AutoSlide>
      </div>
    </section>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
