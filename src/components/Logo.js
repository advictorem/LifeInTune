import React from 'react'
import logo from '../assets/LIT-full-logo(gold).svg';

const Logo = props => (
  <img src={logo} alt="Logo" style={props.style} className={props.className} />
)

export default Logo
