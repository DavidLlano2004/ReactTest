import React from "react";
import './photosUnique.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const CardPhotos = ({photos,setStateId,obtainId})=>{
    const previoust = ()=>{
        setStateId(false)
    }
    return(
        <>
        <div className="container-button-idAlbum">
            <button type="button" class="btn btn-primary btnReturn" onClick={previoust}><ArrowBackIcon/></button>
            <h1>Photos Album {obtainId}</h1>
        </div>
        <div className="containerCard-photos">
        {photos.map((photo)=>(
            <div class="card">
                <img src={photo.url} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">{photo.title}</p>
                </div>
            </div>
        ))}
        {console.log(photos)}
        </div>
        </>
    )
}
export default CardPhotos