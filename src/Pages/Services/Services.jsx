import Header from './../../Components/Header/Header'
import Footer from './../../Components/Footer/Footer'
import Services from './../../Components/ServicesPage/ServicesPage'
function Home() {
  return (
    <>
    <Header />
    <main className="app_main">
      <Services />
    </main>
    <Footer />
    </>
  )
}

export default Home