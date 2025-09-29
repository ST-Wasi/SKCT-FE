import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdventureFeed from './pages/AdventureFeed'
import CreatePostForm from './pages/CreatePostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdventureFeed />} />
        <Route path='/add-post' element={<CreatePostForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
