import React from "react";
import axios from "axios";

const posts = (url) => {
    const apiUrl = `${url}posts`
    // Funcion para la obtencion de todos los posts
    const getAllPosts = async()=>{
        try {
            const res = await axios.get(apiUrl)
            return res.data
        } catch{
            return console.error("Error"); ;
        }
    }
    // Funcion para crear un post

    const createPost = async()=>{
        try {
            const res = await axios.post(apiUrl)
            console.log('Creando un post' + res);
            return res
        } catch{
            return console.error("Error"); ;
        }
    }
    // Funcion para editar un post

    const editPost = async(id)=>{
        try {
            const res = await axios.put(`${apiUrl}/${id}`)
            console.log('Editando un post' + res);

            return res
        } catch{
            return console.error("Error"); ;
        }
    }
    // Funcion para borrar un post

    const deletePost = async(id)=>{
        try {
            const res = await axios.delete(`${apiUrl}/${id}`)
            return res
        } catch (error) {
            return console.error("Error");
        }
    }

    return{
        // Retorno las funciones en la funcion padre posts
        getAllPosts,
        deletePost,
        createPost,
        editPost

    }

    
    
}
export default posts