import React from 'react'
import Cubes from './ImageProf/Cubes.svg'
import backLink from '../Dashboard/imgs/backLink.svg' 
import { Link } from 'react-router-dom'



function Modules() {
   return (
      <div className="row justify-content-center Modules">
         <div className="row col-12 mt-5">
            <Link to="/professeur/Jenseigne" className="col-1 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
            <h2 className="text-center col-10">Modules</h2>
         </div>
         <div className="row d-flex justify-content-around w-100 py-3 cards">
            <Link to="/professeur/Jenseigne/Modules/DetailModule"
            className="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 my-2 Modules__carte">
               <h2 className="text-center mt-4 mb-5">Xml et les framesworks</h2>
               <div className="d-flex justify-content-between mb-2">
                  <img src={Cubes} alt="" />
                  <h4 className="my-auto">S3</h4>
               </div>
            </Link>

            <Link to="/professeur/Jenseigne/Modules/DetailModule"
            className="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 my-2 Modules__carte">
               <h2 className="text-center mt-4 mb-5">Xml et les framesworks</h2>
               <div className="d-flex justify-content-between mb-2">
                  <img src={Cubes} alt="" />
                  <h4 className="my-auto">S3</h4>
               </div>
            </Link>

            <Link to="/professeur/Jenseigne/Modules/DetailModule"
            className="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 my-2 Modules__carte">
               <h2 className="text-center mt-4 mb-5">Xml et les framesworks</h2>
               <div className="d-flex justify-content-between mb-2">
                  <img src={Cubes} alt="" />
                  <h4 className="my-auto">S3</h4>
               </div>
            </Link>
         </div>
      </div>
   )
}

export default Modules
