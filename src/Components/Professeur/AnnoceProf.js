import React from 'react'
import { Link } from 'react-router-dom'
import backLink from '../Dashboard/imgs/backLink.svg'
import AnnonceIcon from '../Etudiant/ImageEtd/Group.svg' 
import AddAnnonce from './ImageProf/addAnnonce.svg'
import AnnonceProfCard from './AnnonceProfCard'


function AnnoceProf() {
   return(
      <div className="row justify-content-around cont ">
         <div className="row mb-3 w-100">
            <Link to="/professeur/Jenseigne/Modules/DetailModule" className="col-1 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
               <div className="d-flex flex-column flex-md-row col-12 col-lg-10 col-md-10 col-sm-10 col-xl-10 headerAnnonce" >
                  <div className="row">
                     <img src={AnnonceIcon} className="annonceIcon" alt="" /> 
                     <h1 className="annonceTitle ">Annonces  </h1>            
                  </div>
                  <Link className="mx-auto mt-2 ml-md-auto mr-md-0 mt-md-0" to="/professeur/Jenseigne/Modules/DetailModule/annonceProf/addannonce">
                     <img src={AddAnnonce}  alt="" />
                  </Link>
               </div>
         </div>
         <AnnonceProfCard />
         <AnnonceProfCard />
      </div>
   )
}

export default AnnoceProf
