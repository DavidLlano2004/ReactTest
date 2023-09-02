import React from "react";
import axios from "axios";

const Photos = (url) => {
    const apiUrl = `${url}albums`
    // Funcion para la obtencion de todas las fotos que me da la api
    const getPhotosId = async(id)=>{
        try {
            const res = await axios.get(`${apiUrl}/${id}/photos`)
            return res.data
        } catch{
            return console.error("Error"); ;
        }
    }
    
    return{
        // Retorno las funciones en la funcion padre photos
        getPhotosId
        

    }

    
    
}
export default Photos