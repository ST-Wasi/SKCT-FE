import { createContext, useState } from "react";

export const GlobalContext = createContext({})


export function GlobalProvider({ children }) {
    const [count, setCount] = useState(0)

    let value = {
        count,
        setCount
    }


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

