import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiUrl from "./hooks/api/helpers/config";
import { useApiContext } from "./hooks/Context/ApiContext";



function App() {
  const{getAllPosts} = useApiContext()
  const[posts,setPosts] = useState()

  useEffect(()=>{
    Allposts()
  },[])

  const Allposts = async()=>{
    const res = await getAllPosts()
    setPosts(res)
    console.log(res[0])
  }
  
  return (
    <div>
      {/* {posts.map((post)=>{
        return(
          <h1>Hola</h1>
        )
      })} */}
    </div>
  );
}

export default App;
