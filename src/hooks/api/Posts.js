import React from "react";
import axios from "axios";

const posts = (url) => {
    const apiUrl = `${url}posts`

    const getAllPosts = async()=>{
        try {
            const res = await axios.get(apiUrl)
            return res.data
        } catch{
            return console.error("Error"); ;
        }
    }

    const createPost = async()=>{
        try {
            const res = await axios.post(apiUrl)
            console.log('Creando un post' + res);
            return res
        } catch{
            return console.error("Error"); ;
        }
    }

    const editPost = async(id)=>{
        try {
            const res = await axios.put(`${apiUrl}/${id}`)
            console.log('Editando un post' + res);

            return res
        } catch{
            return console.error("Error"); ;
        }
    }

    const deletePost = async(id)=>{
        try {
            const res = await axios.delete(`${apiUrl}/${id}`)
            return res
        } catch (error) {
            return console.error("Error");
        }
    }

    return{
        getAllPosts,
        deletePost,
        createPost,
        editPost
    }

    
    
}
export default posts