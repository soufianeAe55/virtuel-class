import React from 'react'
import { Link } from 'react-router-dom'
import DevoirsX from '../Etudiant/ImageEtd/Group 53.svg'
import Devoir from '../Etudiant/ImageEtd/Group 44.svg'
import backLink from '../Dashboard/imgs/backLink.svg' 

function DevoirProf() {
   return (
      <React.Fragment>
      <div className="row cont" >
         <div className="row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerDevoir" >
            <Link to="/professeur/Jenseigne/Modules/DetailModule/" className="col-12 col-md-2 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
               <div className="row ">
                  <img src={Devoir} className="devoirIcon mx-auto" alt=""/> 
                  <h1 className="devoirTitle text-center">Travaux et Devoirs  </h1>
               </div>
            </div>
         </div>
         
      <div className="row justify-content-center cont ">
         <div className="col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10 devoirsCard" >
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12" >
         
               <Link to="/professeur/Jenseigne/Modules/DetailModule/annonceProf/devoirprof/devoirproflistetd"
                  className="DevoirLink row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12"> 
                  <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9" > 
                     <img className="DevoirIcon" src={DevoirsX} alt=""/>
                     <p>Nom de devoir </p> 
                  </div>
                     <p id="devoirLimite" className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3" >Date limite : 23 sept</p> 
               </Link>
               
            </div>
         </div>
      </div>
      </React.Fragment>
)
}

export default DevoirProf
