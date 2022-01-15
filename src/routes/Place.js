import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import PlaceSection from '../components/Place'

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Place that you will Visit' text='are you ready to the Japan' />
      <PlaceSection />
      <Footer />
    </div>
  )
}

export default Training
