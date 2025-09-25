import React from "react";
import { useState } from "react";

function Register() {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: 0,
        password: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value

        })
    }
    return (
        <div>
            <h1>Regsiter Page</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log("FormData ->", formData)
                const data = JSON.stringify(formData)
                localStorage.setItem("user", data)
            }}>

                <label htmlFor="fullname">Full Name</label>
                <input type="text" name="fullname" onChange={handleChange} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />
                <br />
                <label htmlFor="phone">Phone</label>
                <input type="number" name="phone" onChange={handleChange} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} />
                <br />
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
