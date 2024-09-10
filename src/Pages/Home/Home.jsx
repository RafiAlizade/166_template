import React from 'react'
import Header from './../../Components/Header/Header'
import Hero from './../../Components/Hero/Hero'
import TotalExperience from './../../Components/TotalExperience/TotalExperience'
import BrandSlider from './../../Components/BrandSlider/BrandSlider'
import HomeServices from './../../Components/Services/Services'
import OurPark from './../../Components/OurPark/OurPark'
import HomeMedia from './../../Components/HomeMedia/HomeMedia'

function Home() {
  return (
    <>
    <Header />
    <main className="app_main">
      <Hero />
      <TotalExperience />
      <BrandSlider />
      <HomeServices />
      <OurPark />
      <HomeMedia />
    </main>
    </>
  )
}

export default Home