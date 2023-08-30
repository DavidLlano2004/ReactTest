import React from "react";
import axios from "axios";

const posts = (url) => {
    const apiUrl = `${url}posts`

    const getAllPosts = async()=>{
        try {
            const res = await axios.get(apiUrl)
            console.log(res.data)
            return res.data
        } catch{
            return "Error";
        }
    }

    return{
        getAllPosts
    }

    
    
}
export default posts