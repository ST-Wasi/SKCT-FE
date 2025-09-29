import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicCard from './componnets/BasicCard'
import Box from '@mui/material/Box'
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  async function getData() {
    try {
      setLoading(true)
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(response.data)
      setLoading(false)
    } catch (error) {
      console.log("Error: ", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  if (loading) {
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <CircularProgress color="success" />
    </div>
  }

  return (
    <>
      <div style={{
        display: "flex",
        border: "2px solid black",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        flexWrap: "wrap",
        flexDirection: "column"
      }}>


        {
          posts?.map((item) => {
            return <BasicCard
              title={item.title}
              description={item.body}
              buttonText={"Nothing"}
            />
          })
        }

      </div>
    </>
  )
}

export default App
