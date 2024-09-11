import Header from './../../Components/Header/Header'
import Footer from './../../Components/Footer/Footer'
import AboutPage from './../../Components/AboutUs/AboutUs'
function Home() {
  return (
    <>
    <Header />
    <main className="app_main">
      <AboutPage />
    </main>
    <Footer />
    </>
  )
}

export default Home