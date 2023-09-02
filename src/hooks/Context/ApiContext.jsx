import React, { createContext, useContext, useMemo } from "react";
import ApiUrl from "../api/helpers/config";
import posts from "../api/Posts";
import Albums from "../api/Albums";
import Photos from "../api/Photos";

// Creo una constante que va a ser una funcion de createcontext
const ApiContext = createContext();

export const ApiProvider = (props)=>{
    
    const {getAllPosts,deletePost,createPost,editPost} = posts(ApiUrl)
    const{getAllAlbums} = Albums(ApiUrl)
    const{getPhotosId} = Photos(ApiUrl)
    
    const value = useMemo(()=>{
        return({
            getAllPosts,
            deletePost,
            createPost,
            editPost,
            getAllAlbums,
            getPhotosId
        })
    },[])

    return(
        // Retorno apicontext con la propiedad que da de provider con el valor del usememo que son las funciones y hago la destructuracion de los props
        <ApiContext.Provider value={value}  {...props} />
    );

}
// Esta es la funcion que exporto para utilizar en los componentes
export function useApiContext(){
    // Uso la propiedad de useContext que me permite usar la creacion del contexto de la constante apicontext
    const context = useContext(ApiContext)
    return context
}