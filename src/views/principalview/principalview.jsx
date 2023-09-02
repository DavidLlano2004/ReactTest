import React, { useState } from "react";
import { Link,Outlet } from "react-router-dom";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import HomeIcon from '@mui/icons-material/Home';
import './principalview.css'

const PrincipalView = ()=>{
    const[currentView, setCurrentView] = useState(true)

    const currentViewNow = (op)=>{
        if(op === 1){
            setCurrentView(true)
        }else if(op === 2){
            setCurrentView(false)
        }
    }
    return(
        <>
        <header>
            <nav>
                <img src={require('../../images/iconReact.png')} alt="" />
                <ul>
                    <li>
                        <Link onClick={()=>currentViewNow(1)}  className={`link ${currentView ? 'is-active' : 'in-active'}`} to='/'><HomeIcon sx={{fontSize:'50px'}}/></Link>
                    </li>
                    <li>
                        <Link onClick={()=>currentViewNow(2)} className={`link ${!currentView ? 'is-active' : 'in-active'}`} to='/albums' ><InsertPhotoIcon sx={{fontSize:'50px'}}/></Link>
                    </li>
                </ul>
                {/* Se usa la propiedad de link que me permite cambiar entre componentes con react router */}
            </nav>
        </header>
        <body>
            {/* Aca es donde puedo renderizar todos los hijos de una ruta padre para asi hacer el cambio dinamico de componentes mediante un click a un enlace */}
            <Outlet />
        </body>
            
        </>
    )
}
export default PrincipalView