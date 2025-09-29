import React from 'react'

function AdventureCard({ imgUrl, title, description, btnText }) {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={imgUrl} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">{btnText}</a>
            </div>
        </div>
    )
}

export default AdventureCard
