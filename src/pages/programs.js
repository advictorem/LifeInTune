import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Container from '../components/Container'
import ClientRaves from '../components/ClientRaves'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import ButtonLink from '../components/ButtonLink'
import { AutoSlide, AutoFade } from '../components/Animated'

export const query = graphql`
  query {
    waves: file(relativePath: { eq: "gold-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 80) {
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
    img2: file(relativePath: { eq: "workshops.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    musicDiplomacy: file(relativePath: { eq: "music-diplomacy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    rhythmofsuccess: file(relativePath: { eq: "rhythmofsuccess.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    musicofleadership: file(relativePath: { eq: "musicofleadership.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    resolvedisruption: file(relativePath: { eq: "resolvedisruption.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    teamwork: file(relativePath: { eq: "teamwork.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Programs" />
    <section
      id="the-rhythm-of-success"
      className="pt-10 text-white"
      css={{ backgroundColor: '#1b1b1b' }}
    >
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
            className="self-start w-full select-none"
          />
        </AutoFade>
        <Container
          css={{
            gridRow: 1,
            gridColumn: '1 / -1',
            zIndex: 3,
            marginTop: '13.5vw',
          }}
        >
          <AutoSlide up delay={300} className="mb-10 lg:mb-32">
            <header className="flex justify-center px-6 py-6 bg-black lg:py-12">
              <h3
                className="relative text-lg font-bold leading-tight text-center uppercase font-display lg:text-3xl text-gold-500"
                css={{
                  backgroundImage:
                    'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                The Rhythm of Success
              </h3>
            </header>
            <div className="flex bg-white">
              <Img
                fluid={data.rhythmofsuccess.childImageSharp.fluid}
                className="self-start flex-1 hidden lg:block"
                css={{
                  transform: 'translate(-48px, 48px)',
                  boxShadow: '0 5px 50px rgba(0, 0, 0, .4)',
                }}
              />
              <div className="flex-1 px-6 py-8 lg:py-12">
                <div css={{ maxWidth: '42em' }}>
                  <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                    The Rhythm of Success is a one-of-a-kind program designed to
                    challenge and inspire organizations to discover their
                    untapped potential through the power of Active Listening.
                    The format is fast-paced, entertaining, and as the secrets
                    of the world’s undisputed international language of music
                    are revealed, full of surprises. In this multimedia,
                    interactive “Keynote Concert” experience, your audience will
                    learn to:
                  </p>
                  <ul className="pr-5 mb-6 ml-5 leading-relaxed text-gray-600">
                    <li className="list-disc list-outside">
                      Enhance interpersonal and professional leadership skills
                    </li>
                    <li className="list-disc list-outside">
                      Amplify engagement
                    </li>
                    <li className="list-disc list-outside">
                      Clarify and SCORE desired goals and outcomes
                    </li>
                  </ul>
                  <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                    No matter what kind of organization—from small companies to
                    large corporations—employees at all levels will tune up to a
                    better future by becoming more collaborative, productive and
                    ultimately, more profitable. This presentation is sure to
                    open or close your meeting on a dynamic high note.
                  </p>
                  <ButtonLink to="/contact" className="inline-flex">
                    BOOK THIS KEYNOTE
                  </ButtonLink>
                </div>
              </div>
            </div>
          </AutoSlide>
        </Container>
      </div>
    </section>
    <div className="pb-20" css={{ backgroundColor: '#1b1b1b' }}>
      <Container>
        <AutoSlide
          as="section"
          id="the-music-of-leadership"
          up
          className="mb-10 lg:mb-32"
          css={{ scrollMargin: 150 }}
        >
          <header className="flex justify-center px-6 py-6 bg-black lg:py-12">
            <h3
              className="relative text-lg font-bold leading-tight text-center uppercase font-display lg:text-3xl text-gold-500"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              THE MUSIC OF LEADERSHIP
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 px-6 py-8 lg:py-12">
              <div css={{ maxWidth: '42em', marginLeft: 'auto' }}>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  This presentation takes your audience on a deep dive into the
                  role of "melody" within music and its’ power as the central
                  message to bring life to your products and services. When
                  leaders "sing" a better future, inspiration resonates across
                  the entire company’s culture. The Music of Leadership will
                  reveal:
                </p>
                <ul className="pr-5 mb-6 ml-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    How the strategic use of passion and purpose provide the
                    competitive edge to win.
                  </li>
                  <li className="list-disc list-outside">
                    Why a leader’s ultimate super-power is to step out of their
                    own head and get into their client’s shoes.
                  </li>
                  <li className="list-disc list-outside">
                    Why one’s personal purpose never gets heard unless it
                    ultimately serves others.
                  </li>
                </ul>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  No matter what kind of organization—from small companies to
                  large corporations—employees at all levels will tune up to a
                  better future by becoming more collaborative, productive and
                  ultimately, more profitable. This presentation is sure to open
                  or close your meeting on a dynamic high note.
                </p>
                <ButtonLink to="/contact" className="inline-flex">
                  BOOK THIS KEYNOTE
                </ButtonLink>
              </div>
            </div>
            <Img
              fluid={data.musicofleadership.childImageSharp.fluid}
              className="self-start flex-1 hidden lg:block"
              css={{
                transform: 'translate(48px, 48px)',
                boxShadow: '0 5px 50px rgba(0, 0, 0, .4)',
              }}
            />
          </div>
        </AutoSlide>

        <AutoSlide
          as="section"
          id="getting-in-tune-with-esg"
          up
          className="mb-10 lg:mb-32"
          css={{ scrollMargin: 150 }}
        >
          <header className="flex justify-center px-6 py-6 bg-black lg:py-12">
            <h3
              className="relative text-lg font-bold leading-tight text-center uppercase font-display lg:text-3xl text-gold-500"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Getting in Tune With ESG
              <span className="block text-sm lg:text-lg font-bold">
                (Environmental, Social, and Governance)
              </span>
            </h3>
          </header>
          <div className="flex bg-white">
            <Img
              fluid={data.resolvedisruption.childImageSharp.fluid}
              className="flex-1 hidden lg:block"
              css={{
                transform: 'translate(-48px, 48px)',
                boxShadow: '0 5px 50px rgba(0, 0, 0, .4)',
              }}
            />
            <div className="flex-1 px-6 py-8 lg:py-12">
              <div css={{ maxWidth: '42em' }}>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  As we enter this decisive decade, the urgency for companies to
                  move toward the issues of Environmental, Social, and
                  Governance (ESG) is greater than ever. However, many
                  organizations either don’t acknowledge the need nor have a
                  clear approach to help guide them, leaving them out of sync
                  and out of tune with their employees, colleagues and
                  customers. ESG is often viewed as just sustainability and
                  investments, but it’s much more than that – and includes a
                  host of areas ranging from workforce diversity and inclusion
                  to better treatment of workers. So how to get to good
                  governance? First, it’s important to listen – a vital skill
                  top musicians and business leaders share. In this revealing
                  and high-energy presentation, Ravel unlocks the secrets to
                  this keystone of all communication, helping your audience
                  understand the unique parallels between music and business
                  while gaining the ability to cut through the noise and achieve
                  clarity. This fun, interactive experience will help leaders
                  understand what disruption really sounds like, and then reveal
                  fresh techniques to overcome adversity and get in harmony with
                  the new corporate social responsibilities.
                </p>
                <ul className="pr-5 mb-6 ml-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    How to get from Good Governance to GREAT Governance.
                  </li>
                  <li className="list-disc list-outside">
                    What Disruption sounds like and more importantly, how to
                    resolve it.
                  </li>
                  <li className="list-disc list-outside">
                    Why symphonic sustainability replaces superficial
                    sustainability.
                  </li>
                </ul>
                <ButtonLink to="/contact" className="inline-flex">
                  BOOK THIS KEYNOTE
                </ButtonLink>
              </div>
            </div>
          </div>
        </AutoSlide>

        <AutoSlide
          as="section"
          id="teamwork"
          up
          className="mb-10 lg:mb-32"
          css={{ scrollMargin: 150 }}
        >
          <header className="flex justify-center px-6 py-6 bg-black lg:py-12">
            <h3
              className="relative font-bold text-lg leading-tight text-center uppercase font-display lg:text-3xl text-gold-500"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Teamwork: The Power of
              <br />
              Human Harmonics
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 px-6 py-8 lg:py-12">
              <div css={{ maxWidth: '42em', marginLeft: 'auto' }}>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  Have you ever heard a great-sounding band or orchestra where
                  everyone is a soloist? It simply doesn’t exist. For over a
                  decade, the Gallup polls reveal that four out of five
                  employees are disengaged in their work, costing the U.S.
                  economy over $500 billion annually in lost revenue. Freddie
                  shares his personal stories of how minorities and women have
                  opened doors to his ongoing success: from directing the iconic
                  band that bridged black and white America, Earth, Wind and
                  Fire, writing with Dr. Martin Luther King’s daughter, Yolanda
                  King, alongside Muhammad Ali, Robert Kennedy Jr. and Maya
                  Angelou, playing the GRAMMY’s with Prince, recording with
                  Madonna and packing stadiums with Afro-Latin-Blues-Rock legend
                  Carlos Santana. Driving home the message that when we LISTEN
                  UP and embrace Diversity and Inclusion, our team of collective
                  Melodies, Harmonies and Rhythms achieve the ultimate SCORE—a
                  state where organizations gain the distinct advantage needed
                  in today’s hypercompetitive marketplace. Your organization
                  will discover:
                </p>
                <ul className="pr-5 mb-6 ml-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    Music’s 3 KEYS to unlocking your potential.
                  </li>
                  <li className="list-disc list-outside">
                    How to immediately strengthen diversity and inclusion across
                    your culture.
                  </li>
                  <li className="list-disc list-outside">
                    Unparalleled insight into the power of the PAUSE within
                    music and daily life.
                  </li>
                </ul>
                <ButtonLink to="/contact" className="inline-flex">
                  BOOK THIS KEYNOTE
                </ButtonLink>
              </div>
            </div>
            <Img
              fluid={data.teamwork.childImageSharp.fluid}
              className="self-start flex-1 hidden lg:block"
              css={{
                transform: 'translate(48px, 48px)',
                boxShadow: '0 5px 50px rgba(0, 0, 0, .4)',
              }}
            />
          </div>
        </AutoSlide>

        <AutoSlide up className="mb-10 lg:mb-32">
          <header className="flex justify-center px-6 py-6 bg-black lg:py-12">
            <h3
              className="relative text-lg font-bold leading-tight text-center uppercase font-display lg:text-3xl text-gold-500"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              The Music of Diplomacy
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 px-6 py-8 lg:py-12">
              <div css={{ maxWidth: '39em', marginLeft: 'auto' }}>
                <q className="block pr-5 mb-6 text-xl italic leading-relaxed text-gray-600">
                  Music’s the great invitation For mankind to transcend spoken
                  word To enhance how we think And put into sync So we hear what
                  is mostly not heard.
                </q>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  Those words, from his number-one charting release, If Music
                  Could Speak, sum up the central message of everything Freddie
                  Ravel. Hailing from parents of Latin American and Eastern
                  European decent, his humble beginnings as a newspaper boy to
                  his rise as an internationally-renowned musical ambassador,
                  Ravel is a living example of the classic American success
                  story, highlighting that our strength and competitive
                  advantage as a nation lie in our diverse cultural roots and
                  experiences. Combined with his unrivaled passion for music and
                  business, Ravel unlocks the minds, hearts and potential of
                  audiences around the world.
                </p>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  For his ongoing contributions to education through music,
                  Ravel was recently knighted by the Knights of St. John, an
                  organization who has championed hospitals and healthcare for
                  over a 1,000 years. In this interactive program, Ravel
                  combines proven solutions towards resolving conflicts and
                  brings meaningful dialogue backed by scientific data and
                  creative musical expression to appeal to the mind, body and
                  soul of your conference participants.
                </p>
                <ul className="pr-5 mb-6 ml-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    Discover the three keys to genuine engagement.
                  </li>
                  <li className="list-disc list-outside">
                    Ignite your team with collaboration’s ultimate super power:
                    Harmony 
                  </li>
                  <li className="list-disc list-outside">
                    Learn the science of how melodies and identity combine
                    to strengthen connectivity.
                  </li>
                </ul>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  In these turbulent times of global chaos and relentless
                  disruption, Ravel equips your group with tangible results
                  revealing how music heals not only the sick—but the ills of
                  today’s society by bridging cultural divides that allow
                  conversations for peace to prosper and inspire greatness in
                  leaders and entrepreneurs alike.
                </p>
                <p className="pr-5 leading-relaxed text-gray-600">
                  Serving as a bridge between legendary music artists, business
                  leaders and the Fortune 500, Ravel has co-published works with
                  such visionaries as Earth, Wind and Fire, Carlos Santana,
                  Deepak Chopra and Dr. Martin Luther King Jr.’s daughter,
                  Yolanda King providing over two decades of
                  music-applied-to-life successes in both the public and private
                  sectors.
                </p>
              </div>
            </div>
            <div className="self-start flex-1 hidden p-12 lg:block">
              <Img fluid={data.musicDiplomacy.childImageSharp.fluid} />
              <p className="mt-3 text-xs text-right text-gray-500">
                Photo Credit: ChrisSavas.com
              </p>
            </div>
          </div>
        </AutoSlide>

        <AutoSlide up className="mb-10 lg:mb-32">
          <header className="flex justify-center px-6 py-6 bg-black lg:py-12">
            <h3
              className="relative text-lg font-bold leading-tight text-center uppercase font-display lg:text-3xl text-gold-500"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              The “Keynote Maestro”
              <br />
              Your Master of Ceremonies
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 px-6 py-8 lg:py-12">
              <div css={{ maxWidth: '39em', marginLeft: 'auto' }}>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  Want to keep your meeting moving or add an extra spark to make
                  your event unforgettable? Freddie Ravel as your emcee is the
                  answer. He combines your business themes and customized music
                  to rev up the energy of general sessions throughout the day,
                  your multi-day meeting or your awards ceremony. Freddie
                  strongly believes in advance planning to ensure your event’s
                  success. As your Emcee, he’ll work with you prior to your
                  event to reveal, punctuate and energize your audience through
                  short bursts of music and entertainment for that perfect segue
                  to your next speaker or award presenter. Count on a
                  world-class approach to:
                </p>
                <ul className="pr-5 mb-6 ml-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    Transform the mundane to the magnificent.
                  </li>
                  <li className="list-disc list-outside">
                    Collaboration with your team to reveal, punctuate and
                    energize your audience.
                  </li>
                  <li className="list-disc list-outside">
                    Provide the perfect segues to your next speaker, award
                    presenter and announcements.
                  </li>
                </ul>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  In constant demand as a keynote presenter, performer and
                  emcee, Freddie’s high energy and powerful stage presence
                  guarantees a lively and highly successful event as he ties
                  your program into a perfect bow that further empowers, uplifts
                  and inspires your audience. He is your assurance that the
                  mundane transforms to magnificent and why so many clients
                  invite him back year after year!
                </p>
                <ButtonLink to="/contact" className="inline-flex font-bold">
                  Request Freddie
                </ButtonLink>
              </div>
            </div>
            <div className="self-start flex-1 hidden p-12 lg:block">
              <Img
                fluid={{
                  ...data.img1.childImageSharp.fluid,
                  aspectRatio: 1.05,
                }}
              />
            </div>
          </div>
        </AutoSlide>

        <AutoSlide up>
          <header className="flex justify-center px-6 py-6 bg-black lg:py-12">
            <h3
              className="relative text-bold font-hairline leading-tight text-center uppercase font-display lg:text-3xl text-gold-500"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              WORKSHOPS / BREAKOUT SESSIONS
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 px-6 py-8 lg:py-12">
              <div css={{ maxWidth: '39em', marginLeft: 'auto' }}>
                <p className="pr-5 mb-6 leading-relaxed text-gray-600">
                  Ready to SCORE your next success story? While the Life In Tune
                  Keynote Experience serves as the ultimate conference
                  energizer, our WORKSHOPS take your attendees deeper by
                  accessing Music’s communicative powers to fine tune your
                  message. From elevating clarity of purpose to unleashing the
                  courage it takes for authentic breakthroughs, your team will
                  tune up to their greatest potential, synchronize their actions
                  and strike the chords of People, Planet and Profits that take
                  any out of tune business to a business that sings. We’re
                  honored that to serve as trusted advisors for many of the
                  world’s most influential businesses and institutions
                  including EY, Thompson Reuters and NASA.
                </p>
                <ButtonLink to="/contact" className="inline-flex font-bold">
                  INQUIRE FOR MORE INFO
                </ButtonLink>
              </div>
            </div>
            <div className="self-start flex-1 hidden p-12 lg:block">
              <Img fluid={data.img2.childImageSharp.fluid} />
            </div>
          </div>
        </AutoSlide>
      </Container>
    </div>
    <div className="hidden md:block">
      <ClientRaves />
    </div>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
