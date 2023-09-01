import React, { useEffect, useState } from "react";
import { useApiContext } from "../../hooks/Context/ApiContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import 'bootstrap/dist/css/bootstrap.min.css'
import './card.css'
import PaginationCards from "../btnpagination/btnpagination";
import ButtonActions from "../btnsActions/btnsActions";
import BtnAdd from "../btnAdd/btnadd";
import { show_alert } from "../../hooks/functions/sweetAlert";

const CardPubli = ()=>{
    const{getAllPosts,deletePost} = useApiContext()
    const[posts,setPosts] = useState([])
    const[postsPerPage,setPostsPerPage] = useState(6)
    const[currentPage,setCurrentPage] = useState(1)
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[id,setId] = useState('')

    const LastIndex = currentPage * postsPerPage
    const firstIndex = LastIndex - postsPerPage
    
    const totalPosts = posts.length

    useEffect(()=>{
        AllPosts()
    },[])

    const AllPosts = async()=>{
        const res = await getAllPosts()
        setPosts(res)
    }

    const DeleteOnePost = async(id)=>{
        const res = await deletePost(id)
    }
    return(
        <>
        <PaginationCards
            postsPerPage = {postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPosts= {totalPosts}
        />
        
            <BtnAdd
            setTitle={setTitle}
            title={title}
            setBody={setBody}
            body={body}
            />
        <div className="container-card">
            {posts.map((post)=>(
                <div className="card" style={{width:'25rem'}} key={post.id}>
                    <ButtonActions
                        deletePost={()=>DeleteOnePost(post.id)}
                        />
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-text">{post.body}</p>
                        <div className="comments">
                            hfhfkfhsdkjhj
                        </div>
                    </div>
              </div>
              
               
            )
            ).slice(firstIndex,LastIndex)}
        </div>

        
        
        </>
        
              
        
    )
}

export default CardPubli