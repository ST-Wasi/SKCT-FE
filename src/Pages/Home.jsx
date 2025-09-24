import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [textInput, setTextInput] = useState("")
    const [todolist, setTodolist] = useState(["Go to market"])

    useEffect(()=>{
        
    })
    return (
        <div>

            {/* // input box */}
            <input type="text" name="todo" id="anything" onChange={(e) => {
                setTextInput(e.target.value)
            }} />

            {/* // Add todo Button */}
            <button onClick={() => {
                console.log(textInput)
                setTodolist([textInput, ...todolist,])
                console.log(typeof todolist)
                const data = JSON.stringify(todolist)

                localStorage.setItem("todo", data)
            }}>Add</button>

            {/* COntainer for Showing Todolist */}
            <div>
                {
                    todolist.map((item) => {
                        return (
                            <p>{item}</p>
                        )
                    })
                }
            </div>
            <button onClick={() => {
                console.log("we have to save something")
                localStorage.setItem("isLogin", "true")
                localStorage.getItem("isLogin")
                localStorage.removeItem("isLogin")
            }}>Save Something</button>
        </div >
    )
}

export default Home
