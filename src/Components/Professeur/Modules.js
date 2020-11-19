import React from 'react'
import Cubes from './ImageProf/Cubes.svg'

function Modules() {
   return (
      <div className="row justify-content-center border border-dark Modules">
         <div className="col-12">
            <h2 className="text-center">Modules</h2>
         </div>
         <div className="row d-flex justify-content-around border border-dark w-100 py-3">
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 my-2 Modules__carte">
               <h3 className="text-center">Xml et les framesworks</h3>
               <div className="d-flex justify-content-between mb-2">
                  <img src={Cubes} alt="" />
                  <h4 className="my-auto">S3</h4>
               </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 my-2 Modules__carte">
               <h3 className="text-center">Xml et les framesworks</h3>
               <div className="d-flex justify-content-between mb-2">
                  <img src={Cubes} alt="" />
                  <h4 className="my-auto">S3</h4>
               </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 my-2 Modules__carte">
               <h3 className="text-center">Xml et les framesworks</h3>
               <div className="d-flex justify-content-between mb-2">
                  <img src={Cubes} alt="" />
                  <h4 className="my-auto">S3</h4>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Modules
