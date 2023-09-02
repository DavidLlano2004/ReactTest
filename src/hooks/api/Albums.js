import React from "react";
import axios from "axios";

const Albums = (url) => {
    const apiUrl = `${url}albums`
    // Funcion para la obtencion de todas las albumnes que me da la api
    const getAllAlbums = async()=>{
        try {
            const res = await axios.get(apiUrl)
            console.log(res.data);
            return res.data
        } catch{
            return console.error("Error"); ;
        }
    }
    
    return{
        // Retorno las funciones en la funcion padre albumnes
        getAllAlbums
        

    }

    
    
}
export default Albums