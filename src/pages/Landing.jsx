import React from 'react'

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Timeline from '../components/Timeline'
import Shop from '../components/Shop'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <>
    <Navbar/>
     <Banner/>
     <Gallery/>
     <Timeline/>
     <Shop/>
     <Footer/>
    </>
  )
}

export default Landing