import React from 'react'

import PropTypes from 'prop-types'

import './hero-button1.css'

const HeroButton1 = (props) => {
  return (
    <div className="hero-button1-container">
      <button className="buttonFilled">{props.HeroButton1}</button>
    </div>
  )
}

HeroButton1.defaultProps = {
  HeroButton1: 'Get Started',
}

HeroButton1.propTypes = {
  HeroButton1: PropTypes.string,
}

export default HeroButton1
