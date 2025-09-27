import { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [image, setImage] = useState(null)


  // GET REQUEST
  async function getData() {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search", {
        method: "GET"
      })
      const data = await response.json()
      setImage(data[0].url)
      console.log("API DATA: ", data[0])
    } catch (error) {
      console.log("Error in Get API: ", error)
    }
  }

  async function getDataWithAxios() {
    try {
      const respone = await axios.get("https://api.thecatapi.com/v1/images/search")
      setImage(respone.data[0].url)

    } catch (error) {
      console.log("Error in Get API: ", error)
    }
  }

  setInterval(() => {
    getDataWithAxios()
  }, 5000)
  
  let obj = {
    title: "Something SOmething",
    body: "Anything"
  }
  async function postSomethingWIthAxios() {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", obj)
    console.log(response.data);
  }

  async function putSomethingWIthAxios() {
    const response = await axios.put("https://jsonplaceholder.typicode.com/posts", obj)
    console.log(response.data);
  }
  async function patchSomethingWIthAxios() {
    const response = await axios.patch("https://jsonplaceholder.typicode.com/posts", obj)
    console.log(response.data);
  }
  async function deleteSomethingWIthAxios() {
    const response = await axios.delete("https://jsonplaceholder.typicode.com/posts")
    console.log(response.data);
  }
  return (
    <>
      <h1>Hello From REST API</h1>
      <img src={image} alt="" />
      <button onClick={patchSomethingWIthAxios}>Call</button>
    </>
  )
}

export default App
