import Header from './../../Components/Header/Header'
import Footer from './../../Components/Footer/Footer'
import OnMedia from './../../Components/OnMedia/OnMedia'
function Home() {
  return (
    <>
    <Header />
    <main className="app_main">
      <OnMedia />
    </main>
    <Footer />
    </>
  )
}

export default Home