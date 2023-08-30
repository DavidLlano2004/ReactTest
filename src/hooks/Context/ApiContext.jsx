import React, { createContext, useContext, useMemo } from "react";
import ApiUrl from "../api/helpers/config";
import posts from "../api/Posts";

const ApiContext = createContext();

export const ApiProvider = (props)=>{
    const {getAllPosts} = posts(ApiUrl)
    // const{getInfoUser,getPostsUser} = User(ApiUrl)
    // const{getAllComments} = Comments(ApiUrl)
    // const{getAlbums} = Albums(ApiUrl)

    const value = useMemo(()=>{
        return({
            getAllPosts
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