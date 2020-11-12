import React from 'react'
import '../../../styles/Actualite.css'
const Pagination = ({postsPerPage , totalPosts , paginate}) => {
    const pageNumbers=[];
    for(let i=1 ; i<=Math.ceil(totalPosts / postsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="...">
        <div className ="  d-flex justify-content-around"> 
        <ul className="pagination pagination-sm">
  {pageNumbers.map(number=>(
      <li key={number} className="page-item">
      <a onClick={()=>paginate(number)} className="page-link" href="#" >{number}</a>
    </li>
    
    ))}
    
    
  </ul>
  </div>
 
</nav>
    )
}

export default Pagination
