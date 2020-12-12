import React from 'react'
import { Link } from 'react-router-dom'
import backLink from '../Dashboard/imgs/backLink.svg' 
import DevoirsX from '../Etudiant/ImageEtd/Group 53.svg'
import clock from './ImageProf/clock.svg'
import File from '../Etudiant/ImageEtd/File.svg'
import Avatar from '../Dashboard/imgs/Avatar.svg'
import Pen from '../Dashboard/imgs/Pen.svg'
import Delete from '../Dashboard/imgs/delete.svg'
import ModalDeleteDevoir from './ModalDeleteDevoir'
import ModalEditDevoir from './ModalEditDevoir'


function DevoirProfListEtd() {
   return (
      <React.Fragment>
      <div className="row cont">
         <div className="row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerDevoir" >
            <Link to="/professeur/Jenseigne/Modules/DetailModule/annonceProf/devoirprof/" className="col-12 col-md-2 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
            <div className="row col-12 col-md-10">
               <div className="row">
                  <img src={DevoirsX} className="devoirIcon mx-auto mx-md-0" alt=""/> 
                  <h1 className="devoirTitle text-center">Nom du devoir  </h1>
               </div>
               <div className="row mx-auto ml-md-auto my-auto">
                  <img src={clock} alt="" />
                  <p className="my-auto mx-2" >Date limite : 23 sept 23:59</p>              
               </div>
               <div className="col-1 d-flex mx-auto my-auto SupportRow__EditImages">
                  <img data-toggle="modal" data-target="#EditModal"  src={Pen} alt="" />
                  <img data-toggle="modal" data-target="#DeleteModal" src={Delete} alt="" />
               </div>
            </div>
         </div>
      </div>
      <div className="row justify-content-center cont tableDevoirEtd">
         <table className="table col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10 bg-white">
            <thead>
               <tr >
                  <th scope="col"></th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prenom</th>
                  <th scope="col">Fichier</th>
                  <th scope="col" className="row">Date de depot</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row"><img alt="" src={Avatar} /></th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td ><img src={File} alt="" /></td>
                  <td>22 SEPT 2020  22:05</td>
                  </tr>
               <tr>
                  <th scope="row"><img alt="" src={Avatar} /></th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td ><img src={File} alt="" /></td>
                  <td>22 SEPT 2020  22:05</td>
               </tr>
            </tbody>
         </table> 
      </div>
      <ModalDeleteDevoir />
      <ModalEditDevoir />
      </React.Fragment>
   )
}

export default DevoirProfListEtd
