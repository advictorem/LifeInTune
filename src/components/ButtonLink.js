import React, { forwardRef } from 'react'

import Link from './Link'

const ButtonLink = forwardRef(
  ({ as: As = Link, className, icon, children, ...props }, ref) => (
    <As
      ref={ref}
      className={`flex justify-center items-center relative py-2 px-10 font-display font-bold text-sm leading-relaxed text-center uppercase rounded-full text-white focus:outline-none ${className}`}
      css={{
        backgroundSize: '100% 200%',
        backgroundPosition: 'center bottom',
        backgroundImage:
          'linear-gradient(-8deg,#91742d 16%,#c5ae47 50%,#91742d 70%)',
        transition: 'background-position .3s',
        // transitionTimingFunction: 'cubic-bezier(0.76, 0.01, 0.19, 0.99)',
        ':hover': {
          backgroundPosition: 'center top',
        },
      }}
      {...props}
    >
      {children}
      {icon}
    </As>
  )
)

export default ButtonLink
