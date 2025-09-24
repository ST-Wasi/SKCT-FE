import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>
                ABout Page
            </h1>
            <a href="/">Go to Home Page</a>
            <br />
            <Link to={"/"}>
                Go To Home With Link
            </Link>
        </div>
    )
}

export default About
