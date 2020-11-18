import React from 'react'
import arrowDown from './ImageProf/arrowDown.svg'
import arrowUp from './ImageProf/arrowUp.svg'

function Jenseigne() {
   const DisplayAndHide = (e) => {
      e.target.nextElementSibling.hidden  ?
      e.target.nextElementSibling.hidden = false  :
      e.target.nextElementSibling.hidden = true 
      // Change the image arrow : 
      e.target.nextElementSibling.hidden   ?
      e.target.childNodes[2].src = arrowDown :
      e.target.childNodes[2].src = arrowUp
   }
   return(
      <div className="row justify-content-center border border-dark Jenseigne">
         <div className="col-12">
            <h2 className="text-center">Département / Filiere</h2>
         </div>

         <div onClick={DisplayAndHide} className="d-flex col-10 col-lg-8 col-md-8 col-xl-8 col-sm-12 Departement">
            <div className="blueLine"></div>
            <div className="DepartementName">
               Génie Mécanique
            </div>
            <img src={arrowDown} className="ml-auto"  alt="" />
         </div>	
         <div className="Filiere col-6 col-md-5 col-lg-5" hidden>
            <h3 className="text-center py-2 font-weight-bold">GIL</h3>
            <h3 className="text-center py-2 font-weight-bold">GEMSI</h3>
         </div>
         <div onClick={DisplayAndHide} className="d-flex col-10 col-lg-8 col-md-8 col-xl-8 col-sm-12 Departement">
            <div className="blueLine"></div>
            <div className="DepartementName">
               Génie Info
            </div>
            <img src={arrowDown} className="ml-auto" alt="" />
         </div>	
         <div className="Filiere col-6 col-md-5 col-lg-5" hidden>
            <h3 className="text-center py-2 font-weight-bold">BDCC</h3>
            <h3 className="text-center py-2 font-weight-bold">GLSID</h3>
         </div>
      </div>
   )
}

export default Jenseigne
