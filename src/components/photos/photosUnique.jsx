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
            <button type="button" className="btn btn-primary btnReturn" onClick={previoust}><ArrowBackIcon/></button>
            <h1>Photos Album {obtainId}</h1>
        </div>
        <div className="containerCard-photos">
        {photos.map((photo)=>(
            <div className="card">
                <img src={photo.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{photo.title}</p>
                </div>
            </div>
        ))}
        {console.log(photos)}
        </div>
        </>
    )
}
export default CardPhotos