import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Container from '../components/Container'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import MissionRings from '../components/MissionRings'
import VideoPlayer from '../components/VideoPlayer'
import ButtonLink from '../components/ButtonLink'
import { AutoSlide, AutoFade } from '../components/Animated'

export const query = graphql`
  query {
    missionPoster: file(relativePath: { eq: "lifeintunemissionthumbnail.jpg" }) {
      ...pageContainerWide
    }
    waves: file(relativePath: { eq: "gold-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
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
            // webroll={}
            poster={<Img fluid={data.missionPoster.childImageSharp.fluid} />}
            video={
              <iframe
                src="https://www.youtube.com/embed/foAQL5Dp4QY?autoplay=1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Watch The Experience"
                allowFullScreen
                className="w-full h-full absolute top-0 left-0 bg-black"
              />
            }
            ratio={1080 / 1920}
            css={{ '.gatsby-image-wrapper': { opacity: 0.8 } }}
          />
        </AutoSlide>
      </div>
    </section>
    <div className="pb-20" css={{ backgroundColor: '#1b1b1b' }}>
      <Container>
        <h3
          className="mx-auto font-bold leading-none text-white uppercase text-center"
          css={{ fontSize: '3.2vw', paddingTop: '7vw', maxWidth: '13em' }}
        >
          DISCOVER YOUR LIFE IN TUNE
        </h3>
        <p
          className="mx-auto mt-10 text-white text-center"
          css={{ maxWidth: '36em' }}
        >
          GET L.I.T. with the Life in Tune<sup>®</sup> system that’s harnessed a revolution
          of solutions by conducting life through Music’s three key elements.
        </p>

        <MissionRings className="mt-12" />

        <AutoFade>
          <h3 className="relative mt-16 font-bold text-3xl leading-tight text-center text-white uppercase">
            Featured Programs
          </h3>
        </AutoFade>
        <ul className="flex flex-col lg:flex-row -m-5 mt-12 relative">
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
            <ButtonLink
              to="/programs#the-rhythm-of-success"
              className="self-center mt-10 text-white"
            >
              LEARN MORE
            </ButtonLink>
          </AutoFade>
          <AutoFade
            as="li"
            delay={1 * 100}
            className="flex-1 flex flex-col m-5 px-5 py-10 bg-gray-900 text-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">The Music of Leadership</h4>
            <p className="mt-5">
              This presentation takes your audience on a deep dive into the role
              of "melody" within music and its’ power as the central message to
              bring life to your products and services.
            </p>
            <ButtonLink
              to="/programs#the-music-of-leadership"
              className="self-center mt-10 text-white"
            >
              LEARN MORE
            </ButtonLink>
          </AutoFade>
          <AutoFade
            as="li"
            delay={2 * 100}
            className="flex-1 flex flex-col m-5 px-5 py-10 bg-gray-900 text-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">Getting in Tune With ESG</h4>
            <p className="mt-5">
              This interactive experience takes your audience into what
              disruption actually sounds like and then, through revealing
              techniques to overcome adversity, transforms dissonance to
              resolution.
            </p>
            <ButtonLink
              to="/programs#getting-in-tune-with-esg"
              className="self-center mt-10 text-white"
            >
              LEARN MORE
            </ButtonLink>
          </AutoFade>
          <AutoFade
            as="li"
            delay={3 * 100}
            className="flex-1 flex flex-col m-5 px-5 py-10 bg-gray-900 text-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">Teamwork</h4>
            <p className="mt-5">
              This collaborative discussion unlocks the power of human harmonics
              organizations need to gain a distinct advantage in today’s
              hypercompetitive marketplace.
            </p>
            <ButtonLink
              to="/programs#teamwork"
              className="self-center mt-10 text-white"
            >
              LEARN MORE
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
