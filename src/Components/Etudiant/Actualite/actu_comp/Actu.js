import React from 'react'
import '../../../../styles/Actualite.css'
import backLink from '../../../Dashboard/imgs/backLink.svg'
function Actu({getpost}) {
  function refreshPage() {
    window.location.reload(false);
  }
  console.log(getpost)
    return (
       
        <div className=" row mx-0 w-100 d-flex flex-column  p-2  actu_row ">
        <div className="row  my-3 mx-2 "><img src={backLink} onClick={refreshPage}></img></div>
        <div className ="row rowActu  mx-2  ">
        <div className =" col-md-4 col-12 rounded-left imageActu" style={{backgroundImage:"url(http://localhost:8000/images/Actualites/"+getpost.image+")",backgroundSize:"100% 100%" }}>
          
          </div>
          <div className =" col-md-8 col-12 bg-white p-4 rounded-right actu_left">
          <h5 className=" py-2"  >{getpost.name}</h5>
          <div className="trait   rounded-pill  mx-1 " > </div> 
         
    <p  className=" my-4 ">{getpost.contenu}</p>
          </div>
        </div></div>
          
    )
}

export default Actu
