import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import backLink from '../Dashboard/imgs/backLink.svg'
import AnnonceIcon from '../Etudiant/ImageEtd/Group.svg' 
import AddAnnonce from './ImageProf/addAnnonce.svg'
import AnnonceProfCard from './AnnonceProfCard'
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import ModalEditAnnonce from './ModalEditAnnonce'
import ModalDeleteAnnonce from './ModalDeleteAnnonce'
import Avatar from '../Dashboard/imgs/Avatar.svg'
import Sendco from '../Etudiant/ImageEtd/sendco.svg' 
import AnnonceCardComment from '../Etudiant/Myclass/AnnonceCardComment'
import Pen from './ImageProf/Pen.svg'
import Delete from './ImageProf/delete.svg'
import moment from 'moment'
import Comments from './Comments'
import jwtDecode from 'jwt-decode'



function AnnoceProf(props) {

      const [annonces,setAnnonces]=useState([])
      const [annId,setAnnId]=useState('')
      const [toModal,SetToModal  ]=useState([])
      const [comment,setComment]=useState('')
      const [comments,setComments]=useState([])
      const [activer,setActiver]=useState(false)
      const [added,setAdded]=useState(0)
      
      let data=jwtdecode(localStorage.token)
      let token= 'Bearer '+localStorage.token
      let headers={
            headers : {Authorization: token}
      } 
      

      useEffect(() => {

         if(localStorage.token) {
            
            if(data.type != 'Professeur' ){
               localStorage.removeItem('token')
                  props.history.push('/')

               }
               
            if(data.class == null){
                  props.history.push('/approuvee')
               }

         }else{
            props.history.push('/')
         }

         axios.get('http://localhost:8000/api/getAnnoncesForProf/'+props.match.params.id,headers)
            .then(res => {
               if(res.data.MsgErr == 'JustForProf'){
                  localStorage.removeItem('token')
                  props.history.push('/notallowed')
               }
               
               if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
                  localStorage.removeItem('token')
                  props.history.push('/expire')
               }else if(res.data){
               
                  setAnnonces(res.data)
                  
               } 
            })
            .catch(err => {
               console.log(err)
            })

       

      },[annonces])

      const sendToModal = (data) =>{
         SetToModal(data)
      }

      const Sendcomment = (id) =>{
         
         console.log(id)
         let token1=jwtDecode(localStorage.token)
         let str= token1.userEmail.split('-',1)[0].split('.')
         let userName=str[1]+' '+str[0]
   
         let data={
            comment,
            id_annonces: id,
            userName,
            date: new Date()
         }
   
         
         axios.post('http://localhost:8000/api/addCommentForProf',data,headers)
         .then(res => {
            if(res.data.MsgErr == 'TokenExpiredError'){
               localStorage.removeItem('token')
               props.history.push('/expire')
            }else if(res.data){
               setComment('')
               setAdded(1)
            
            }else if(res.data.MsgErr == 'JustForEtu'){
               localStorage.removeItem('token')
               props.history.push('/notallowed')
            }
         })
         .catch(err => {
            console.log(err)
         })
      }
      const CommentValue= (e) => {
         setComment(e.target.value)
      }
      
   return(
      <div className="row justify-content-around cont ">
         <div className="row mb-3 w-100">
            <Link to={"/professeur/Jenseigne/Modules/DetailModule/"+props.match.params.id} className="col-1 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
               <div className="d-flex flex-column flex-md-row col-12 col-lg-10 col-md-10 col-sm-10 col-xl-10 headerAnnonce" >
                  <div className="row">
                     <img src={AnnonceIcon} className="annonceIcon" alt="" /> 
                     <h1 className="annonceTitle ">Annonces  </h1>            
                  </div>
                  <Link className="mx-auto mt-2 ml-md-auto mr-md-0 mt-md-0" to={"/professeur/Jenseigne/addannonce/"+props.match.params.id}>
                     <img src={AddAnnonce}  alt="" />
                  </Link>
               </div>
         </div>

        {annonces.length >0 ? annonces.map((annonce,key) =>{
          
           return(
          <div className="Ann col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8" key={key}  >
             <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard">
            <div className="AvatarProf">
               <img alt="" src={Avatar} />
               <div className="AvatarName">
               <span>{annonce.profName}</span>
               <p>{moment(annonce.date).fromNow()}</p>
            </div>
            <div className="ml-auto mr-3 mt-2">
               <img className="mx-2" onClick={sendToModal.bind(this,annonce)} data-toggle="modal" data-target="#EditModal" src={Pen} alt="" />
               <img className="mx-2" onClick={sendToModal.bind(this,annonce)} data-toggle="modal" data-target="#DeleteModal" src={Delete} alt="" />
            </div>
         </div>
            <div className="AnnonceContent">
               <p> {annonce.contenu}
               </p>
            </div>
         </div>
         <div className="Comments col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard2" >
            <Comments id={annonce.id} added={added} />
         </div>
      
         <div className="SendComment  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard3" >
            <img alt="" className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" src={Avatar} className="UserComment" />
            <form onSubmit={(e) => {
               e.preventDefault()
               Sendcomment(annonce.id)}}
               
            className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11" >
               <input  onChange={CommentValue.bind(this)} placeholder="Ecrire un commentaire..." 
               className="inputComment col-8 col-sm-9 col-md-10 col-lg-10 col-xl-11 "
                />
               <button className="SendButtonComment" > <img alt="" src={Sendco} className="SendComment" /> </button>
            </form>
         </div>
        </div> 
        )})  
       : <h2>il n y a pas des annonces</h2>}

      <ModalDeleteAnnonce data={toModal} />
      <ModalEditAnnonce data={toModal} />
      </div>
   )
}

export default AnnoceProf
