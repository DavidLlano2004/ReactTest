import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './btnAdd.css'


const BtnAdd = ({setTitle,titleHead,body,setBody,totalPost,register,handleSubmit,onSubmit,btnAdd,title})=>{
    return(
        <div className="container-btn-add">
            <button onClick={btnAdd} type="button" className="btn btn-success"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add
                {/* Icono exportado de material-icons en donde puedo darle propiedas de estilo mediante la propiedad sx */}
                <AddCircleIcon sx={{color:'#06d6a0', fontSize:'50px'}}/>
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{titleHead}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Se mandan props para recibir en el otro componente, así podemos separar funciones */}
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <input type="hidden" value={totalPost + 1} {...register('id')}/>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" value={title} {...register('title')} onChange={(e)=>setTitle(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Message</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" value={body} {...register('body')} onChange={(e)=>setBody(e.target.value)} />
                                </div>
                                
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" id="btnClose" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" value="Enviar"  className="btn btn-success" >Save</button>
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