import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DevoirsX from '../Etudiant/ImageEtd/Group 53.svg'
import Devoir from '../Etudiant/ImageEtd/Group 44.svg'
import backLink from '../Dashboard/imgs/backLink.svg' 
import add from './ImageProf/Add.svg'
import ModalAddDevoir from './ModalAddDevoir'

function DevoirProf() {
   const [obj] = useState({
      nomDevoir : "tec francais",
      date: "03/08/2019"
   })
   return (
      <React.Fragment>
      <div className="row cont" >
         <div className="row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerDevoir" >
            <Link to="/professeur/Jenseigne/Modules/DetailModule/"
            className="col-12 col-md-2 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
               <div className="row">
                  <img src={Devoir} className="devoirIcon mx-auto" alt=""/> 
                  <h1 className="devoirTitle text-center">Travaux et Devoirs  </h1>
               </div>
            </div>
         </div>
         
      <div className="row justify-content-center cont ">
         <div className="col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10 devoirsCard" >
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12" >
                  <p className="row float-right h5 addDevoir mb-4" data-toggle="modal" data-target="#exampleModal">
                     <img src={add} alt="" className=" my-auto mr-1"/>
                     Nouveau devoir
                  </p>
               <Link to={{
                  pathname:"/professeur/Jenseigne/Modules/DetailModule/annonceProf/devoirprof/devoirproflistetd",
                  state:{...obj}
               }} 
               className="DevoirLink row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12"> 
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-8" > 
                     <img className="DevoirIcon" src={DevoirsX} alt=""/>
                     <p>{obj.nomDevoir} </p> 
                  </div>
                  <p id="devoirLimite" className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 mx-auto mx-md-0" >Date limite : {obj.date}</p>
               </Link>
            </div>
         </div>
      <ModalAddDevoir  />
      </div>
      </React.Fragment>
)
}

export default DevoirProf
