import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import useScrolledBelow from '../hooks/useScrolledBelow'

import Head from '../components/Head'
import Social from '../components/Social'
import Container from '../components/Container'
import Link from '../components/Link'
import ButtonLink from '../components/ButtonLink'
import Logo from '../components/Logo'
import { AutoFade } from '../components/Animated'
import { media, max } from '../styles/tools'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import newsletterImage from '../assets/newsletter-image.png'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const HamburgerBtn = props => (
  <button
    css={{
      width: 45,
      height: 39,
    }}
    {...props}
  >
    <div
      css={{
        width: 25,
        height: 3,
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'currentColor',
        transition: '.5s cubic-bezier(0.8, 0, 0.2, 1)',
        willChange: 'transform',
        '.is-open > &': {
          transform: 'translateY(8px) rotate(45deg) scale(1.1)',
        },
      }}
    />
    <div
      css={{
        width: 25,
        height: 3,
        position: 'absolute',
        top: 18,
        left: 10,
        backgroundColor: 'currentColor',
        transition: '.5s cubic-bezier(0.8, 0, 0.2, 1)',
        willChange: 'transform',
        '.is-open > &': { transform: 'rotate(-45deg) scale(1.1)' },
      }}
    />
    <div
      css={{
        width: 15,
        height: 3,
        position: 'absolute',
        top: 26,
        left: 20,
        backgroundColor: 'currentColor',
        transition: '.5s cubic-bezier(0.77, 0, 0.175, 1)',
        willChange: 'transform, opacity',
        transformOrigin: 'bottom right',
        '.is-open > &': { transform: 'scale(0)', opacity: 0 },
      }}
    />
  </button>
)

const NewsletterModal = props => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 10 * 1000)
  }, [])

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: 40,
        top: 0,
        left: 0,
        padding: 20,
        transition: '.5s',
      }}
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        zIndex: `${open ? '40' : '-1'}`,
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(255, 255, 255, .2)',
        }}
        onClick={() => setOpen(false)}
      />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: 700,
          height: 'auto',
          position: 'relative',
          padding: 20,
          backgroundColor: '#1b1b1b',
          borderRadius: 10,
          [media.tablet]: {
            transform: 'translateX(15%)',
            padding: '3% 2% 3% 7%',
          },
        }}
      >
        <img
          src={newsletterImage}
          css={{
            height: '162%',
            position: 'absolute',
            top: '-37%',
            left: '-40%',
            display: 'none',
            [media.tablet]: {
              display: 'block',
            },
          }}
        />
        <button
          css={{
            position: 'absolute',
            top: 14,
            right: 14,
            opacity: 0.6,
            transition: '.2s',
            ':focus': { outline: 'none' },
            ':hover': { opacity: 1 },
          }}
          onClick={() => setOpen(false)}
        >
          <svg viewBox="0 0 24 24" css={{ width: 26, height: 26 }}>
            <path
              fill="white"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </button>

        <h3
          className="relative mx-auto text-lg font-hairline leading-tight text-center uppercase font-display sm:text-3xl text-gold-500"
          css={{
            backgroundImage:
              'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          STAY IN TUNE!
        </h3>
        <p
          className="relative mx-auto mt-2 text-center text-white"
          css={{ maxWidth: '30ch' }}
        >
          With tips, techniques, and tons of fun from Freddie Ravel.
        </p>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',     
            email: '',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
          })}
          onSubmit={(formData, { setStatus }) => {
            fetch('/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: encode({
                'form-name': 'newsletter',
                ...formData,
              }),
            })
              .then(() => setStatus({ sent: true }))
              .catch(() => setStatus({ sent: false }))
          }}
        >
          {({
            values,
            errors,
            touched,
            status: { sent } = {},
            handleChange,
            handleBlur,
          }) => (
            <Form
              name="newsletter"
              data-netlify="true"
              className="relative mx-auto mt-4"
              css={{ display: 'grid', gridTemplate: '1fr / 1fr' }}
            >
              <div
                className="flex flex-col"
                css={{ gridColumn: '1', gridRow: '1', transition: '.3s' }}
                style={{
                  opacity: !sent ? 1 : 0,
                  pointerEvents: !sent ? 'all' : 'none',
                }}
              >
                <div class="flex flex-col md:flex-row md:gap-5">
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="block h-12 pl-4 text-lg text-gray-900 rounded-lg outline-none appearance-none focus:border-gray-800 md:mb-6 mb-4"
                  />
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="block h-12 pl-4 text-lg text-gray-900 rounded-lg outline-none appearance-none focus:border-gray-800 md:mb-6 mb-4"
                  />
                </div>
                <Field
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="block w-full h-12 pl-4 text-lg text-gray-900 rounded-lg outline-none appearance-none focus:border-gray-800 mb-6"
                />
                <ButtonLink
                  as="button"
                  type="submit"
                  className="h-12 m-auto"
                  css={{ padding: '0 30px' }}
                >
                  JOIN
                </ButtonLink>
              </div>
              <div
                className="text-2xl text-white"
                css={{
                  justifySelf: 'center',
                  alignSelf: 'center',
                  gridColumn: '1',
                  gridRow: '1',
                  transition: '.3s',
                }}
                style={{
                  opacity: sent ? 1 : 0,
                  pointerEvents: sent ? 'all' : 'none',
                }}
              >
                <div className="text-center mb-5">Thank you</div>
                <div className="text-center text-sm">
                  <Social heading={'Stay in Touch!'}/>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

const Navbar = props => {
  const isBelow = useScrolledBelow(30)
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <AutoFade
      options={{ triggerOnce: true, rootMargin: '0px' }}
      duration={1500}
      className="fixed top-0 left-0 z-40 w-full"
    >
      <header
        className="hidden py-5 font-hairline text-white ease-out xl:block font-display transition-slow"
        style={{
          paddingTop: 48,
          transform: isBelow ? 'translateY(-28px)' : 'none',
        }}
        {...props}
      >
        <div
          className="absolute top-0 left-0 w-full h-full ease-out transition-slow"
          css={{ backgroundColor: 'rgba(26, 26, 26, .8)' }}
          style={{ opacity: isBelow ? 1 : 0 }}
        ></div>
        {/* <img
          src={muse}
          alt="Muse Award"
          className="absolute top-0 left-0 w-10 ml-4 ease-out transition-slow"
          style={{ transform: isBelow ? 'translateY(28px)' : 'none' }}
        /> */}
        <Container
          as="nav"
          className="flex items-center justify-center"
          css={{ lineHeight: '50px' }}
        >
          <div className="relative">
            <div className="absolute flex" css={{ top: 0, right: '100%' }}>
              <Link
                to="/programs"
                className="px-2 text-xs uppercase 2xl:text-sm lg:px-5 2xl:px-8 hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                Programs
              </Link>
              <Link
                to="/about"
                className="px-2 text-xs uppercase 2xl:text-sm lg:px-5 2xl:px-8 hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                About
              </Link>
              <Link
                to="/mission"
                className="px-2 text-xs uppercase 2xl:text-sm lg:px-5 2xl:px-8 hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                Mission
              </Link>
            </div>
            <Link
              to="/"
              className="block px-2"
              css={{
                display: 'grid',
                gridTemplate: '"center" 1fr  / 1fr',
                justifyItems: 'center',
              }}
            >
              <svg
                viewBox="0 0 330 17.6"
                className="ease-out transition-slow"
                css={{ gridArea: 'center', width: 260, height: 50 }}
                style={{
                  opacity: isBelow ? 1 : 0,
                  visibility: isBelow ? 'visible' : 'hidden',
                  transform: isBelow ? 'none' : 'scale(.9)',
                }}
              >
                <linearGradient
                  id="a"
                  x1="0"
                  x2="300"
                  y1="3"
                  y2="3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".2" stopColor="#d6b65f" />
                  <stop offset=".49" stopColor="#fffea6" />
                  <stop offset=".94" stopColor="#91742d" />
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M28.52,15.12H2.52V1.12c.1-.5-.3-.9-.8-1h-.7C.53.11.11.44.02.92v15.5c-.1.5.3.9.8,1h27.7c.5.1.9-.3,1-.8v-.5c.1-.5-.3-.9-.8-1h-.2ZM36.82.12h.5c.5,0,1,.4,1,1v15.3c0,.5-.4,1-1,1h-.5c-.55,0-1-.45-1-1V1.12c0-.5.5-1,1-1ZM70.72.12h-27.1c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h.7c.5.1.9-.3,1-.8v-6.4h24.1c.5.1.9-.3,1-.8v-.5c.1-.5-.3-.9-.8-1h-24.3V2.42h25.6c.5,0,1-.3,1-.8v-.5c0-.5-.3-1-.8-1h-.2ZM104.42.12h-27.1c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h27.3c.5.1.9-.3,1-.8v-.5c0-.5-.3-1-.8-1h-25.8v-5h24.2c.5,0,1-.3,1-.8v-.6c0-.5-.3-1-.8-1h-24.4V2.42h25.6c.5.1.9-.3,1-.8v-.5c.1-.5-.3-.9-.8-1h-.2ZM298.02,2.42c.5,0,1-.3,1-.8v-.5c0-.5-.3-1-.8-1h-27.3c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h27.3c.5,0,1-.3,1-.8v-.5c0-.5-.3-1-.9-1h-25.7v-5h24.1c.5,0,1-.3,1-.8v-.6c.1-.5-.3-.9-.8-1h-24.3V2.42h25.6ZM202.42.12h-27.5c-.5-.1-.9.3-1,.8v.5c-.1.5.3.9.8,1h12.3v14c-.1.5.3.9.8,1h.7c.5.1.9-.3,1-.8V2.42h13c.5.1.9-.3,1-.8v-.5c.1-.5-.3-.9-.8-1h-.3ZM231.22.12h-.5c-.5-.1-.9.3-1,.8v7.8c0,4.2-3.4,6.6-9.4,6.6h-.8c-6.1,0-9.4-2.3-9.4-6.6V1.12c.1-.5-.3-.9-.8-1h-.7c-.5-.1-.9.3-1,.8v7.8c0,5.8,4.1,8.9,11.8,8.9h.8c7.8,0,11.9-3.1,11.9-8.9V1.12c.1-.5-.3-.9-.9-1q.1,0,0,0h0ZM264.62.12h-.5c-.5-.1-.9.3-1,.8v13.3l-17.8-10.3-6.5-3.8h-1.3c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h.7c.5.1.9-.3,1-.8V3.32l11.6,6.7,12.5,7.2,1,.2h.5c.5.1.9-.3,1-.8V1.12c.1-.5-.3-.9-.8-1h-.2ZM157.12.12h-.5c-.5-.1-.9.3-1,.8v13.3l-17.8-10.3-6.5-3.8-.3-.1h-1c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h.7c.5.1.9-.3,1-.8V3.32l11.6,6.7,12.5,7.2,1,.2h.5c.5.1.9-.3,1-.8V1.12c.1-.5-.3-.9-.8-1h-.2ZM123.22.12h.5c.5,0,1,.4,1,1v15.3c0,.5-.4,1-1,1h-.5c-.55,0-1-.45-1-1V1.12c0-.5.5-1,1-1ZM309.78.12c-3.53,0-6.39,2.86-6.39,6.39s2.86,6.39,6.39,6.39,6.39-2.86,6.39-6.39-2.86-6.39-6.39-6.39ZM309.78,11.69c-2.86,0-5.19-2.33-5.19-5.19s2.33-5.19,5.19-5.19,5.19,2.33,5.19,5.19-2.33,5.19-5.19,5.19ZM312.18,5.3c0-1.1-.89-1.99-2-2h-2.2c-.33,0-.6.27-.6.6v5.19c0,.33.27.6.6.6s.6-.27.6-.6v-1.8h1.49l.96,2.05c.14.3.5.43.8.29s.43-.5.29-.8c0,0,0,0,0,0l-.87-1.86c.58-.36.92-1,.93-1.68ZM310.18,6.1h-1.6v-1.6h1.6c.44,0,.8.36.8.8s-.36.8-.8.8Z"
                />
              </svg>
              <Logo
                className="absolute ease-out hover:text-gold-300 transition-slow"
                css={{
                  gridArea: 'center',
                  width: 150,
                  left: 'calc(50% - 75px)',
                  marginTop: -24,
                }}
                style={{
                  opacity: isBelow ? 0 : 1,
                  visibility: isBelow ? 'hidden' : 'visible',
                  transform: isBelow ? 'scale(1.1) translateY(-25%)' : 'none',
                }}
              />
            </Link>
            <div
              className="absolute flex items-center"
              css={{ top: 0, left: '100%' }}
            >
              <Link
                to="/buzz"
                className="px-2 text-xs uppercase 2xl:text-sm lg:px-5 2xl:px-8 hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                Buzz
              </Link>
              <Link
                to="/planners"
                className="px-2 text-xs uppercase 2xl:text-sm lg:px-5 2xl:px-8 hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                Planners
              </Link>
              <div className="px-2 lg:px-5 2xl:px-10">
                <div className="relative">
                  <a
                    href="tel:+18572673669"
                    className="absolute top-0 left-0 block w-full text-xs font-bold text-center text-white transition"
                    css={{ top: -38 }}
                  >
                    (857) 267-3669
                  </a>
                  <ButtonLink
                    to="/contact"
                    className="pl-4 pr-4 tracking-tighter whitespace-no-wrap sm:text-xs 2xl:text-sm"
                  >
                    BOOK NOW/CONTACT
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <header className="fixed top-0 left-0 flex items-center w-full h-16 pr-5 bg-black xl:hidden">
        {/* <img
          src={muse}
          alt="Muse Award"
          className="self-start object-contain object-top w-6 h-full ml-2 sm:w-12 sm:h-auto sm:ml-5"
        /> */}
        <Link
          to="/"
          onClick={() => setMobileNavOpen(false)}
          className="flex items-center mx-auto"
        >
          <svg
            viewBox="0 0 78.415 78.415"
            className="w-8 h-8 mr-2"
            css={{ [max(350)]: { display: 'none' } }}
          >
            <path
              fill="url(#b)"
              fillRule="evenodd"
              d="M20.066 5.038a.21.21 0 01-.025-.085c.223-.127.446-.253.672-.375 6.478 11.899 6.057 10.943 6.004 11.474-.032.307.132.783.288 1.142-1.474-2.583-4.864-8.523-6.939-12.156zm1.972 15.87c-.238-.31-.512-.732-.556-1.035-.076-.539.552.292-8.635-9.668-.187.172-.374.346-.558.522.01.034.025.066.05.091l9.699 10.09zm-4.257 5.264l-11.98-7.117a.226.226 0 00-.118-.027 39.159 39.159 0 00-1.97 3.755l11.428 5.195c.234.104.321-.183.429-.422.053-.104.596-1.174.657-1.273.187-.325.697-.188.978-.078-.748-.092-.672.043-1.162.974-.112.222-.234.44-.38.778-.209.464.228 1.046.692 1.246.113.048.191.024.251-.035.395-.916.843-1.804 1.341-2.659a.349.349 0 00-.166-.337zm8.815 34.466l-7.117 11.981a.254.254 0 00-.017.207c1.2.71 2.44 1.359 3.718 1.94l5.222-11.487c.104-.235-.183-.321-.422-.429-1.052-.537-1.174-.596-1.273-.657-.325-.187-.188-.697-.078-.978-.019.158-.117.573.204.762a31.29 31.29 0 001.548.78c.608.275 1.442-.608 1.221-.929a24.728 24.728 0 01-2.68-1.355.343.343 0 00-.326.165zM14.49 42.312L.674 44.13a.249.249 0 00-.153.076c.185 1.411.447 2.798.778 4.158l12.229-2.997c.319-.087.069-.497-.041-1.171a419.61 419.61 0 01-.149-.836c-.07-.367.425-.576.714-.665-.628.38-.572.324-.123 2.331.159.665 1.412.752 1.489.37-.252-.95-.45-1.923-.589-2.914a.342.342 0 00-.339-.17zm4.569 11.449l-11.275 8.19a.254.254 0 00-.097.172 39.31 39.31 0 002.643 3.252l9.336-8.468c.223-.208-.039-.335-.955-1.469-.172-.219-.509-.474.143-1.129-.082.139-.332.477-.105.772 1.151 1.441 1.233 1.624 1.811 1.534.33-.051.848-.312.798-.565a24.924 24.924 0 01-1.924-2.302.337.337 0 00-.375.013zm-3.001-5.44l-12.941 5.17a.25.25 0 00-.133.138 39.083 39.083 0 001.772 3.813l11.12-5.925c.272-.148-.004-.432-.327-1.122l-.35-.774c-.158-.341.268-.663.527-.821-.496.502-.485.442.456 2.289.294.6 1.543.384 1.535-.005a24.778 24.778 0 01-1.291-2.682.34.34 0 00-.368-.081zM15.22 32.14L1.81 28.348a.235.235 0 00-.149.014 38.89 38.89 0 00-.926 4.125l12.395 2.075c.294.046.208-.149.616-1.916.079-.367.623-.361.921-.329-.738.113-.648.052-1.034 2.092-.12.676 1.003 1.247 1.221.926.146-.99.351-1.961.611-2.909a.345.345 0 00-.245-.286zm44.564-7.905l11.275-8.19a.184.184 0 00.044-.044 39.522 39.522 0 00-2.682-3.297l-9.244 8.385c-.114.106-.079.24.035.372.958 1.105.554.645.92 1.098.172.219.509.474-.143 1.129.351-.596.358-.535-1.004-2.107-.406-.488-1.494-.032-1.496.338a25.035 25.035 0 011.967 2.353.34.34 0 00.328-.037zm3.001 5.439l12.941-5.17a.246.246 0 00.065-.041 39.148 39.148 0 00-1.799-3.859l-11.025 5.875c-.224.122-.057.364.064.6.31.622.048.045.613 1.296.158.341-.268.663-.527.821.502-.508.397-.501-.062-1.516l-.394-.772c-.224-.457-.977-.453-1.412-.205-.082.045-.117.095-.121.159.5.891.946 1.816 1.335 2.771.09.065.211.085.322.041zm1.567 6.009l13.816-1.818a.237.237 0 00.084-.031 39.164 39.164 0 00-.791-4.182l-12.146 2.977c-.15.041-.183.173-.144.342.202.874.122.48.334 1.665.07.367-.425.576-.714.665.632-.382.57-.334.123-2.331-.153-.638-1.301-.743-1.472-.419.263.983.468 1.989.609 3.016a.338.338 0 00.301.116zM24.658 18.635L16.468 7.36a.226.226 0 00-.07-.06 39.532 39.532 0 00-3.296 2.67l8.41 9.271c.106.114.24.079.372-.035 1.105-.958.645-.555 1.098-.92.216-.17.473-.51 1.129.143-.613-.361-.556-.34-2.107 1.004-.502.418-.005 1.57.374 1.492a25.133 25.133 0 012.297-1.922.338.338 0 00-.017-.368zm5.439-3.001L24.928 2.693a.225.225 0 00-.046-.069 38.897 38.897 0 00-3.861 1.791l5.882 11.038c.122.224.364.057.6-.064.611-.305.045-.048 1.296-.613.341-.158.663.268.821.527-.508-.502-.501-.397-1.516.062l-.772.394c-.457.224-.453.977-.205 1.412.054.097.111.134.197.124a24.703 24.703 0 012.707-1.305.344.344 0 00.066-.356zm22.15 1.724l7.117-11.981a.272.272 0 00.022-.05 39.139 39.139 0 00-3.778-1.976l-5.167 11.366c-.111.25.067.246 1.462.96.277.136.638.266.311 1.105.019-.158.117-.573-.204-.762a31.29 31.29 0 00-1.548-.78c-.464-.209-1.046.228-1.246.692-.039.093-.03.162.006.216.941.404 1.853.864 2.73 1.377a.349.349 0 00.295-.167zm-16.14-3.291L34.289.25a.294.294 0 00-.016-.068 38.895 38.895 0 00-4.195.784l2.975 12.137c.041.15.173.183.342.144.872-.201.481-.123 1.665-.334.367-.07.576.425.665.714-.382-.632-.33-.57-2.331-.123-.657.157-.748 1.369-.387 1.483a24.814 24.814 0 012.955-.599.34.34 0 00.145-.321zm10.172.729l3.792-13.41a.341.341 0 00.011-.061 39.013 39.013 0 00-4.164-.932l-2.061 12.312c-.039.252.255.266.516.312.547.104-.073-.037 1.4.303.367.079.361.623.329.921-.112-.732-.043-.646-2.092-1.034-.671-.119-1.206.944-.945 1.201 1.01.148 2 .356 2.967.622a.335.335 0 00.247-.234zm14.782 37.027l11.981 7.117a.225.225 0 00.131.026 39.157 39.157 0 001.955-3.755l-11.425-5.194c-.252-.112-.293.157-.694.942-.05.099-.334.659-.392.753-.187.325-.697.188-.978.078.745.091.67-.038 1.162-.974.112-.223.234-.44.38-.778.266-.59-.557-1.394-.899-1.24-.406.945-.87 1.86-1.385 2.741a.336.336 0 00.164.284zm4.339-7.874c-.104.548.037-.075-.303 1.4-.079.367-.623.361-.921.329.717-.109.643-.027 1.034-2.092.116-.657-.903-1.185-1.186-.961a24.832 24.832 0 01-.632 3.005.338.338 0 00.231.226l13.41 3.792a.23.23 0 00.119-.003c.378-1.353.685-2.735.917-4.143l-12.357-2.069c-.251-.039-.265.255-.312.516zm-32.837 19.25l-3.792 13.41a.261.261 0 00.039.21c1.337.374 2.703.677 4.093.909l2.083-12.439c.039-.252-.255-.266-.516-.312-.547-.104.073.037-1.4-.303-.366-.079-.36-.623-.329-.921.108.706.121.615 1.24.874.242.06.49.092.853.16.248.044.488-.074.672-.269.227-.246.468-.765.282-.935a24.514 24.514 0 01-2.96-.623.34.34 0 00-.265.239zm21.621-3.839l8.19 11.275c.032.045.083.07.14.086a39.434 39.434 0 003.259-2.659l-8.443-9.308c-.207-.222-.327.033-1.469.955-.216.17-.473.51-1.129-.143.139.082.477.332.772.105 1.44-1.15 1.624-1.233 1.534-1.811-.049-.316-.289-.802-.532-.8a25.024 25.024 0 01-2.355 1.966.336.336 0 00.033.334zm-11.449 4.569l1.818 13.816a.252.252 0 00.106.167 38.991 38.991 0 004.13-.783L45.79 64.892c-.087-.319-.483-.071-1.171.041l-.836.149c-.367.07-.576-.425-.665-.714.38.629.324.572 2.331.123.518-.124.673-.846.548-1.317a.23.23 0 00-.145-.161c-.97.259-1.964.46-2.977.6a.337.337 0 00-.14.316zm6.01-1.568l5.17 12.941c.023.058.075.098.138.127a39.248 39.248 0 003.806-1.779L51.94 62.543c-.074-.137-.212-.135-.364-.057-.85.436-.515.274-1.532.734-.341.158-.663-.268-.821-.527.5.495.425.494 2.289-.456.581-.285.397-1.465.031-1.532-.883.494-1.8.935-2.745 1.32a.338.338 0 00-.053.336zm3.093-1.558c.156.359.32.834.288 1.142-.054.536-.464-.407 6.04 11.542a47.7 47.7 0 00.626-.35c.014-.064.014-.126-.016-.178l-6.938-12.156zm-37.779-15.11c-.502-.178.584-.376-12.678 3.008.059.234.122.467.185.699.06.031.122.041.181.024l13.49-3.728c-.386.062-.889.103-1.178-.003zm42.745 11.394c.238.31.512.732.556 1.035.077.544-.544-.283 8.667 9.704.179-.166.358-.333.534-.503a.242.242 0 00-.058-.145l-9.699-10.091zM3.367 23.876l12.906 5.417c-.344-.192-.761-.469-.917-.729-.278-.451.683.072-11.787-5.461-.102.228-.203.456-.3.686a.241.241 0 00.098.087zm13.108 27.826c-.184-.019-.395-.021-.592.08L4.919 57.75c.113.208.229.413.346.618.071.019.14.016.197-.017l12.155-6.938c-.359.157-.835.321-1.142.289zm16.247-36.888c-.061-.387-.102-.889.003-1.179.177-.501.374.578-2.985-12.587a37.85 37.85 0 00-.753.2.236.236 0 00.006.075l3.729 13.491zM75.475 54.12l-12.906-5.417c.344.192.761.469.917.729.278.45-.683-.072 11.782 5.459.102-.23.202-.461.3-.693a.226.226 0 00-.093-.078zm-46.488 8.943c-.455.281.062-.66-5.487 11.845.214.095.428.19.644.281a.26.26 0 00.156-.138l5.417-12.906c-.193.345-.47.762-.73.918zm17.133.119c.061.387.102.889-.003 1.179-.177.5-.374-.575 3.01 12.686.232-.059.463-.122.693-.186a.25.25 0 00.028-.189l-3.728-13.49zm3.736-48.249c.449-.277-.075.689 5.433-11.723a42 42 0 00-.718-.312.195.195 0 00-.028.046L49.126 15.85c.192-.345.469-.761.73-.917zM14.569 35.542c-.38-.095-.858-.257-1.083-.468-.397-.371.646-.116-12.808-2.245-.039.242-.075.486-.109.73a.239.239 0 00.134.075l13.866 1.908zM45.577.337a39.052 39.052 0 00-.775-.114.22.22 0 00-.017.057l-1.909 13.865c.095-.38.257-.857.468-1.083.371-.395.118.641 2.233-12.725zm-25.281 56.6c-.54.076.296-.556-9.732 8.693.159.172.318.345.48.514a.257.257 0 00.196-.064l10.091-9.699c-.309.238-.731.511-1.035.556zm42.071-30.644c.534.054-.402.462 11.46-5.996a40.68 40.68 0 00-.379-.679.234.234 0 00-.067.024L61.226 26.58c.358-.155.834-.319 1.141-.287zM33.246 77.785c.232.037.466.07.699.102a.26.26 0 00.112-.172l1.909-13.865c-.095.38-.257.858-.468 1.083-.374.398-.118-.635-2.252 12.852zm31.538-45.483c.499.177-.57.373 12.595-2.987-.064-.251-.132-.5-.201-.749a.226.226 0 00-.082.005l-13.49 3.728c.386-.061.888-.102 1.178.003zm-.511 10.151c.38.095.857.257 1.083.468.398.373-.629.119 12.77 2.239.039-.251.075-.504.109-.757a.21.21 0 00-.096-.041l-13.866-1.909zm-5.727-21.394c.183-.026.389-.073.554-.22l9.086-8.388a47.949 47.949 0 00-.535-.569.169.169 0 00-.049.035l-10.091 9.699c.309-.239.732-.513 1.035-.557zM8.861 14.382c-.176.215-.35.431-.521.649l12.978 10.71c.093-.119.51-.555.606-.672-2.597-2.122-6.662-5.463-13.063-10.687zm30.112 9.31a2.494 2.494 0 00-2.489 2.489 2.494 2.494 0 002.489 2.489 2.494 2.494 0 002.489-2.489 2.494 2.494 0 00-2.489-2.489zm17.015 1.423c-.655.468-1.191.777-2.136 1.325-.906.525-1.905 1.088-2.992 1.503-2.126.812-3.641 1.146-5.106 1.376a37.915 37.915 0 01-4.372.407l-2.41 3.071-2.41-3.071c-3.048-.121-6.028-.516-8.805-1.51a19.278 19.278 0 01-2.366-1.026 23.855 23.855 0 01-2.711-1.661c-.25.299-.494.605-.728.917 1.698 1.391 2.301 1.918 2.649 2.214 1.576 1.335 3.241 2.477 5.016 3.375a20.73 20.73 0 004.323 1.622l4.294 26.661c.293.012.587.022.883.022.3 0 .597-.01.893-.023L43.906 33.8l.097-.143a20.81 20.81 0 004.763-1.854l.001.001s1.524-.685 3.897-2.592c.09-.072.179-.146.268-.219.12-.098.241-.199.364-.303.067-.057.136-.111.202-.168l.174-.151.001-.001c1.219-1.058 1.981-1.804 2.799-2.598l-.484-.657zM39.485 14.08c.04-3.286.099-7.817.164-14.075C39.502.004 39.355 0 39.208 0c-.128 0-.255.004-.383.005.065 6.264.123 10.798.164 14.084.141-.002.28-.011.421-.011l.075.002zM14.421 69.586c.215.176.432.35.651.522 4.094-5.24 6.975-8.934 9.012-11.544-.134-.105-.271-.209-.403-.317-2.094 2.563-5.058 6.189-9.26 11.339zM63.97 8.811a39.836 39.836 0 00-.649-.519c-3.848 4.925-6.62 8.479-8.622 11.045.163.127.327.252.487.382 2.031-2.537 4.83-6.062 8.784-10.908zM38.994 63.84c-.041 3.334-.101 8.006-.17 14.571.128.001.255.005.384.005.148 0 .295-.004.443-.006-.068-6.559-.129-11.228-.169-14.561l-.071.002c-.141-.001-.278-.009-.417-.011zm39.417-24.28c.001-.118.004-.234.004-.352 0-.158-.001-.262-.003-.419-7.756.081-10.978.15-14.117.189 0 .136-.008.27-.01.405 3.101.036 6.309.095 14.126.177zm-8.775 24.371c.175-.215.349-.432.519-.651-5.077-3.966-8.697-6.79-11.287-8.811-.108.135-.214.272-.324.405 2.543 2.077 6.099 4.983 11.092 9.057zm-55.11-25.039c-3.299-.037-7.947-.089-14.52-.157-.002.157-.006.315-.006.473 0 .118.003.235.004.353 6.542-.068 11.202-.128 14.53-.169-.002-.143-.011-.284-.011-.428l.003-.072z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            viewBox="0 0 330 17.6"
            className="ease-out transition-slow"
            css={{ width: 210, [media.tablet]: { width: 260 } }}
          >
            <linearGradient
              id="b"
              x1="0"
              x2="300"
              y1="3"
              y2="3"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".2" stopColor="#d6b65f" />
              <stop offset=".49" stopColor="#fffea6" />
              <stop offset=".94" stopColor="#91742d" />
            </linearGradient>
            <path
              fill="url(#b)"
              d="M28.52,15.12H2.52V1.12c.1-.5-.3-.9-.8-1h-.7C.53.11.11.44.02.92v15.5c-.1.5.3.9.8,1h27.7c.5.1.9-.3,1-.8v-.5c.1-.5-.3-.9-.8-1h-.2ZM36.82.12h.5c.5,0,1,.4,1,1v15.3c0,.5-.4,1-1,1h-.5c-.55,0-1-.45-1-1V1.12c0-.5.5-1,1-1ZM70.72.12h-27.1c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h.7c.5.1.9-.3,1-.8v-6.4h24.1c.5.1.9-.3,1-.8v-.5c.1-.5-.3-.9-.8-1h-24.3V2.42h25.6c.5,0,1-.3,1-.8v-.5c0-.5-.3-1-.8-1h-.2ZM104.42.12h-27.1c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h27.3c.5.1.9-.3,1-.8v-.5c0-.5-.3-1-.8-1h-25.8v-5h24.2c.5,0,1-.3,1-.8v-.6c0-.5-.3-1-.8-1h-24.4V2.42h25.6c.5.1.9-.3,1-.8v-.5c.1-.5-.3-.9-.8-1h-.2ZM298.02,2.42c.5,0,1-.3,1-.8v-.5c0-.5-.3-1-.8-1h-27.3c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h27.3c.5,0,1-.3,1-.8v-.5c0-.5-.3-1-.9-1h-25.7v-5h24.1c.5,0,1-.3,1-.8v-.6c.1-.5-.3-.9-.8-1h-24.3V2.42h25.6ZM202.42.12h-27.5c-.5-.1-.9.3-1,.8v.5c-.1.5.3.9.8,1h12.3v14c-.1.5.3.9.8,1h.7c.5.1.9-.3,1-.8V2.42h13c.5.1.9-.3,1-.8v-.5c.1-.5-.3-.9-.8-1h-.3ZM231.22.12h-.5c-.5-.1-.9.3-1,.8v7.8c0,4.2-3.4,6.6-9.4,6.6h-.8c-6.1,0-9.4-2.3-9.4-6.6V1.12c.1-.5-.3-.9-.8-1h-.7c-.5-.1-.9.3-1,.8v7.8c0,5.8,4.1,8.9,11.8,8.9h.8c7.8,0,11.9-3.1,11.9-8.9V1.12c.1-.5-.3-.9-.9-1q.1,0,0,0h0ZM264.62.12h-.5c-.5-.1-.9.3-1,.8v13.3l-17.8-10.3-6.5-3.8h-1.3c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h.7c.5.1.9-.3,1-.8V3.32l11.6,6.7,12.5,7.2,1,.2h.5c.5.1.9-.3,1-.8V1.12c.1-.5-.3-.9-.8-1h-.2ZM157.12.12h-.5c-.5-.1-.9.3-1,.8v13.3l-17.8-10.3-6.5-3.8-.3-.1h-1c-.5-.1-.9.3-1,.8v15.5c-.1.5.3.9.8,1h.7c.5.1.9-.3,1-.8V3.32l11.6,6.7,12.5,7.2,1,.2h.5c.5.1.9-.3,1-.8V1.12c.1-.5-.3-.9-.8-1h-.2ZM123.22.12h.5c.5,0,1,.4,1,1v15.3c0,.5-.4,1-1,1h-.5c-.55,0-1-.45-1-1V1.12c0-.5.5-1,1-1ZM309.78.12c-3.53,0-6.39,2.86-6.39,6.39s2.86,6.39,6.39,6.39,6.39-2.86,6.39-6.39-2.86-6.39-6.39-6.39ZM309.78,11.69c-2.86,0-5.19-2.33-5.19-5.19s2.33-5.19,5.19-5.19,5.19,2.33,5.19,5.19-2.33,5.19-5.19,5.19ZM312.18,5.3c0-1.1-.89-1.99-2-2h-2.2c-.33,0-.6.27-.6.6v5.19c0,.33.27.6.6.6s.6-.27.6-.6v-1.8h1.49l.96,2.05c.14.3.5.43.8.29s.43-.5.29-.8c0,0,0,0,0,0l-.87-1.86c.58-.36.92-1,.93-1.68ZM310.18,6.1h-1.6v-1.6h1.6c.44,0,.8.36.8.8s-.36.8-.8.8Z"
            />
          </svg>
        </Link>
        <HamburgerBtn
          className={`block xl:hidden relative text-gold-300 focus:outline-none ${isMobileNavOpen &&
            'is-open'}`}
          css={{ marginRight: -10 }}
          onClick={() => setMobileNavOpen(isOpen => !isOpen)}
        />
        <div
          className="absolute left-0 flex flex-col w-full h-screen pt-5 pb-20 text-white bg-gray-900 transition-slow"
          css={{
            top: '100%',
            '> *': {
              transition: '.9s cubic-bezier(0.28, 0.67, 0.04, 1)',
              willChange: 'transform, opacity',
              transform: isMobileNavOpen
                ? 'translateX(0%)'
                : 'translateX(-10%)',
              opacity: isMobileNavOpen ? 1 : 0,
            },
            ...Array.from({ length: 10 })
              .map((_, i) => ({
                transitionDelay: isMobileNavOpen && `${0.25 + i * 0.07}s`,
              }))
              .reduce((acc, el, i) => {
                acc[`> *:nth-of-type(${i + 1})`] = el
                return acc
              }, {}),

            '> ul > li': {
              willChange: 'transform, opacity',
              transition: '.9s cubic-bezier(0.28, 0.67, 0.04, 1)',
              transform: isMobileNavOpen
                ? 'translateY(0%)'
                : 'translateY(35px)',
              opacity: isMobileNavOpen ? 1 : 0,

              '&:nth-of-type(1)': {
                transitionDelay: isMobileNavOpen && `${0.25 + 7 * 0.07}s`,
              },
              '&:nth-of-type(2)': {
                transitionDelay: isMobileNavOpen && `${0.25 + 8 * 0.07}s`,
              },
              '&:nth-of-type(3)': {
                transitionDelay: isMobileNavOpen && `${0.25 + 9 * 0.07}s`,
              },
              '&:nth-of-type(4)': {
                transitionDelay: isMobileNavOpen && `${0.25 + 10 * 0.07}s`,
              },
              '&:nth-of-type(5)': {
                transitionDelay: isMobileNavOpen && `${0.25 + 11 * 0.07}s`,
              },
            },
          }}
          style={{
            opacity: isMobileNavOpen ? 1 : 0,
            visibility: isMobileNavOpen ? 'visible' : 'hidden',
          }}
          onClick={() => setMobileNavOpen(false)}
        >
          <Link
            to="/programs"
            className="px-5 py-3 text-2xl uppercase font-display"
            activeClassName="text-gold-300"
          >
            Programs
          </Link>
          <Link
            to="/about"
            className="px-5 py-3 text-2xl uppercase font-display"
            activeClassName="text-gold-300"
          >
            About
          </Link>
          <Link
            to="/mission"
            className="px-5 py-3 text-2xl uppercase font-display"
            activeClassName="text-gold-300"
          >
            Mission
          </Link>
          <Link
            to="/buzz"
            className="px-5 py-3 text-2xl uppercase font-display"
            activeClassName="text-gold-300"
          >
            Buzz
          </Link>
          <Link
            to="/planners"
            className="px-5 py-3 text-2xl uppercase font-display"
            activeClassName="text-gold-300"
          >
            Planners
          </Link>
          <Link
            to="/contact"
            className="px-5 py-3 text-2xl uppercase font-display"
            activeClassName="text-gold-300"
          >
            BOOK NOW/CONTACT
          </Link>
          <Link
            href="tel:+18572673669"
            className="flex items-center mt-16 ml-5 text-xl transition hover:text-gold-300"
          >
            <svg
              viewBox="0 0 30.927 36.025"
              className="flex-shrink-0 w-4 h-4 mr-2 opacity-75 stroke-current"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M17.85 24.889c1-.09 2.95-1.92 4-2a4.003 4.003 0 012.78.8l2.68 2 1.61 1.28a2.52 2.52 0 01.43 3.62l-3.11 4a1.12 1.12 0 01-1 .43C11.74 33.809 1 22.759 1 9.339c0-2.369.337-4.726 1-7a.66.66 0 01.5-.45l5.91-.83a2.63 2.63 0 013.12 2l.39 1.99.65 3.26c.193.96.003 1.958-.53 2.78-.54.84-3.09 1.68-3.64 2.53h0a19.39 19.39 0 009.45 11.43v-.16z"
              ></path>
            </svg>
            +1-857-267-3669
          </Link>
          <ul className="flex items-center mt-5 ml-5 text-gold-300">
            <li>
              <Link out href="http://www.linkedin.com/in/freddieravel">
                <svg className="w-6 h-6 mr-6 fill-current" viewBox="0 0 24 24">
                  <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link out href="http://twitter.com/freddieravel">
                <svg className="w-6 h-6 mr-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link out href="https://www.instagram.com/freddieravel/">
                <svg className="w-6 h-6 mr-6 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                out
                href="http://www.facebook.com/pages/Freddie-Ravel/63497511550"
              >
                <svg className="w-6 h-6 mr-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link out href="https://www.youtube.com/user/maximjasmine">
                <svg className="w-6 h-6 mr-6 fill-current" viewBox="0 0 24 24">
                  <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </AutoFade>
  )
}

const Footer = props => {
  const data = useStaticQuery(graphql`
    {
      goldLogo: file(relativePath: { eq: "gold-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <footer
      className="relative py-20 pt-10 text-white lg:pt-20"
      css={{ backgroundColor: '#0a0a0a' }}
      {...props}
    >
      <Container
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gridGap: 32,

          [media.laptop]: {
            gridTemplateColumns: '1fr 2fr .5fr .5fr',
          },
        }}
      >
        <div className="flex-col items-center hidden lg:flex">
          <Img
            fluid={data.goldLogo.childImageSharp.fluid}
            css={{ width: 150 }}
          />
          <p className="mt-5 text-xs text-center text-gray-600">
            ©{new Date().getFullYear()} All Right Reserved.
            <br />
            Life In Tune<sup>®</sup> with Freddie Ravel.
          </p>
        </div>
        <div
          css={{ gridColumn: 'span 2', [media.laptop]: { gridColumn: 'auto' } }}
        >
          <div className="flex items-center">
            <p
              className="flex-1 text-xs md:text-sm lg:text-base"
              css={{ [media.laptopLg]: { maxWidth: '30em' } }}
            >
              Freddie Ravel is the internationally acclaimed “Keynote Maestro”
              who blends his expertise for business breakthroughs and the power
              of music to unlock the minds, hearts and potential of audiences
              around the world.
            </p>
            <Img
              fluid={data.goldLogo.childImageSharp.fluid}
              className="ml-5 lg:hidden"
              css={{ width: 85 }}
            />
          </div>
          {/* <Link
            out
            href="https://www.google.pl/maps/place/22287+Mulholland+Hwy+%23516,+Calabasas,+CA+91302,+Stany+Zjednoczone/@34.1485337,-118.6140125,13.84z/data=!4m5!3m4!1s0x80c29ee517aca377:0x493574b19ff5cd59!8m2!3d34.1468839!4d-118.6130005"
            className="flex items-start mt-6 transition hover:text-gold-300"
          >
            <svg
              viewBox="0 0 34 26.18"
              className="flex-shrink-0 w-4 h-4 mt-1 mr-3 opacity-75 stroke-current"
            >
              <g fill="none" strokeWidth="3">
                <path
                  strokeMiterlimit="10"
                  d="M2.48 1h29.04c.817 0 1.48.663 1.48 1.48V23.7a1.48 1.48 0 01-1.48 1.48H2.48A1.48 1.48 0 011 23.7V2.48C1 1.663 1.663 1 2.48 1z"
                ></path>
                <path
                  strokeLinejoin="round"
                  d="M32.44 1.83L21.53 13.54a6.27 6.27 0 01-9.07 0L1.56 1.84"
                ></path>
                <path
                  strokeLinejoin="round"
                  d="M23.19 11.75L32.15 24.51"
                ></path>
                <path strokeLinejoin="round" d="M10.98 11.88L1.7 24.51"></path>
              </g>
            </svg>
            22287 Mulholland Hwy Suite 516
            <br />
            Calabasas, CA 91302 USA
          </Link> */}
          <Link
            href="tel:+18572673669"
            className="flex items-start mt-3 transition hover:text-gold-300"
          >
            <svg
              viewBox="0 0 30.927 36.025"
              className="flex-shrink-0 w-4 h-4 mt-1 mr-3 opacity-75 stroke-current"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M17.85 24.889c1-.09 2.95-1.92 4-2a4.003 4.003 0 012.78.8l2.68 2 1.61 1.28a2.52 2.52 0 01.43 3.62l-3.11 4a1.12 1.12 0 01-1 .43C11.74 33.809 1 22.759 1 9.339c0-2.369.337-4.726 1-7a.66.66 0 01.5-.45l5.91-.83a2.63 2.63 0 013.12 2l.39 1.99.65 3.26c.193.96.003 1.958-.53 2.78-.54.84-3.09 1.68-3.64 2.53h0a19.39 19.39 0 009.45 11.43v-.16z"
              ></path>
            </svg>
            +1-857-267-3669
          </Link>
          <Link
            href="mailto:manager@freddieravel.com"
            className="flex items-start mt-3 transition hover:text-gold-300"
          >
            <svg
              viewBox="0 0 96.3 100.2"
              className="flex-shrink-0 w-4 h-4 mt-1 mr-3 opacity-75 fill-current"
            >
              <path d="M93.1 24.5A40.2 40.2 0 0070 3.1 54.5 54.5 0 0025 7 46.5 46.5 0 006.8 26 55 55 0 000 53.3C0 60.7 1.2 67.2 3.6 73 6 78.8 9.5 83.8 14 87.8s10.1 7.1 16.6 9.2a75 75 0 0035.2 2.1c3.9-.7 7.8-1.9 11.6-3.5l-3.1-7.4a60.8 60.8 0 01-21.6 3.9c-6.9 0-13.1-.9-18.6-2.6a38 38 0 01-13.9-7.6 32.5 32.5 0 01-8.7-12.2 49.2 49.2 0 01.2-34.2 42.7 42.7 0 0122.5-23.9 43.3 43.3 0 0143.4 5.7 31 31 0 0110.2 23.1c0 4.5-.5 8.5-1.6 12.1a29 29 0 01-4.3 9 20 20 0 01-6.3 5.7 16 16 0 01-7.7 2c-1.2 0-2-.3-2.5-1-.5-.6-.8-1.6-.8-2.7 0-.9.1-2 .4-3.4l.9-4.8 7.8-34.9H64l-1.1 5.2a19 19 0 00-6.6-4.7 21 21 0 00-8.6-1.6A22 22 0 0037.1 24a28 28 0 00-8.8 7.4 36.8 36.8 0 00-6 11.1 41.8 41.8 0 00-2.2 13.9c0 3.4.5 6.4 1.4 9a17.1 17.1 0 009.9 10.9 20.6 20.6 0 0016.8-.8c2.9-1.5 5.5-3.6 7.8-6.3a8.5 8.5 0 003.3 6.1c.9.8 2 1.4 3.3 1.8 1.2.4 2.6.7 4.1.7A27.9 27.9 0 0088.1 68a34 34 0 006.2-11.8c1.5-4.6 2.2-9.9 2.2-15.8-.2-5.7-1.2-11-3.4-15.9zM56.8 53.3c-.6 2.5-1.4 4.7-2.4 6.6a19.1 19.1 0 01-8.3 8.2c-1.7.7-3.4 1.1-5.3 1.1-6.9 0-10.4-4.4-10.4-13.1 0-3.6.5-7 1.4-10.2.9-3.2 2.2-6 3.8-8.3a20 20 0 015.5-5.7c2.1-1.4 4.2-2.1 6.5-2.1a16.7 16.7 0 0113.1 5.8l-3.9 17.7z" />
            </svg>
            manager@freddieravel.com
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/" className="transition hover:text-gold-300">
              Home
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/programs" className="transition hover:text-gold-300">
              Keynotes
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/about" className="transition hover:text-gold-300">
              About
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/mission" className="transition hover:text-gold-300">
              Mission
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/buzz" className="transition hover:text-gold-300">
              Buzz
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/planners" className="transition hover:text-gold-300">
              Planners
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/contact" className="transition hover:text-gold-300">
              Book Now
              <wbr />
              /Contact
            </Link>
          </li>
        </ul>
         <Social heading={"Social Media"}/> 
        <Link
          out
          href="https://advictorem.agency"
          className="absolute bottom-0 right-0 block w-6 h-6 mb-5 mr-6 text-gray-700 transition hover:text-white"
          css={{ [media.tablet]: { width: 28, height: 28 } }}
        >
          <svg viewBox="0 0 153.4 128.1" fill="currentColor">
            <title>Design by Ad Victorem</title>
            <polygon points="24.8,9.5 0,9.5 59,128.1 71.9,102.3"></polygon>
            <path d="M112.7,46.8c2.7-0.6,5.3-1.3,7.6-2.1c7.1-2.3,12.7-5.1,17.1-8.1C157.4,22.9,153,0.8,153,0.8s-14.2,28.8-51.4,3.9C76.5-8.3,59.3,9.6,59.3,9.6l28,55c1.4-2.5,3.2-4.6,5-6.7C99.1,49.9,110.2,47.4,112.7,46.8z"></path>
          </svg>
        </Link>
      </Container>
    </footer>
  )
}

const Layout = ({ children }) => (
  <div css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Head />
    <Navbar />
    <main css={{ flexGrow: 1 }}>{children}</main>
    <Footer />
    <NewsletterModal />
  </div>
)

export default Layout
