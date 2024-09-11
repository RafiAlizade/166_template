import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import AboutUs from './Pages/AboutUs/AboutUs'
import Team from './Pages/Team/Team'
import Media from './Pages/Media/Media'

function App() {

  return (
      <Routes>
        <Route path='/' element= {<HomePage />} />
        <Route path='/services' element= {<Services />} />
        <Route path='/aboutus' element= {<AboutUs />} />
        <Route path='/team' element= {<Team />} />
        <Route path='/media' element= {<Media />} />
      </Routes>
  )
}

export default App
