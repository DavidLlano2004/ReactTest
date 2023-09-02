import React, { useEffect, useState } from "react";
import { useApiContext } from "../../hooks/Context/ApiContext";
import './albums.css'
import CardPhotos from "../photos/photosUnique";
const Photos = ()=>{
    const{getAllAlbums,getPhotosId}= useApiContext()
    const[photosAlbum, setphotosAlbum] = useState([])
    const[photos, setphotos] = useState([])
    const[stateId,setStateId] = useState(false)
    const[obtainId,setObtainId] = useState()

    

    useEffect(()=>{
        getAlbums()
    },[])

    const getAlbums = async()=>{
        const res = await getAllAlbums()
        setphotosAlbum(res)
    }
    const getPhotosIdAlbum = async (id)=>{
        const res = await getPhotosId(id)
        setObtainId(id)
        setphotos(res)
        setStateId(true)
        
    }

    return(
        <div className="overflowDiv">
            {/* Condicionar que voy a mostrar */}
            {stateId === true ? <CardPhotos
                    photos={photos}
                    setStateId={setStateId}
                    obtainId={obtainId}
                /> :
                <div className="cardPhotos-Container">
                {photosAlbum.map((albums)=>(
                    <div class="card" key={albums.id}>
                        <div class="card-body">
                            <h1>Album {albums.id}</h1>
                            <p class="card-title">{albums.title}</p>
                                <button  class="btn btn-primary" onClick={()=>getPhotosIdAlbum(albums.id)}>See photos</button>
                        </div>
                    </div>
                    
                ))}
            </div>
             }
            
           
        </div>

    )
}
export default Photos