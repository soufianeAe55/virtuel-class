import React from 'react'
import Avatar from '../Dashboard/imgs/Avatar.svg'
import Sendco from '../Etudiant/ImageEtd/sendco.svg' 
import AnnonceCardComment from '../Etudiant/Myclass/AnnonceCardComment'
import Pen from './ImageProf/Pen.svg'
import Delete from './ImageProf/delete.svg'
import ModalEditAnnonce from './ModalEditAnnonce'
import ModalDeleteAnnonce from './ModalDeleteAnnonce'


function AnnonceProfCard() {
   return(
   <React.Fragment>
         <div className="Ann col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
         <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard">
            <div className="AvatarProf">
               <img alt="" src={Avatar} />
               <div className="AvatarName">
               <span>Unknow User </span>
               <p>20 Sept</p>
            </div>
            <div className="ml-auto mr-3 mt-2">
               <img className="mx-2" data-toggle="modal" data-target="#EditModal" src={Pen} alt="" />
               <img className="mx-2" data-toggle="modal" data-target="#DeleteModal" src={Delete} alt="" />
            </div>
         </div>
            <div className="AnnonceContent">
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce 
               venenatis tempor mi, in aliquet nibh imperdiet rhoncus. Praesent
               rhoncus egestas aliqu
               </p>
            </div>
         </div>
         <div className="Comments col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard2" >
            <a className="MoreComments">10 commentaires en cours </a>
            <AnnonceCardComment />
         </div>
      
         <div className="SendComment  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard3" >
            <img alt="" className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" src={Avatar} className="UserComment" />
            <form className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11" >
               <input placeholder="Ecrire un commentaire..." 
               className="inputComment col-8 col-sm-9 col-md-10 col-lg-10 col-xl-11 " />
               <button className="SendButtonComment" > <img alt="" src={Sendco} className="SendComment" /> </button>
            </form>
         </div>
      </div>
   </React.Fragment>
   )
}

export default AnnonceProfCard
