import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './pagination.css'

const PaginationCards = ({postsPerPage,currentPage,totalPosts,setCurrentPage})=>{
    // Inicializo un arreglo vacio para guardar los resultados de las paginas
    const pageNumbers = []
    // Obtengo el total de páginas que hay en mi blog y lo divido por el total de post que quiero que muestre

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }
    // Obtento con esta funcion la escucha del click de next page para sumarle 1 a mi variable
    const onNextPage = ()=>{
        setCurrentPage(currentPage+1)
    }
    // Obtento con esta funcion la escucha del click de on page para restarle 1 a mi variable


    const onPreviousPage = ()=>{
        setCurrentPage(currentPage-1)
    }
// Aca es para especificar el numero de pagina que quiero que aparezca
    const onSpecificPage = (n)=>{
        setCurrentPage(n)
    }
    return(
        <div className="pagination is-centered" role="navigation" aria-label="pagination">
            <button  className="pagination-previous" disabled={currentPage === 1} onClick={onPreviousPage}>Previous</button>
            <button className="pagination-next" disabled={currentPage >= pageNumbers.length} onClick={onNextPage}>Next page</button>
            <ul className="pagination-list">
                {pageNumbers.map(nPages=>(
                    <li key={nPages}><a className={`pagination-link ${nPages === currentPage ? 'is-current' : ''}`} onClick={()=>onSpecificPage(nPages)}>{nPages}</a></li>
                    )
                )}
            </ul>
        </div>
    )
}

export default PaginationCards