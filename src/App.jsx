import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home/Home'
import Services from './Pages/Services/Services'

function App() {

  return (
      <Routes>
        <Route path='/' element= {<HomePage />} />
        <Route path='/services' element= {<Services />} />
      </Routes>
  )
}

export default App
