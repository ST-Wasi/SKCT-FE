import React, { useContext } from 'react'
import Header from './Header'
import { GlobalContext } from '../context/GlobalContext'

function Button(props) {
    const { count, setCount } = useContext(GlobalContext)
    return (
        <div>
            <h1>Button: {count}</h1>
            <Header count={count} />
        </div>
    )
}

export default Button
