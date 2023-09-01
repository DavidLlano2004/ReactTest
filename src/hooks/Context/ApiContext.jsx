import React, { createContext, useContext, useMemo } from "react";
import ApiUrl from "../api/helpers/config";
import posts from "../api/Posts";

const ApiContext = createContext();

export const ApiProvider = (props)=>{
    const {getAllPosts,deletePost,createPost,editPost} = posts(ApiUrl)
    
    const value = useMemo(()=>{
        return({
            getAllPosts,
            deletePost,
            createPost,
            editPost
        })
    },[])

    return(
        <ApiContext.Provider value={value}  {...props} />
    );

}

export function useApiContext(){
    const context = useContext(ApiContext)
    return context
}