import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Container from '../components/Container'
import ClientRaves from '../components/ClientRaves'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import MissionRings from '../components/MissionRings'
import VideoPlayer from '../components/VideoPlayer'
import ButtonLink from '../components/ButtonLink'
import { AutoSlide, AutoFade } from '../components/Animated'

import bgVideoColor from '../assets/bg-video-color.mp4'

export const query = graphql`
  query {
    waves: file(relativePath: { eq: "gold-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    freddie: file(relativePath: { eq: "freddie.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img1: file(relativePath: { eq: "keynotes-img-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img2: file(relativePath: { eq: "keynotes-img-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    signature: file(relativePath: { eq: "signature.png" }) {
      childImageSharp {
        fixed(width: 1928, height: 883, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Mission" />
    <section className="pt-10 text-white" css={{ backgroundColor: '#1b1b1b' }}>
      <div
        css={{
          display: 'grid',
          '--space': '13vw',
          gridTemplateColumns: 'var(--space) 1fr var(--space)',
          // [media.laptop]: {
          //   '--space': '13vw',
          //   gridTemplateColumns: 'var(--space) 1fr 1fr 1.5fr var(--space)',
          // },
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
          <VideoPlayer
            // label="Watch speaking demo"
            webroll={bgVideoColor}
            video={
              <iframe
                src="https://player.vimeo.com/video/259618922?autoplay=1&color=b4903a"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Watch The Experience"
                allowFullScreen
                className="w-full h-full absolute top-0 left-0 bg-black"
              />
            }
            ratio={1080 / 1920}
          />
        </AutoSlide>
      </div>
    </section>
    <div className="pb-20" css={{ backgroundColor: '#1b1b1b' }}>
      <Container>
        <h3
          className="mx-auto font-display leading-none text-white uppercase text-center"
          css={{ fontSize: '3.5vw', paddingTop: '7vw', maxWidth: '13em' }}
        >
          DISCOVER YOUR LIFE IN TUNE
        </h3>
        <p
          className="mx-auto mt-10 text-white text-center"
          css={{ maxWidth: '36em' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula
          ullamcorper malesuada proin libero nunc consequat interdum varius.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula
          ullamcorper malesuada proin libero nunc consequat interdum varius.
        </p>

        <MissionRings className="mt-12" />

        <AutoFade>
          <h3 className="relative mt-16 font-display font-hairline text-3xl leading-tight text-center text-white uppercase">
            Featured keynote topics
          </h3>
        </AutoFade>
        <ul className="flex -m-5 mt-12 relative">
          <AutoFade
            as="li"
            delay={0 * 100}
            className="flex-1 flex flex-col m-5 px-5 py-10 bg-gray-900 text-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">Rhythm of Success</h4>
            <p className="mt-5">
              The Rhythm of Success is a one-of-a-kind program designed to
              challenge and inspire organizations to discover their untapped
              potential through the power of Active Listening.
            </p>
            <ButtonLink to="/" className="self-center mt-10 text-white">
              Read more
            </ButtonLink>
          </AutoFade>
          <AutoFade
            as="li"
            delay={1 * 100}
            className="flex-1 flex flex-col m-5 px-5 py-10 bg-gray-900 text-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">Listen Up</h4>
            <p className="mt-5">
              The Rhythm of Success is a one-of-a-kind program designed to
              challenge and inspire organizations to discover their untapped
              potential through the power of Active Listening.
            </p>
            <ButtonLink to="/" className="self-center mt-10 text-white">
              Read more
            </ButtonLink>
          </AutoFade>
          <AutoFade
            as="li"
            delay={2 * 100}
            className="flex-1 flex flex-col m-5 px-5 py-10 bg-gray-900 text-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">Keynote Maestro</h4>
            <p className="mt-5">
              The Rhythm of Success is a one-of-a-kind program designed to
              challenge and inspire organizations to discover their untapped
              potential through the power of Active Listening.
            </p>
            <ButtonLink to="/" className="self-center mt-10 text-white">
              Read more
            </ButtonLink>
          </AutoFade>
          <AutoFade
            as="li"
            delay={3 * 100}
            className="flex-1 flex flex-col m-5 px-5 py-10 bg-gray-900 text-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">Master of Ceremonies</h4>
            <p className="mt-5">
              The Rhythm of Success is a one-of-a-kind program designed to
              challenge and inspire organizations to discover their untapped
              potential through the power of Active Listening.
            </p>
            <ButtonLink to="/" className="self-center mt-10 text-white">
              Read more
            </ButtonLink>
          </AutoFade>
        </ul>
      </Container>
    </div>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage