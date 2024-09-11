import Header from './../../Components/Header/Header'
import Footer from './../../Components/Footer/Footer'
import ServicesPage from './../../Components/ServicesPage/ServicesPage'
function Home() {
  return (
    <>
    <Header />
    <main className="app_main">
      <ServicesPage />
    </main>
    <Footer />
    </>
  )
}

export default Home