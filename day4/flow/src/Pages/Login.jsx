import React from "react";
import { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function handleOnchange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        const dataFromStorage = localStorage.getItem("user")
        if (!dataFromStorage) {
            console.log("USer Not Registered")
        }
        const user = JSON.parse(dataFromStorage)
        if (user.email === formData.email && user.password === formData.password) {
            console.log("User Authenticated")
        } else {
            console.log("Incorect email or Passoword ")
        }
    }


    return (
        <div>
            <h1>Login PAge</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleOnchange} />
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleOnchange} />
                <br />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
