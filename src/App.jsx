import React, { useEffect, useState, useContext } from 'react'
import Button from './components/Button'
import { GlobalContext } from './context/GlobalContext'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Details from './Pages/Details'

function App() {
  // const [count, setCount] = useState(0)
  const { count, setCount } = useContext(GlobalContext)


  useEffect(() => {
    console.log("From UseEffect")
  }, [count])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/details/:anything/:name' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
