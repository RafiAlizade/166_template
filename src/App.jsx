import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home/Home'

function App() {

  return (
      <Routes>
        <Route path='/' element= {<HomePage />} />
      </Routes>
  )
}

export default App
