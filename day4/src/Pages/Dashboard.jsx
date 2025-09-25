import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to={"profile"}>Profile Page</Link>
        </div>
    )
}

export default Dashboard
