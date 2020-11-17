import React from 'react'

function Jenseigne() {
   const handleHidden = (e) => {
      e.target.nextElementSibling.hidden
      ? e.target.nextElementSibling.hidden = false  
      : e.target.nextElementSibling.hidden = true
   }
   return (
      <div className="row justify-content-center border border-dark Jenseigne">
         <div className="col-12">
            <h2 className="text-center">Département / Filiere</h2>
         </div>

         <div onClick={handleHidden} className="col-10 col-lg-8 col-md-8 col-xl-8 col-sm-12 Departement">
            <div className="blueLine"></div>
            <div className="DepartementName">
               Génie Mécanique
            </div>
         </div>	
         <div className="Filiere col-6 col-md-5 col-lg-5" hidden>
            <h3 className="text-center py-2 font-weight-bold">GIL</h3>
            <h3 className="text-center py-2 font-weight-bold">GEMSI</h3>
         </div>
         <div onClick={handleHidden} className="col-10 col-lg-8 col-md-8 col-xl-8 col-sm-12 Departement">
            <div className="blueLine"></div>
            <div className="DepartementName">
               Génie Info
            </div>
         </div>	
         <div className="Filiere col-6 col-md-5 col-lg-5" hidden>
            <h3 className="text-center py-2 font-weight-bold">BDCC</h3>
            <h3 className="text-center py-2 font-weight-bold">GLSID</h3>
         </div>
      </div>
   )
}

export default Jenseigne
