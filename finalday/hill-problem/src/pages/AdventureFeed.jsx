import React, { useEffect, useState } from 'react'
import AdventureCard from '../components/AdventureCard'
import { getAllPostFromLocal } from '../services/localStorageService'

function AdventureFeed() {
    const [data, setData] = useState([])
    useEffect(() => {
        const response = getAllPostFromLocal()
        setData(response)
    }, [])
    return (
        <div>
            <h1>Adventure Feed</h1>
            {
                data.map((item) => {
                    return <AdventureCard imgUrl={item.image} title={item.title} description={item.description} btnText={item.btnText} />
                })
            }
        </div>
    )
}

export default AdventureFeed
