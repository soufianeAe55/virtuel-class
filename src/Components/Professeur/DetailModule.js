import React from 'react'
import { Link } from 'react-router-dom'
import Chat from './ImageProf/Chat.svg'
import Annonces from './ImageProf/annonces.svg'
import Devoir from'./ImageProf/devoir.svg'
import backLink from '../Dashboard/imgs/backLink.svg' 


function DetailModule() {
   return (
      <div className="row justify-content-around cont ">
         <div className="row col-12 mb-3">
            <Link to="/professeur/Jenseigne/Modules" className="col-1 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
         </div>
         <div className="row CardOptions col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3">	
            <img className="OptionsImg col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  src={Chat} alt="" />
            <p className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Consulter le chat de ce module  </p>
            <Link className=" linkOption col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" to="">Voir...</Link>
         </div>
         <div className="row CardOptions col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3">	
            <img className="OptionsImg col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  src={Annonces} alt="" />
            <p className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Voir les annonces de ce module  </p>
            <Link className=" linkOption col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" to="/annonce">Voir...</Link>
         </div>
         <div className="row CardOptions col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3">	
            <img className="OptionsImg col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  src={Devoir} alt="" />
            <p className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Consulter les devoirs de ce module  </p>
            <Link className=" linkOption col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" to="/devoirs">Voir...</Link>
         </div>
      
   </div>
)
}

export default DetailModule
