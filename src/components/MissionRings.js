import React, { useMemo, useEffect, useRef, useState } from 'react'
import { TimelineMax, Power1, Power2, Power3 } from '../lib/gsap'

import useInView from '../hooks/useInView'
import { media } from '../styles/tools'

import ButtonLink from './ButtonLink'

const MissionRings = ({ className, ...props }) => {
  const [canReplay, setCanReplay] = useState(false)
  const [inViewRef, inView] = useInView({ rootMargin: '-30% 0px' })
  const tl = useMemo(
    () =>
      new TimelineMax({
        delay: 0.5,
        onStart() {
          setCanReplay(false)
        },
        onComplete() {
          setCanReplay(true)
        },
      }),
    []
  )

  useEffect(() => () => tl.current && tl.current.kill(), []) // eslint-disable-line
  useEffect(() => void tl.paused(!inView), [inView]) // eslint-disable-line

  useEffect(() => {
    tl.staggerFrom(
      [circle1.current, circle2.current, circle3.current],
      2,
      {
        scale: 0.8,
        opacity: 0,
        ease: Power1.easeOut,
      },
      0.5
    )

    tl.staggerFrom(
      [
        circle1.current.querySelector('circle'),
        circle2.current.querySelector('circle'),
        circle3.current.querySelector('circle'),
      ],
      2,
      {
        transformOrigin: 'center',
        rotation: -90,
        drawSVG: '0% 0%',
        ease: Power3.easeInOut,
      },
      0.5,
      0
    )

    tl.to(
      [
        circle1.current.querySelector('div'),
        circle2.current.querySelector('div'),
        circle3.current.querySelector('div'),
      ],
      1,
      {
        delay: 2,
        scale: 0.8,
        opacity: 0,
        ease: Power1.easeInOut,
      }
    )

    tl.to(
      circle1.current,
      1,
      {
        x: '42%',
        y: '20%',
        scale: 0.7,
        opacity: 0,
        ease: Power3.easeIn,
      },
      '-=1'
    )

    tl.to(
      circle2.current,
      1,
      {
        x: '-42%',
        y: '20%',
        scale: 0.7,
        opacity: 0,
        ease: Power3.easeIn,
      },
      '-=1'
    )

    tl.to(
      circle3.current,
      1,
      {
        y: '-22%',
        scale: 0.7,
        opacity: 0,
        ease: Power3.easeIn,
      },
      '-=1'
    )

    tl.from(
      man.current,
      1,
      {
        transformOrigin: 'center bottom',
        scale: 0.7,
        opacity: 0,
        ease: Power2.easeInOut,
      },
      '-=0.6'
    )
    tl.to(
      manPath.current,
      1,
      {
        morphSVG:
          'M56 25.1s-5.1 4.4-14.6 4.6L39 32.8l-2.4-3.1c-7.5-.2-12.3-3-14-4.1l-.6.7c3.3 3.3 6.9 6 11.9 7.3.4.1 4.2 26.7 4.3 26.7H40c.1 0 3.6-26.6 4-26.7 5.3-1.4 9-4.4 12.5-7.9l-.5-.6z',
        ease: Power2.easeInOut,
      },
      '-=1'
    )
    tl.staggerFrom(
      keys.current.querySelectorAll('path'),
      1,
      {
        transformOrigin: 'center',
        scale: 0.7,
        opacity: 0,
        ease: Power2.easeInOut,
      },
      -0.02,
      '-=0.5'
    )
    tl.staggerTo(
      keys.current.querySelectorAll('path'),
      1,
      {
        transformOrigin: 'center',
        scale: 0.8,
        opacity: 0.2,
        ease: Power2.easeIn,
      },
      -0.02
    )
    tl.staggerTo(
      keys.current.querySelectorAll('path'),
      1,
      {
        transformOrigin: 'center',
        scale: 1,
        opacity: 1,
        ease: Power2.easeOut,
      },
      -0.02
    )
  }, []) // eslint-disable-line

  const circle1 = useRef()
  const circle2 = useRef()
  const circle3 = useRef()
  const man = useRef()
  const manPath = useRef()
  const keys = useRef()

  return (
    <div
      ref={inViewRef}
      className={`flex flex-col items-center ${className}`}
      {...props}
    >
      <svg viewBox="0 0 103 103" className="w-0 h-0">
        <linearGradient
          id="svg-gold-gradient"
          x1="0"
          x2="103"
          y1="51.5"
          y2="51.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d6b65f" />
          <stop offset=".5" stopColor="#fffea6" />
          <stop offset="1" stopColor="#d1a741" />
        </linearGradient>
      </svg>
      <div
        css={{
          display: 'grid',
          justifyItems: 'center',
          gridTemplate: '1fr 1fr / 1fr 1fr',
          fontSize: 12,
          [media.tablet]: { fontSize: 24 },
        }}
      >
        <svg
          viewBox="0 0 78.4 78.4"
          css={{
            width: '10em',
            height: '10em',
            gridArea: '1 / 1 / 3 / 3',
            marginTop: '15%',
          }}
          fill="url(#svg-gold-gradient-2)"
        >
          <linearGradient
            id="svg-gold-gradient-2"
            x1="0"
            x2="78.4"
            y1="37"
            y2="37"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#d6b65f" />
            <stop offset=".5" stopColor="#fffea6" />
            <stop offset="1" stopColor="#d1a741" />
          </linearGradient>
          <g ref={man}>
            <path
              ref={manPath}
              d="M41.4 29.7L39 32.8l-2.4-3.1c-6.6-.3-10.2 8-10.2 8l2.1-.4c2-1.5 3.4-6.1 5.5-3.7l4.3 26.7h1.8c.1 0 3.7-26.4 4-26.7 2.1-2.4 3.5 2.2 5.5 3.7l2.1.4c-.1 0-3.8-8.3-10.3-8z"
            />
            <path d="M39 23.7a2.5 2.5 0 00-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5-1.2-2.5-2.5-2.5" />
          </g>
          <g ref={keys}>
            <path d="M17.9 26.5l-1.3 2.7h-.3c-.5-.2-.9-.8-.7-1.2l.4-.8c.5-.9.4-1.1 1.2-1-.3-.1-.8-.2-1 .1l-.7 1.3c-.1.2-.2.5-.4.4L3.7 22.8c.6-1.3 1.2-2.5 2-3.8h.1l12 7.1c.1.1.2.3.1.4zM3.4 23.9l12.9 5.4-.9-.7c-.3-.5.7.1-11.8-5.5l-.2.8c-.1-.1-.1 0 0 0z" />
            <path d="M15.5 32.4c-.3.9-.5 1.9-.6 2.9-.2.3-1.3-.2-1.2-.9.4-2 .3-2 1-2.1-.3 0-.8 0-.9.3-.4 1.8-.3 2-.6 1.9L.8 32.4c.2-1.4.5-2.8.9-4.1h.1l13.4 3.8.3.3zm-.9 3.1l-1.1-.5c-.4-.4.6-.1-12.8-2.2l-.1.7.1.1 13.9 1.9z" />
            <path d="M14.5 38.9L0 38.7v.9l14.5-.2v-.5z" />
            <path d="M14.8 42.5c.1 1 .3 2 .6 2.9-.1.4-1.3.3-1.5-.4-.4-2-.5-2 .1-2.3-.3.1-.8.3-.7.7l.1.8c.1.7.4 1.1 0 1.2a670 670 0 00-12.2 3l-.7-4.2.2-.1 13.8-1.8.3.2zm-.7 3.2c-.5-.2.6-.4-12.7 3l.2.7h.2l13.5-3.7h-1.2z" />
            <path d="M16.4 48.4l1.3 2.7c0 .4-1.2.6-1.5 0-.9-1.8-1-1.8-.5-2.3-.3.2-.7.5-.5.8l.3.8c.3.7.6 1 .3 1.1L4.7 57.4c-.7-1.2-1.2-2.5-1.8-3.8l.1-.1 12.9-5.2.5.1zm.1 3.3l-.6.1-11 6 .4.6h.2l12.2-6.9a6 6 0 01-1.2.2z" />
            <path d="M19.4 53.7l1.9 2.3c0 .3-.5.5-.8.6-.6.1-.7-.1-1.8-1.5-.2-.3 0-.6.1-.8-.7.7-.3.9-.1 1.1.9 1.1 1.2 1.3 1 1.5l-9.3 8.5c-.9-1-1.8-2.1-2.6-3.3l.1-.2 11.3-8.2h.2zm.9 3.2c-.5.1.3-.6-9.7 8.7l.5.5.2-.1 10.1-9.7c-.4.3-.8.6-1.1.6z" />
            <path d="M14.4 69.6l.7.5 9-11.5-.4-.3-9.3 11.3z" />
            <path d="M26.9 60.5l2.7 1.4c.2.3-.6 1.2-1.2.9l-1.6-.8c-.3-.2-.2-.6-.2-.8-.1.3-.2.8.1 1l1.3.7c.2.1.5.2.4.4l-5.2 11.5-3.7-1.9v-.2l7.1-12c.1-.2.2-.2.3-.2zm2.1 2.6c-.5.3.1-.7-5.5 11.8l.6.3.2-.1 5.4-12.9a7 7 0 01-.7.9z" />
            <path d="M32.8 63l3 .6c.2.2-.1.7-.3.9a1 1 0 01-.7.3l-.9-.2c-1.1-.3-1.1-.2-1.2-.9 0 .3 0 .8.3.9l1.4.3c.3 0 .6.1.5.3l-2.1 12.4c-1.4-.2-2.8-.5-4.1-.9 0-.1-.1-.1 0-.2l3.8-13.4.3-.1zm.4 14.8l.7.1.1-.2 1.9-13.9-.5 1.1c-.3.4 0-.6-2.2 12.9z" />
            <path d="M39 63.8l-.2 14.6h.8l-.2-14.6h-.1-.3z" />
            <path d="M42.9 63.6l3-.6.1.2c.1.5 0 1.2-.5 1.3-2 .4-2 .5-2.3-.1.1.3.3.8.7.7l.8-.1c.7-.1 1.1-.4 1.2 0l3 12.2-4.1.8-.1-.2L42.9 64c-.2-.2-.1-.3 0-.4zm3.2-.4v1.2c-.2.5-.4-.6 3 12.7l.7-.2v-.2l-3.7-13.5z" />
            <path d="M48.8 62c.9-.4 1.9-.8 2.7-1.3.4.1.6 1.2 0 1.5-1.9.9-1.8 1-2.3.5.2.3.5.7.8.5l1.5-.7c.2-.1.3-.1.4.1l5.9 11.1c-1.2.7-2.5 1.3-3.8 1.8l-.1-.1-5.2-12.9.1-.5zm3-1.2l.3 1.1c-.1.5-.5-.4 6 11.5l.6-.3v-.2l-6.9-12.1z" />
            <path d="M54.2 59l2.4-2c.2 0 .5.5.5.8.1.6-.1.7-1.5 1.8-.3.2-.6 0-.8-.1.7.7.9.3 1.1.1 1.1-.9 1.3-1.2 1.5-1l8.4 9.3-3.3 2.7-.1-.1-8.2-11.3c-.1.1-.1-.1 0-.2zm2.6-1.9l.6 1c.1.5-.5-.3 8.7 9.7l.5-.5-.1-.1-9.7-10.1z" />
            <path d="M69.6 63.9l.5-.7-11.3-8.8-.3.4a517 517 0 0011.1 9.1z" />
            <path d="M60.9 51.5l1.4-2.7c.3-.2 1.2.7.9 1.2l-.4.8c-.5.9-.4 1.1-1.2 1 .3.1.8.2 1-.1l.4-.8c.4-.8.4-1.1.7-.9l11.4 5.2c-.6 1.3-1.2 2.5-2 3.8H73l-12-7.1-.1-.4zm14.6 2.6l-12.9-5.4.9.7c.3.5-.7-.1 11.8 5.5l.2-.8c0 .1 0 0 0 0z" />
            <path d="M65.7 43.4l12.4 2.1c-.2 1.4-.5 2.8-.9 4.1h-.1l-13.4-3.8a.2.2 0 01-.2-.2l.6-3c.3-.2 1.3.3 1.2 1-.4 2.1-.3 2-1 2.1.3 0 .8 0 .9-.3l.3-1.4c-.1-.3 0-.6.2-.6zm-1.4-.9l1.1.5c.4.4-.6.1 12.8 2.2l.1-.8h-.1l-13.9-1.9z" />
            <path d="M78.4 39.6v-.4-.4l-14.1.2v.4l14.1.2z" />
            <path d="M64.1 35.6l-.6-3c.2-.3 1.3-.2 1.5.4.4 2 .5 1.9-.1 2.3.3-.1.8-.3.7-.7l-.3-1.7.1-.3 12.1-3 .8 4.2h-.1l-13.8 1.8h-.3zm.7-3.3c.5.2-.6.4 12.6-3l-.2-.7h-.1l-13.5 3.7h1.2z" />
            <path d="M62.5 29.6a24 24 0 00-1.3-2.8l.1-.2c.4-.2 1.2-.3 1.4.2l.4.8c.5 1 .6 1 .1 1.5.3-.2.7-.5.5-.8l-.6-1.3c-.1-.2-.3-.5-.1-.6l11-5.9c.7 1.2 1.3 2.5 1.8 3.9h-.1l-12.9 5.2h-.3zm-.1-3.3c.5.1-.4.5 11.5-6l-.4-.7h-.1l-12.2 6.9a6 6 0 011.2-.2z" />
            <path d="M59.5 24.3l-2-2.4c0-.4 1.1-.8 1.5-.3 1.4 1.6 1.4 1.5 1 2.1.7-.7.3-.9.1-1.1l-.9-1.1a.3.3 0 010-.4l9.2-8.4c1 1 1.8 2.2 2.7 3.3l-11.3 8.2-.3.1zm-1-3.2l.6-.2 9.1-8.4-.5-.6-10.1 9.7c.2-.2.6-.5.9-.5z" />
            <path d="M64 8.8l-.6-.5-8.6 11 .5.4L64 8.8z" />
            <path d="M52 17.5l-2.7-1.4v-.2c.2-.5.8-.9 1.2-.7l1.5.8c.3.2.2.6.2.8.3-.8 0-1-.3-1.1-1.4-.7-1.6-.7-1.5-1l5.2-11.4 3.8 2-7.1 12c-.1.2-.2.2-.3.2zm-2.1-2.6c.4-.3-.1.7 5.4-11.7l-.7-.3-5.4 12.9c.1-.3.4-.7.7-.9z" />
            <path d="M46 15l-3-.6c-.3-.3.3-1.3.9-1.2 2 .4 2 .3 2.1 1 0-.3 0-.8-.3-.9l-1.4-.3c-.3 0-.6-.1-.5-.3L45.9.4l4.2.9v.1l-3.8 13.4-.3.2zM45.6.3l-.8-.1v.1l-1.9 13.9.5-1.1c.3-.4.1.6 2.2-12.8z" />
            <path d="M39.5 14.1L39.7 0h-.8l.2 14.1h.4c-.1 0 0 0 0 0z" />
            <path d="M29 1.3l.7-.3c3.4 13.2 3.2 12.1 3 12.6v1.2L29 1.3zm7.1 12.8L34.3.3V.2c-1.4.2-2.8.4-4.2.8l3 12.1c0 .2.2.2.3.1l1.7-.3c.4-.1.6.4.7.7-.4-.6-.3-.6-2.3-.1-.7.2-.7 1.4-.4 1.5 1-.3 1.9-.5 3-.6v-.3z" />
            <path d="M20.1 5s-.1 0 0 0l.6-.5c6.5 11.9 6.1 10.9 6 11.5 0 .3.1.8.3 1.1A402 402 0 0120.1 5zm10 10.6L24.9 2.7v-.1L21 4.4l5.9 11c.1.2.4.1.6-.1l1.3-.6c.3-.2.7.3.8.5-.5-.5-.5-.4-1.5.1l-.8.4c-.5.2-.5 1-.2 1.4l.2.1 2.7-1.3.1-.3z" />
            <path d="M12.3 10.8c.1-.3.3-.4.5-.6 9.2 10 8.6 9.1 8.6 9.7 0 .3.3.7.6 1l-9.7-10.1zm12.4 7.8L16.5 7.4l-.1-.1-3.3 2.7 8.4 9.3c.1.1.2.1.4 0l1.1-.9c.2-.2.5-.5 1.1.1-.6-.4-.6-.3-2.1 1-.5.4 0 1.6.4 1.5l2.3-1.9v-.5z" />
            <path d="M8.9 14.4l-.5.6 13 10.7.6-.7L8.9 14.4z" />
          </g>
        </svg>
        <div
          ref={circle1}
          className="relative"
          css={{
            width: '12em',
            height: '12em',
            margin: '0 -1em',
            gridArea: '1 / 1 / 2 / 2',
          }}
        >
          <svg viewBox="0 0 103 103" className="block w-full h-full">
            <circle
              cx="51.5"
              cy="51.5"
              r="50"
              fill="none"
              stroke="url(#svg-gold-gradient)"
              strokeWidth={2}
            />
          </svg>
          <div
            className="flex justify-center items-center w-full h-full absolute top-0 left-0 font-bold text-white"
            style={{ transform: 'translate(-0.5em, -0.5em)' }}
          >
            MELODY
          </div>
        </div>
        <div
          ref={circle2}
          className="relative"
          css={{
            width: '12em',
            height: '12em',
            margin: '0 -1em',
            gridArea: '1 / 2 / 2 / 3',
          }}
        >
          <svg viewBox="0 0 103 103" className="block w-full h-full">
            <circle
              cx="51.5"
              cy="51.5"
              r="50"
              fill="none"
              stroke="url(#svg-gold-gradient)"
              strokeWidth={2}
            />
          </svg>
          <div
            className="flex justify-center items-center w-full h-full absolute top-0 left-0 font-bold text-white"
            style={{ transform: 'translate(0.5em, -0.5em)' }}
          >
            HARMONY
          </div>
        </div>
        <div
          ref={circle3}
          className="relative"
          css={{
            width: '12em',
            marginTop: '-10em',
            gridArea: '2 / 1 / 3 / 3',
          }}
        >
          <svg viewBox="0 0 103 103" className="block w-full h-full">
            <circle
              cx="51.5"
              cy="51.5"
              r="50"
              fill="none"
              stroke="url(#svg-gold-gradient)"
              strokeWidth={2}
            />
          </svg>
          <div
            className="flex justify-center items-center w-full h-full absolute top-0 left-0 font-bold text-white"
            style={{ transform: 'translate(0em, 0.7em)' }}
          >
            RHYTHM
          </div>
        </div>
      </div>
      <div
        className="-mt-20 text-white transition-slow ease-out"
        style={{
          opacity: canReplay ? 1 : 0,
          visibility: canReplay ? 'visible' : 'hidden',
        }}
      >
        <ButtonLink
          as="button"
          disabled={!canReplay}
          icon={
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 ml-1 -mr-3 fill-current"
            >
              <path d="M12 5V1L7 6l5 5V7a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6H4a8 8 0 008 8 8 8 0 008-8 8 8 0 00-8-8z" />
            </svg>
          }
          onClick={() => tl.restart()}
        >
          Replay
        </ButtonLink>
      </div>
    </div>
  )
}

export default MissionRings
