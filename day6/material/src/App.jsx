import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicCard from './componnets/BasicCard'
import Box from '@mui/material/Box'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])

  async function getData() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(response.data)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
