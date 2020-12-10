import React from 'react'
import { Link } from 'react-router-dom'
import DevoirsX from '../Etudiant/ImageEtd/Group 53.svg'
import Devoir from '../Etudiant/ImageEtd/Group 44.svg'
import backLink from '../Dashboard/imgs/backLink.svg' 
import add from './ImageProf/Add.svg'

function DevoirProf() {
   return (
      <React.Fragment>
      <div className="row cont" >
         <div className="row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerDevoir" >
            <Link to="/professeur/Jenseigne/Modules/DetailModule/" className="col-12 col-md-2 p-3 ml-2">
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
                     Ajouter un nouveau devoir
                  </p>
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

         <form className="modal fade ModalAddDevoir" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">
                     Ajouter un devoir</h4>
                  </div>
                  <div className="modal-body ">
                     <input className="col-12 px-3 py-3" type="text" placeholder="Titre du devoir" required/>
                     <div className="d-flex flex-column flex-md-row col-12 mt-2">
                        <h5 className="my-auto mx-auto mx-md-0">Date limite :</h5>
                        <input className="ml-auto px-3 py-3" type="datetime-local" required/>
                     </div>
                     <textarea className="col-12 mt-2 px-3 py-3" placeholder="Description"></textarea>
                  </div>
                  <div className="modal-footer">
                     <button type="submit" className="mx-auto">Save changes</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
      </React.Fragment>
)
}

export default DevoirProf
