import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import { media } from '../styles/tools'

import SEO from '../components/SEO'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import ButtonLink from '../components/ButtonLink'
import VideoPlayer from '../components/VideoPlayer'
import Container from '../components/Container'
import { AutoSlide, AutoFade } from '../components/Animated'

import bgVideoColor from '../assets/bg-video-color.mp4'
import litSignet from '../assets/lit-signet.png'

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
    signature: file(relativePath: { eq: "signature.png" }) {
      childImageSharp {
        fixed(width: 1928, height: 883, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tl2003Mlk: file(relativePath: { eq: "timeline/2003-mlk.png" }) {
      ...textContainerWide
    }
    tl1988Sergiomendes: file(
      relativePath: { eq: "timeline/1988-sergiomendes.png" }
    ) {
      ...textContainerWide
    }
    tl1990RavelAlbum1: file(
      relativePath: { eq: "timeline/1990-ravel-album1.png" }
    ) {
      ...textContainerWide
    }
    tl1995Chopra: file(relativePath: { eq: "timeline/1995-chopra.png" }) {
      ...textContainerWide
    }
    tl1995Earthwindfire: file(
      relativePath: { eq: "timeline/1995-earthwindfire.png" }
    ) {
      ...textContainerWide
    }
    tl1996EvitaFilm: file(
      relativePath: { eq: "timeline/1996-evita-film.png" }
    ) {
      ...textContainerWide
    }
    tl1996RavelAlbum2: file(
      relativePath: { eq: "timeline/1996-ravel-album2.png" }
    ) {
      ...textContainerWide
    }
    tl2001RavelAlbum3: file(
      relativePath: { eq: "timeline/2001-ravel-album3.png" }
    ) {
      ...textContainerWide
    }
    tl2001Top30chart: file(
      relativePath: { eq: "timeline/2001-top30chart.png" }
    ) {
      ...textContainerWide
    }
    tl2009Santanatour: file(
      relativePath: { eq: "timeline/2009-santanatour.png" }
    ) {
      ...textContainerWide
    }
    tl2010FreddieSantana: file(
      relativePath: { eq: "timeline/2010-freddie-santana.png" }
    ) {
      ...textContainerWide
    }
    tl2011Santana: file(relativePath: { eq: "timeline/2011-santana.png" }) {
      ...textContainerWide
    }
    tl2012RavelKnightsofsaintjohn: file(
      relativePath: { eq: "timeline/2012-ravel-knightsofsaintjohn.png" }
    ) {
      ...textContainerWide
    }
    tl2014RavelAlbum4: file(
      relativePath: { eq: "timeline/2014-ravel-album4.png" }
    ) {
      ...textContainerWide
    }
    tl2015DonMiguel: file(
      relativePath: { eq: "timeline/freddie-ravel-don-miguel.jpg" }
    ) {
      ...textContainerWide
    }
    felipeCaldron: file(
      relativePath: { eq: "timeline/freddie-ravel-felipe-caldron.jpg" }
    ) {
      ...textContainerWide
    }
    rajivGhandi: file(
      relativePath: { eq: "timeline/freddie-ravel-rajiv-ghandi.jpg" }
    ) {
      ...textContainerWide
    }
    thailand: file(
      relativePath: { eq: "timeline/freddie-ravel-thailand.jpg" }
    ) {
      ...textContainerWide
    }
    georgeBenson: file(
      relativePath: { eq: "timeline/freddie-ravel-george-benson.jpg" }
    ) {
      ...textContainerWide
    }
    achuarTribe: file(
      relativePath: { eq: "timeline/freddie-ravel-achuar-tribe.jpg" }
    ) {
      ...textContainerWide
    }
    cityOfLosAngelesAward: file(
      relativePath: {
        eq: "timeline/freddie-ravel-city-of-los-angeles-award.jpg"
      }
    ) {
      ...textContainerWide
    }
    tl2019Lit: file(relativePath: { eq: "timeline/2019-LIT.png" }) {
      ...textContainerWide
    }
    mississippimasalamovie: file(
      relativePath: { eq: "timeline/freddie-ravel-mississippimasalamovie.jpg" }
    ) {
      ...textContainerWide
    }
    i2016usc: file(relativePath: { eq: "timeline/2016-usc.jpg" }) {
      ...textContainerWide
    }
    i2017TexasHurricaneHarvey: file(
      relativePath: { eq: "timeline/2017-texas-hurricane-harvey.jpg" }
    ) {
      ...textContainerWide
    }
    i2018ibm: file(relativePath: { eq: "timeline/2018-ibm.jpg" }) {
      ...textContainerWide
    }
    i2019PncBank: file(relativePath: { eq: "timeline/2019-pnc-bank.jpg" }) {
      ...textContainerWide
    }
    i2019Esg: file(relativePath: { eq: "timeline/2019-esg.jpg" }) {
      ...textContainerWide
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Speaker" />
    <section
      className="pt-10 pb-10 text-white"
      css={{ backgroundColor: '#1b1b1b' }}
    >
      <Container className="lg:hidden">
        <Img
          fluid={data.freddie.childImageSharp.fluid}
          className="w-full self-start"
          css={{ maxWidth: 500 }}
        />
        <h3
          className="mt-6 font-display text-xl leading-none uppercase text-white"
          css={{ maxWidth: '8em' }}
        >
          MEET FREDDIE RAVEL
        </h3>
        <p
          className="mt-3 font-display text-base leading-none uppercase text-gold-300"
          css={{ maxWidth: '20em' }}
        >
          Grammy-nominated performer, communication expert and business
          visionary
        </p>
        <p className="mt-6 text-sm leading-relaxed text-gray-400">
          With an unparalleled career that has consistently transcended the
          boundaries of music, culture and thought leadership, Freddie Ravel
          toured with Brazilian master Sergio Mendes, directed the legendary
          band that bridged black and white America - Earth, Wind and Fire,
          performed on the silver screen with the Queen of Pop - Madonna, rocked
          stadiums with Afro-Latin-Blues-Rock icon Carlos Santana, performed the
          Grammys with Prince, cut tracks with Kanye and led the teams behind J.
          Lo, Jimmy Kimmel and Lady GaGa to become the “Expert’s Expert” on
          multi-generational integration.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-gray-400">
          As an author, Freddie’s published works with Deepak Chopra on how
          music and thought cannot exist without silence illuminated that the
          “pause between the notes” is essential for effective communication.
          Highlighting the power of listening - whether to clients, colleagues
          or the signals that nature sends us - would lead to an invitation from
          the family of Dr. Martin Luther King, Jr. to be a featured author
          alongside Maya Angelou, Stevie Wonder, Muhammad Ali and Robert Kennedy
          Jr. in the book, Open My Eyes, Open My Soul.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-gray-400">
          Freddie would later be dubbed the “Keynote Maestro” by the City of Los
          Angeles for his groundbreaking Life In Tune™ system to “renew the
          national and international economy.” In constant demand to bring
          audiences in tune around the world, his clients include IBM, Toyota,
          NASA, Apple, Blue Cross Health, Google and Prudential Financial
          Services who call his “ideal balance of Entertainment and Content”
          essential for businesses and entrepreneurs to transform from
          dissonance to harmony.
        </p>
      </Container>
      <div
        css={{
          display: 'none',
          minHeight: '100vh',
          '--space': '20px',
          gridTemplateColumns: 'var(--space) .2fr 1fr 1.5fr var(--space)',
          [media.laptop]: {
            display: 'grid',
            '--space': '13vw',
            gridTemplateColumns: 'var(--space) 1fr 1fr 1.5fr var(--space)',
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
            gridColumn: '1 / 4',
            zIndex: 3,
            marginTop: '5.4vw',
          }}
        >
          <Img
            fluid={data.freddie.childImageSharp.fluid}
            className="w-full self-start"
            imgStyle={{ objectPosition: 'center top' }}
            css={{
              width: '100%',
              marginLeft: '8.5%',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
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
            css={{ width: '60%', marginTop: '-10vw', marginLeft: '23%' }}
          />
        </AutoSlide>
        <AutoSlide
          right
          delay={800}
          css={{
            gridRow: 1,
            gridColumn: '3 / -2',
            zIndex: 2,
            marginTop: '13.5vw',
            padding: '4.5%',
            paddingLeft: '33%',
            paddingBottom: '8%',
            background: `white url(${data.signature.childImageSharp.fixed.src}) center -2vw / 120% auto no-repeat`,
          }}
        >
          <h3
            className="font-display leading-none uppercase text-gray-900"
            css={{ maxWidth: '8em', fontSize: '3.3vw' }}
          >
            MEET FREDDIE RAVEL
          </h3>
          <p
            className="font-display leading-none uppercase text-gold-300"
            css={{
              maxWidth: '20em',
              margin: '1.2em 0',
              marginLeft: '-12%',
              fontSize: '1.8vw',
            }}
          >
            Grammy-nominated performer, communication expert and business
            visionary
          </p>
          <p
            className="pr-5 leading-relaxed text-gray-600"
            css={{ fontSize: '1vw' }}
          >
            With an unparalleled career that has consistently transcended the
            boundaries of music, culture and thought leadership, Freddie Ravel
            toured with Brazilian master Sergio Mendes, directed the legendary
            band that bridged black and white America - Earth, Wind and Fire,
            performed on the silver screen with the Queen of Pop - Madonna,
            rocked stadiums with Afro-Latin-Blues-Rock icon Carlos Santana,
            performed the Grammys with Prince, cut tracks with Kanye and led the
            teams behind J. Lo, Jimmy Kimmel and Lady GaGa to become the
            “Expert’s Expert” on multi-generational integration.
          </p>
          <p
            className="mt-6 pr-5 leading-relaxed text-gray-600"
            css={{ fontSize: '1vw' }}
          >
            As an author, Freddie’s published works with Deepak Chopra on how
            music and thought cannot exist without silence illuminated that the
            “pause between the notes” is essential for effective communication.
            Highlighting the power of listening - whether to clients, colleagues
            or the signals that nature sends us - would lead to an invitation
            from the family of Dr. Martin Luther King, Jr. to be a featured
            author alongside Maya Angelou, Stevie Wonder, Muhammad Ali and
            Robert Kennedy Jr. in the book, Open My Eyes, Open My Soul.
          </p>
          <p
            className="mt-6 pr-5 leading-relaxed text-gray-600"
            css={{ fontSize: '1vw' }}
          >
            Freddie would later be dubbed the “Keynote Maestro” by the City of
            Los Angeles for his groundbreaking Life In Tune™ system to “renew
            the national and international economy.” In constant demand to bring
            audiences in tune around the world, his clients include IBM, Toyota,
            NASA, Apple, Blue Cross Health, Google and Prudential Financial
            Services who call his “ideal balance of Entertainment and Content”
            essential for businesses and entrepreneurs to transform from
            dissonance to harmony.
          </p>
          <ButtonLink
            href="/LIT-Freddie-Ravel-Speaker-Programs2020-21_compressed.pdf"
            className="inline-flex mt-6 text-gray-900"
            icon={
              <svg
                viewBox="0 0 30 30"
                className="w-5 h-5 ml-3 -mr-2 fill-current"
              >
                <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
              </svg>
            }
          >
            Download one-sheet
          </ButtonLink>
        </AutoSlide>
      </div>
      <p className="flex justify-center items-center mt-10 lg:mt-20 font-display text-xs md:text-sm uppercase text-gray-500">
        <svg viewBox="0 0 23.1 29" className="w-8 h-8 mr-3 fill-current">
          <path
            d="M11.1 4c-.2-1.1-1.2-2-2.4-2a2.5 2.5 0 00-2.6 2.5v8.9c-2-1.8-4.2-3.2-5.6-1.8-2 2 2.2 5.9 5.4 11.8 2.3 4.1 5.5 5.6 8.7 5.6 4.7 0 8.5-3.8 8.5-8.5v-6c0-1.4-1.1-2.5-2.5-2.5-.6 0-1.1.2-1.5.5 0-1.4-1.1-2.5-2.5-2.5-.6 0-1.2.2-1.7.6a2.5 2.5 0 00-3.8-1.1V5h7l-3.2 3.2.8.8 4.5-4.5L15.7 0l-.8.8L18.2 4h-7.1zm3.5 24c4.1 0 7.5-3.6 7.5-7.5 0 0 0 2.3 0 0v-6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v.5h-1v-2.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V14h-1v-2.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V15h-1V4.5c0-.8-.6-1.5-1.5-1.5-.8 0-1.5.7-1.5 1.5v11.3c-2.1-2.2-4.8-4.6-5.9-3.5C.2 13.4 3 16.4 6.9 23c1.7 2.9 4 5 7.7 5z"
            fill-rule="evenodd"
          />
        </svg>
        Swipe to explore timeline
      </p>
    </section>
    <section
      className="relative z-0 px-5 lg:px-20 pt-6 pb-5 lg:pb-10 text-white overflow-hidden"
      css={{
        backgroundColor: '#1b1b1b',
        '.swiper-container': {
          overflow: 'visible !important',
        },
        '.img-hover-effect': {
          '@media (hover: hover)': {
            filter: 'grayscale(1)',
            ':hover': { filter: 'none' },
          },
        },
      }}
    >
      <div
        className="w-full h-px absolute left-0 bg-gray-600"
        css={{
          top: 'calc(6 * 4 / 16 * 1rem +  6 / 16 * 1rem)',
          zIndex: -1,
        }}
      ></div>
      <Swiper
        {...{
          spaceBetween: 20,
          grabCursor: true,
          slidesPerView: 1.1,
          breakpoints: {
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              freeMode: true,
              slidesPerView: 4,
              spaceBetween: 30,
            },
          },
        }}
      >
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1988-90
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl1988Sergiomendes.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">Sergio Mendes</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1989
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.rajivGhandi.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Director of USA-Indian Nehru Centenary concert for the Prime
              Minister of India, Rajiv Ghandi
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1990
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl1990RavelAlbum1.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              1st Solo Release: Midnight Passion on Verve 1990
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1990-95
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl1995Earthwindfire.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Composer, Director, Producer and Performer with Earth, Wind and
              Fire.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1991
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.mississippimasalamovie.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Film Soundtrack for "Mississippi Masala” starring Denzel
              Washington
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1995
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl1995Chopra.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Deepak Chopra Seminars - "Life in Tune” Presentation debut
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1996
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl1996RavelAlbum2.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              2nd Solo Release: Sol to Soul on Verve
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1996
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl1996EvitaFilm.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Madonna - 1996 “Evita” Film
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1999
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.thailand.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Freddie brings his band to Bangkok to perform for the King of
              Thailand
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2001
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl2001RavelAlbum3.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              3rd Solo Release: Freddie Ravel, Universal
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2001
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl2001Top30chart.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              #1 song in America on R&R Charts - Sunny Side Up 2001
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2003
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl2003Mlk.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Open my Eyes, Open my Soul
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2006
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.georgeBenson.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Produced and Co-wrote “Givin’ it Up for Love”, the title track of
              George Benson and Al Jarreau’s double-Grammy-award-winning project
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2008
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.achuarTribe.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Intercultural ambassador and environmental steward with the Achuar
              tribe leaders of the Amazon, Ecuador, S.A.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2009
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.cityOfLosAngelesAward.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Awarded by the City of Los Angeles for a music-based system to
              “renew the national and international economy.”
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2009
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl2009Santanatour.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">Santana World Tour</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2010
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl2010FreddieSantana.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">Santana World Tour</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2011
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl2011Santana.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Santana’s Guitar Heaven
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2012
          </div>
          <div className="img-hover-effect w-full transition">
            <Img
              fluid={{
                ...data.tl2012RavelKnightsofsaintjohn.childImageSharp.fluid,
                aspectRatio: 0.95,
              }}
              imgStyle={{ objectPosition: 'top' }}
            />
            <div className="p-5 bg-white text-gray-600">
              Knighted by the world’s oldest historic Order, “The Knights of St.
              John” , championing humanitarian work and health care for over
              1,000 years.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2014
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl2014RavelAlbum4.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              4th Solo Release: If Music Could Speak
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2015
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.tl2015DonMiguel.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Writing with author Don Miguel Ruiz, Sr. of “The Four Agreements.”
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2016
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.felipeCaldron.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Speaking at IASB alongside Mexico’s former President, Felipe
              Caldron
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2016
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.i2016usc.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Life In Tune expands to universities across the USA including USC,
              SIU and UCLA
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2017
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.i2017TexasHurricaneHarvey.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Overcoming Adversity Keynote to the Farm Credit Bank of Texas
              following Hurricane Harvey
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2018
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.i2018ibm.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              “Working with the IBM Teams in Europe, USA and Asia.”
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2019
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.i2019PncBank.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Advising PNC Bank’s “Diversity and Inclusion Leadership
              Conference” - Pittsburgh HQ
              <ButtonLink
                to="/programs"
                className="hidden md:block mt-6 text-gray-900"
              >
                SEE PROGRAM
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2019
          </div>
          <div className="img-hover-effect w-full transition">
            <Img fluid={data.i2019Esg.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Addressing ESG - Environment, Social and Governance to multiple
              global policy leaders.
              <ButtonLink
                to="/programs"
                className="hidden md:block mt-6 text-gray-900"
              >
                SEE PROGRAM
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            PRESENT
          </div>
          <div className="img-hover-effect w-full transition">
            <div css={{ display: 'grid' }}>
              <Img
                fluid={data.tl2019Lit.childImageSharp.fluid}
                css={{ gridArea: '1 / 1 / 2 / 2' }}
              />
              <img
                src={litSignet}
                alt="LIT Logo"
                className="w-1/2 m-auto"
                css={{ gridArea: '1 / 1 / 2 / 2', zIndex: 1 }}
              />
            </div>
            <div className="p-5 bg-white text-gray-600">
              Life In Tune Corporate Training, Presentations, Workshops,
              Keynotes - 81 countries and counting!
            </div>
          </div>
        </div>
      </Swiper>
    </section>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
