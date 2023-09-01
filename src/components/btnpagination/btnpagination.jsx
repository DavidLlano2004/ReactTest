import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './pagination.css'

const PaginationCards = ({postsPerPage,currentPage,totalPosts,setCurrentPage})=>{

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }


    const onNextPage = ()=>{
        setCurrentPage(currentPage+1)
    }


    const onPreviousPage = ()=>{
        setCurrentPage(currentPage-1)
    }

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