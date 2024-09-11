import Header from './../../Components/Header/Header'
import Footer from './../../Components/Footer/Footer'
import Hero from './../../Components/Hero/Hero'
import TotalExperience from './../../Components/TotalExperience/TotalExperience'
import BrandSlider from './../../Components/BrandSlider/BrandSlider'
import HomeServices from '../../Components/HomeServices/HomeServices'
import OurPark from './../../Components/OurPark/OurPark'
import HomeMedia from './../../Components/HomeMedia/HomeMedia'
import CustomerComments from './../../Components/CustomerComments/CustomerComments'
import HomeServiceCountries from './../../Components/ServiceCountries/ServiceCountries'
import Advertisement from './../../Components/Advertisement/Advertisement'

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
      <CustomerComments />
      <HomeServiceCountries />
      <Advertisement />
    </main>
    <Footer />
    </>
  )
}

export default Home