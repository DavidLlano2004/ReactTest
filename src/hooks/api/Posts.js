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

    const deletePost = async(id)=>{
        try {
            const res = await axios.delete(`${apiUrl}/${id}`)
            console.log(res);
            return res
        } catch (error) {
            return console.error("Error");
        }
    }

    return{
        getAllPosts,
        deletePost
    }

    
    
}
export default posts