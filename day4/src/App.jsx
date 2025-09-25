import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />} />
        </Route>


        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
