import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: ""
  });
  let [showPass, setShowPass] = useState(false)

  function handleChange(event) {
    // event.preventDefault();
    console.log(event.target.name)
    console.log(event.target.value)
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  function handleClick() {
    setShowPass(!showPass)
  }
  return (
    // React Fragment
    <React.Fragment>
      <form className="form" onSubmit={(e) => {
        e.preventDefault()
        console.log(formData)
      }}>
        <input type="text" placeholder="Name" name="name" onChange={handleChange} />
        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
        <input type={showPass ? "text" : "password"} placeholder="Password" name="pass" onChange={handleChange} />
        <button>submit</button>
        <button onClick={handleClick}>show pass</button>
      </form>

    </React.Fragment>
  );
}

export default App;




/* 
CSS Selectors


*/
