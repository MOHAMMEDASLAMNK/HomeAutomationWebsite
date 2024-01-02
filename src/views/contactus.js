import React from 'react'

import { Helmet } from 'react-helmet'

import './contactus.css'

const Contactus = (props) => {
  return (
    <div className="contactus-container">
      <Helmet>
        <title>contactus - Spotless Hungry Crocodile</title>
        <meta
          property="og:title"
          content="contactus - Spotless Hungry Crocodile"
        />
      </Helmet>
    </div>
  )
}

export default Contactus
