import React, { useState } from "react";
import { savePostInLocalStorage, getAllPostFromLocal } from "../services/localStorageService";

function CreatePostForm() {
    let [formData, setFormData] = useState({
        image: "",
        title: "",
        description: "",
        btnText: ""
    })

    let handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <h1>Add Post Form</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.table(formData)
                savePostInLocalStorage("posts", formData)
                const data = getAllPostFromLocal()
                console.log('✌️data --->', data);
            }}>
                <input type="text" name="image" onChange={handleChange} placeholder="Image" />
                <input type="text" name="title" onChange={handleChange} placeholder="Title" />
                <input type="text" name="description" onChange={handleChange} placeholder="Description" />
                <input type="text" name="btnText" onChange={handleChange} placeholder="Button Text" />


                <button>Submit</button>
            </form>
        </div>
    );
}

export default CreatePostForm;
