import React, { useEffect, useState } from "react";
import { useApiContext } from "../../hooks/Context/ApiContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import 'bootstrap/dist/css/bootstrap.min.css'
import './card.css'
import PaginationCards from "../btnpagination/btnpagination";
import ButtonActions from "../btnsActions/btnsActions";
import BtnAdd from "../btnAdd/btnadd";
import { useForm } from "react-hook-form";


import { show_alert } from "../../hooks/functions/sweetAlert";
import axios from "axios";
import ApiUrl from "../../hooks/api/helpers/config";

const CardPubli = ()=>{
    const{getAllPosts,deletePost,createPost,editPost} = useApiContext()
    const[posts,setPosts] = useState([])
    const[postsPerPage,setPostsPerPage] = useState(6)
    const[currentPage,setCurrentPage] = useState(1)
    const[titleHead,setTitleHead] = useState('')
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[id,setId] = useState()
    const[option,setOption] = useState()
    const{register,handleSubmit} = useForm()
    const [editingPost, setEditingPost] = useState(null);



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

    const openModal = (op,id,title,body)=>{
        setId('')
        setBody('')
        setTitle('')
        setTitleHead('')
        setOption(op)
        if(op === 1){
            setTitleHead('Register a post')
        }else if(op === 2){
            setTitleHead('Edit a post')
            setId(id)
            setTitle(title)
            setBody(body)
            setEditingPost({ id, title, body });

        }
    }

    const createOnePost = async ()=>{
        const res = await createPost()
        console.log(res);
    }

    const editOnePost = async(id,data)=>{
        const res = await axios.put(`${ApiUrl}posts/${id}`,data)
        setPosts(posts.map((post) => (post.id === id ? { ...post, ...data } : post)));
        console.log(res);
    }

    const onSubmit = (data)=>{
        posts.push(data)
    }

    const DeleteOnePost = async(id)=>{
        const res = await deletePost(id)
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title:'Are you sure you want to delete de post?',
            icon:'question',
            showCancelButton:true,confirmButtonText:'Yes,delete',cancelButtonText:'Cancel'

        }).then((result)=>{
            if(result.isConfirmed){
                const inPost = posts.find((postDelete)=>postDelete.id === id)
                setPosts(
                    posts.filter((postDelete)=>postDelete.id !== id)
                )
            }else{
                show_alert('The post was not eliminated')
            }
        })
    }

    const valid = ()=>{
        if(option === 1){
            if(title.trim() == ''){
                show_alert('Write a title','warning')
            }else if(body.trim() == ''){
                show_alert('Write a message', 'warning')
            }else{
                const MySwal = withReactContent(Swal)
                MySwal.fire({
                    title:'Are you sure you want to add de post?',
                    icon:'question',
                    showCancelButton:true,confirmButtonText:'Yes,add',cancelButtonText:'Cancel'
        
                }).then((result)=>{
                    if(result.isConfirmed){
                        createOnePost()
                        document.getElementById('btnClose').click()
                        show_alert('Post added','success')
                    }else{
                        show_alert('The post was not add')
                    }
                })
            }
        }else if (option === 2){
            const MySwal = withReactContent(Swal)
                MySwal.fire({
                    title:'Are you sure you want to edit de post?',
                    icon:'question',
                    showCancelButton:true,confirmButtonText:'Yes,edit',cancelButtonText:'Cancel'
        
                }).then((result)=>{
                    if(result.isConfirmed){
                        editOnePost(editingPost.id, { title, body });
                        document.getElementById('btnClose').click()
                         show_alert('Post edited','success')
                    }else{
                        show_alert('The post was not add')
                    }
                })

            


        }
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
            titleHead={titleHead}
            title={title}
            setBody={setBody}
            body={body}
            btnAdd={()=>openModal(1)}
            addPost={()=>valid()}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            />
        <div className="container-card">
            {posts.map((post)=>(
                <div className="card" key={post.id}>
                    <ButtonActions
                        deletePost={()=>DeleteOnePost(post.id)}
                        editPost={()=>openModal(2,post.id,post.title,post.body)}
                        idModal={'#exampleModal'}
                        />
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-text">{post.body}</p>
                    </div>
              </div>
              
               
            )
            ).slice(firstIndex,LastIndex)}
        </div>

        
        
        </>
        
              
        
    )
}

export default CardPubli