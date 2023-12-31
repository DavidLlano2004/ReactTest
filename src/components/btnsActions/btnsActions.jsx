import React from "react";
import './btnActions.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


const ButtonActions = ({deletePost,editPost,idModal})=>{
    return(
        <>
      <div className="dropdown">
        <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false"><DehazeIcon/></button>
        <ul className="dropdown-menu">
          <li><button onClick={editPost} data-bs-toggle="modal" data-bs-target={idModal} ><EditIcon sx={{color:'#0077b6', fontSize:'30px'}}/>Edit</button></li>
          <li><button onClick={deletePost} ><DeleteIcon sx={{color:'#ef233c', fontSize:'30px'}}/>Delete</button></li>
        </ul>
      </div>
    </>
    )
}
export default ButtonActions