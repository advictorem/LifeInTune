import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'

import { media } from '../styles/tools'

import SEO from '../components/SEO'
import Container from '../components/Container'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import { AutoSlide, AutoFade } from '../components/Animated'

import aia from '../assets/logos/aia.svg'
import anz from '../assets/logos/anz.svg'
import bluecross from '../assets/logos/bluecross.svg'
import cox from '../assets/logos/cox.svg'
import cvent from '../assets/logos/cvent.svg'
import ibm from '../assets/logos/ibm.svg'
import jdpower from '../assets/logos/jdpower.svg'
import nasa from '../assets/logos/nasa.svg'
import reuters from '../assets/logos/reuters.svg'
import toyota from '../assets/logos/toyota.svg'
import twitter from '../assets/logos/twitter.svg'
import walmart from '../assets/logos/walmart.svg'
import emLogo from '../assets/logos/em.svg'
import microsoft from '../assets/logos/microsoft.svg'
import iasb from '../assets/logos/iasb.svg'
import sheraton from '../assets/logos/sheraton.svg'
import morgan from '../assets/logos/morgan.svg'
import roland from '../assets/logos/roland.svg'

export const query = graphql`
  query {
    waves: file(relativePath: { eq: "gold-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    hero: file(relativePath: { eq: "freddie-tony-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    carlosSantana: file(relativePath: { eq: "carlos-santana.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    madonna: file(relativePath: { eq: "madonna.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    chopra: file(relativePath: { eq: "chopra.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    testimonialsBg: file(relativePath: { eq: "testimonials-bg.png" }) {
      ...windowWide
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Buzz" />
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
            className="w-full self-start select-none"
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
          <Img fluid={data.hero.childImageSharp.fluid} />
        </AutoSlide>
      </div>
    </section>
    <div className="pb-10 md:pb-20" css={{ backgroundColor: '#1b1b1b' }}>
      <AutoFade>
        <Container>
          <h3
            className="mx-auto pt-10 font-bold text-xl leading-none text-white uppercase text-center"
            css={{ [media.tablet]: { fontSize: '3.2vw', paddingTop: '7vw' } }}
          >
            BUZZ & Accolades
          </h3>
        </Container>
      </AutoFade>
    </div>
    <section
      className="flex flex-col items-center relative pb-20 pt-5 md:pt-20 overflow-hidden"
      css={{ backgroundColor: '#1b1b1b' }}
    >
      <Container>
        <AutoSlide
          as="blockquote"
          className="relative bg-white"
          css={{ marginTop: '3.05vw' }}
        >
          <svg
            viewBox="0 0 146.9 95.8"
            className="w-12 h-12 md:w-24 md:h-24 absolute left-0 ml-5 md:ml-12"
            css={{ top: '-1.5rem', [media.tablet]: { top: '-3.1rem' } }}
          >
            <path
              fill="#c1b063"
              d="M47.1 35.1c12.4 4 19.7 15.4 19.7 29 0 19-15.4 31.7-32.7 31.7C16 95.8 0 83.1 0 64.1c0-11.7 4.7-22.7 13-34.4L34.1 0h25.4L47.1 35.1zm80.1 0c12.4 4 19.7 15.4 19.7 29 0 19-15.4 31.7-32.7 31.7-18 0-34.1-12.7-34.1-31.7 0-11.7 4.7-22.7 13-34.4l21-29.7h25.4l-12.3 35.1z"
            />
          </svg>
          <div className="relative px-5 md:px-12 py-10 md:py-16 pb-5 md:pb-5">
            <div
              className="inline-flex flex-col items-center"
              css={{ [media.tablet]: { width: 'calc(100% - 28% + 2%)' } }}
            >
              <p
                className="font-bold text-xl sm:text-3xl leading-tight text-gray-1000 text-center uppercase"
                css={{ maxWidth: '23em' }}
              >
                “Freddie’s spirit is infinite silence and dynamism at the same
                time.”
              </p>
              <p
                className="mt-4 text-gray-600 text-center"
                css={{ maxWidth: '26em' }}
              >
                Dr. Deepak Chopra, TIME magazine: “One of the top 100 heroes and
                icons of the 20th century.”
              </p>
              <p className="mt-6 md:self-end italic text-xs text-gray-400 text-right">
                Deepak Photo Credit: Michael Allen
              </p>
            </div>
            <Img
              fluid={data.chopra.childImageSharp.fluid}
              css={{
                width: '20%',
                position: 'absolute !important',
                bottom: 0,
                right: '4%',
                [media.max.tablet]: { display: 'none' },
              }}
            />
          </div>
          <div className="px-5 md:px-12 py-10 font-bold text-xl sm:text-3xl leading-tight text-center md:text-left uppercase text-gold-300 bg-gray-1000">
            Dr. Deepak Chopra
          </div>
        </AutoSlide>
        <AutoSlide
          right
          as="blockquote"
          className="relative bg-white"
          css={{ marginTop: '8vw' }}
        >
          <svg
            viewBox="0 0 146.9 95.8"
            className="w-12 h-12 md:w-24 md:h-24 absolute left-0 ml-5 md:ml-12"
            css={{ top: '-1.5rem', [media.tablet]: { top: '-3.1rem' } }}
          >
            <path
              fill="#c1b063"
              d="M47.1 35.1c12.4 4 19.7 15.4 19.7 29 0 19-15.4 31.7-32.7 31.7C16 95.8 0 83.1 0 64.1c0-11.7 4.7-22.7 13-34.4L34.1 0h25.4L47.1 35.1zm80.1 0c12.4 4 19.7 15.4 19.7 29 0 19-15.4 31.7-32.7 31.7-18 0-34.1-12.7-34.1-31.7 0-11.7 4.7-22.7 13-34.4l21-29.7h25.4l-12.3 35.1z"
            />
          </svg>
          <div className="relative px-5 md:px-12 py-10 md:py-20 pb-5 md:pb-5">
            <Img
              fluid={data.madonna.childImageSharp.fluid}
              css={{
                width: '20%',
                position: 'absolute !important',
                bottom: 0,
                left: '10%',
                [media.max.tablet]: { display: 'none' },
              }}
            />
            <div
              className="flex flex-col items-center ml-auto"
              css={{ [media.tablet]: { width: 'calc(100% - 33% + 2%)' } }}
            >
              <p className="font-bold text-xl sm:text-3xl text-gray-1000 text-center uppercase">
                “Freddie is brilliant.”
              </p>
              <p
                className="mt-3 text-gray-600 text-center"
                css={{ maxWidth: '28em' }}
              >
                Madonna, regarding Freddie’s studio and live performances with
                her for the flim, “EVITA”
              </p>
              <p className="mt-10 md:self-start italic text-xs text-gray-400 text-right">
                Madonna Photo Credit: Herb Ritts
              </p>
            </div>
          </div>
          <div className="px-5 md:px-12 py-10 font-bold text-xl sm:text-3xl leading-tight text-center md:text-left uppercase text-gold-300 bg-gray-1000">
            Madonna
          </div>
        </AutoSlide>
        <AutoSlide
          as="blockquote"
          className="relative bg-white"
          css={{ marginTop: '8vw' }}
        >
          <svg
            viewBox="0 0 146.9 95.8"
            className="w-12 h-12 md:w-24 md:h-24 absolute left-0 ml-5 md:ml-12"
            css={{ top: '-1.5rem', [media.tablet]: { top: '-3.1rem' } }}
          >
            <path
              fill="#c1b063"
              d="M47.1 35.1c12.4 4 19.7 15.4 19.7 29 0 19-15.4 31.7-32.7 31.7C16 95.8 0 83.1 0 64.1c0-11.7 4.7-22.7 13-34.4L34.1 0h25.4L47.1 35.1zm80.1 0c12.4 4 19.7 15.4 19.7 29 0 19-15.4 31.7-32.7 31.7-18 0-34.1-12.7-34.1-31.7 0-11.7 4.7-22.7 13-34.4l21-29.7h25.4l-12.3 35.1z"
            />
          </svg>
          <div className="relative px-5 md:px-12 py-10 md:py-20 pb-5 md:pb-5">
            <div
              className="inline-flex flex-col items-center"
              css={{
                [media.tablet]: { width: 'calc(100% - 26% + 2%)' },
              }}
            >
              <p className="font-bold text-xl sm:text-3xl text-gray-1000 text-center uppercase">
                “Freddie es puro corazon.”
              </p>
              <p
                className="mt-3 text-gray-600 text-center"
                css={{ maxWidth: '26em' }}
              >
                Carlos Santana, Rock and Roll Hall of Fame, 8 Grammys and over
                100 million albums sold
              </p>
              <p className="mt-10 md:self-end italic text-xs text-gray-400 text-right">
                Santana Photo Credit: Maryanne Bilham
              </p>
            </div>
            <Img
              fluid={data.carlosSantana.childImageSharp.fluid}
              css={{
                width: '28%',
                position: 'absolute !important',
                bottom: 0,
                right: '-5%',
                [media.max.tablet]: { display: 'none' },
              }}
            />
          </div>
          <div className="px-5 md:px-12 py-10 font-bold text-xl sm:text-3xl leading-tight text-center md:text-left uppercase text-gold-300 bg-gray-1000">
            CARLOS SANTANA
          </div>
        </AutoSlide>
      </Container>
    </section>
    <section
      className="flex flex-col items-center relative pt-10 md:pt-20 py-20 bg-white"
      css={{ paddingBottom: '17vw', background: '#f4f4f4' }}
    >
      <Img
        fluid={data.testimonialsBg.childImageSharp.fluid}
        className="w-full h-full top-0 left-0"
        imgStyle={{ objectFit: 'contain', objectPosition: 'bottom' }}
        css={{ position: 'absolute !important' }}
      />
      <Container>
        <AutoFade>
          <h3 className="relative font-bold font-hairline text-xl sm:text-3xl leading-tight text-center text-gray-700 uppercase">
            Client Raves and Reviews
          </h3>
        </AutoFade>
        <Masonry
          breakpointCols={{
            default: 4,
            1200: 3,
            1024: 2,
            500: 1,
          }}
          columnClassName=""
          className="flex -ml-5 mt-5 md:mt-12 relative"
        >
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={emLogo} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">
              “The attendee reaction we received to Freddie Ravel’s presentation
              at the cVent Elite Meetings Alliance last month was off the
              charts! His message was smart, clear, humorous, entertaining,
              energetic and provided real impactful lessons for our attendees.
              Our morning audience was as engaged as I’ve ever seen them, and
              thanks to Freddie, the rest of the day was as productive as I’ve
              ever seen in the 11 years we’ve been having this event.”
            </p>
            <p className="mt-5 text-sm">
              Kelly Foy, Founder of Elite Meetings International, a Cvent
              Company
            </p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={microsoft} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">
              “Thank you for an amazing presentation. What you said about how
              music applies to our business, listening and interaction with our
              customers was absolutely phenomenal!”
            </p>
            <p className="mt-5 text-sm">
              Colin McClive, Director of Financial Services, Microsoft
            </p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={cvent} alt="" className="block w-24 opacity-50" />
            <p className="mt-6">
              “The energy level was off the hook!
              <br />
              <br />
              "He did a terrific job weaving our message into his presentation.”
            </p>
            <p className="mt-5 text-sm">cVent</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={anz} alt="" className="block w-24 opacity-50" />
            <p className="mt-6">
              “He made it so relevant and so real for our audience.”
            </p>
            <p className="mt-5 text-sm">Australia New Zealand Bank</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={bluecross} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">
              “Transformative, Collaborative and Effective.”
            </p>
            <p className="mt-5 text-sm">Blue Cross/Blue Shield</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={cox} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">
              “Spellbinding stories to connect points of real importance to our
              culture”
            </p>
            <p className="mt-5 text-sm">CoxMedia</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={ibm} alt="" className="block w-20 opacity-50" />
            <p className="mt-6">
              “By far the best motivational performance we have seen”
            </p>
            <p className="mt-5 text-sm">IBM</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={toyota} alt="" className="block w-16 opacity-50" />
            <p className="mt-6">“Fantastic and Profound”</p>
            <p className="mt-5 text-sm">Toyota Motor Sales, USA</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={twitter} alt="" className="block w-12 opacity-50" />
            <p className="mt-6">
              “His masterful mapping of music to our everyday cadence was
              AMAZING!”
            </p>
            <p className="mt-5 text-sm">Twitter</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={nasa} alt="" className="block w-16 opacity-50" />
            <p className="mt-6">
              “Dazzling and Phenomenal - we are grateful for his exceptional
              legacy.”
            </p>
            <p className="mt-5 text-sm">NASA</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={walmart} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">"His incredible talent delivers”</p>
            <p className="mt-5 text-sm">WalMart</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={jdpower} alt="" className="block w-16 opacity-50" />
            <p className="mt-6">
              “He spoke to our employees as though he were one of us…. people
              walked out of the room electrified.”
            </p>
            <p className="mt-5 text-sm">
              Bangor Savings Bank
              <br />
              Voted # 1 by JD Powers
            </p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={aia} alt="" className="block w-16 opacity-50" />
            <p className="mt-6">
              “He rocked our conference with relevant messages delivered
              magnificently.”
            </p>
            <p className="mt-5 text-sm">AIA</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={reuters} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">"A Fantastic Experience”</p>
            <p className="mt-5 text-sm">Reuters</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={iasb} alt="" className="block w-24 opacity-50" />
            <p className="mt-6">
              “Special thanks to Freddie for sharing his fabulous energy and
              message at our 2016 Annual Convention!”
            </p>
            <p className="mt-5 text-sm">
              IASB – International Association of Speakers Bureaus
            </p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={sheraton} alt="" className="block w-24 opacity-50" />
            <p className="mt-6">
              “Learning Music’s role in leadership and how to ‘listen’ through
              all the clutter of data – WOW!”
            </p>
            <p className="mt-5 text-sm">Sheraton Hotels & Resorts</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={morgan} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">
              “His powerful presentation was pure joy and full of valuable
              lessons that we were able to implement immediately!”
            </p>
            <p className="mt-5 text-sm">
              Lydia Hopps, Senior Executive Financial Strategist, Morgan Stanley
            </p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={roland} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">
              “Freddie’s message is as awe-inspiring as his talent is stunning–
              he left my staff and I implementing his tools in our day-to-day
              business and private lives.”
            </p>
            <p className="mt-5 text-sm">
              Dennis Houlian, President, Roland Corporation, USA
            </p>
          </AutoFade>
        </Masonry>
      </Container>
    </section>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
