import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import 'bootstrap/dist/js/bootstrap.bundle.js'

import './btnAdd.css'


const BtnAdd = ({setTitle,titleHead,body,setBody,addPost,register,handleSubmit,onSubmit,btnAdd,title})=>{
    return(
        <div className="container-btn-add">
            <button onClick={btnAdd} type="button" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add
                <AddCircleIcon sx={{color:'#06d6a0', fontSize:'50px'}}/>
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{titleHead}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={title} {...register('title')} onChange={(e)=>setTitle(e.target.value)}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Message</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" value={body} {...register('body')} onChange={(e)=>setBody(e.target.value)} />
                                </div>
                                
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" id="btnClose" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" value="Enviar" onClick={addPost} class="btn btn-success" >Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BtnAdd