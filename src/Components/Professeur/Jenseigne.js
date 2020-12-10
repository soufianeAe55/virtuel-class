import React from 'react'
import { Link } from 'react-router-dom'
import arrowDown from './ImageProf/arrowDown.svg'
import arrowUp from './ImageProf/arrowUp.svg'

function Jenseigne() {
   const DisplayAndHide = (e) => {
      // console.log(e.target.parentNode)
      // Si on clique sur un element au sein de la div le nextSibling ne sera plus la div a afficher
      // Dans ce cas je fais le retour a la div parent pour avoir le nextSibling la div a afficher 
      if(e.target.parentNode.className === "d-flex col-10 col-lg-8 col-md-8 col-xl-8 col-sm-12 Departement")
      { 
         e.target.parentNode.nextElementSibling.hidden  ?
         e.target.parentNode.nextElementSibling.hidden = false :
         e.target.parentNode.nextElementSibling.hidden = true 

         e.target.parentNode.nextElementSibling.hidden   ?
         e.target.parentNode.childNodes[2].src = arrowDown :
         e.target.parentNode.childNodes[2].src = arrowUp
      } else {
         e.target.nextElementSibling.hidden  ?
         e.target.nextElementSibling.hidden = false :
         e.target.nextElementSibling.hidden = true 

         e.target.nextElementSibling.hidden   ?
         e.target.childNodes[2].src = arrowDown :
         e.target.childNodes[2].src = arrowUp
      }
   }
   return(
      <div className="row justify-content-center Jenseigne">
         <div className="col-12 mt-5">
            <h2 className="text-center mb-5">Département / Filiere</h2>
         </div>
         <div onClick={DisplayAndHide} className="d-flex col-10 col-lg-8 col-md-8 col-xl-8 col-sm-12 Departement">
            <div className="blueLine"></div>
            <div className="DepartementName">
               Génie Mécanique
            </div>
            <img src={arrowDown} className="ml-auto"  alt="" />
         </div>	
         <div className="Filiere col-6 col-md-5 col-lg-5" hidden>
            <Link to="/professeur/Jenseigne/Modules">
               <h3 className="text-center py-2 font-weight-bold">GIL</h3>
            </Link>
            <Link to="/professeur/Jenseigne/Modules">
               <h3 className="text-center py-2 font-weight-bold">GEMSI</h3>
            </Link>
         </div>
         <div onClick={DisplayAndHide} className="d-flex col-10 col-lg-8 col-md-8 col-xl-8 col-sm-12 Departement">
            <div className="blueLine"></div>
            <div className="DepartementName">
               Génie Info
            </div>
            <img src={arrowDown} className="ml-auto" alt="" />
         </div>	
         <div className="Filiere col-6 col-md-5 col-lg-5" hidden>
            <Link to="/professeur/Jenseigne/Modules">
               <h3 className="text-center py-2 font-weight-bold">BDCC</h3>
            </Link>
            <Link to="/professeur/Jenseigne/Modules">
               <h3 className="text-center py-2 font-weight-bold">GLSID</h3>
            </Link>
         </div>
      </div>
   )
}

export default Jenseigne
