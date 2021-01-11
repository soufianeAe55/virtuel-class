import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Chat from './ImageProf/Chat.svg'
import Annonces from './ImageProf/annonces.svg'
import Devoir from'./ImageProf/devoir.svg'
import backLink from '../Dashboard/imgs/backLink.svg' 
import axios from 'axios'
import jwtdecode from 'jwt-decode'



function DetailModule(props) {

   const [module,setModule]=useState({})
  

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

        axios.get('http://localhost:8000/api/getModuleForProf/'+props.match.params.id,headers)
			.then(res => {
				if(res.data.MsgErr == 'JustForProf'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
            }
            
				if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
              
               setModule(res.data[0])
               
				} 
			})
			.catch(err => {
				console.log(err)
			})

   },[])
   
   return (
      <div className="row justify-content-around cont ">
         <div className="row col-12 mb-3">
            <Link to={"/professeur/Jenseigne/Modules/"+module.className} className="col-1 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
         </div>
         <div className="row CardOptions col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3">	
            <img className="OptionsImg col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  src={Chat} alt="" />
            <p className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Consulter le chat de ce module  </p>
            <Link className=" linkOption col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" to={"/chat/"+props.match.params.id}>Voir...</Link>
         </div>
         <div className="row CardOptions col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3">	
            <img className="OptionsImg col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  src={Annonces} alt="" />
            <p className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Voir les annonces de ce module  </p>
            <Link className=" linkOption col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" 
            to={"/professeur/Jenseigne/Modules/DetailModule/annonceProf/"+props.match.params.id}>Voir...</Link>
         </div>
         <div className="row CardOptions col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3">	
            <img className="OptionsImg col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  src={Devoir} alt="" />
            <p className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Consulter les devoirs de ce module  </p>
            <Link className=" linkOption col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            to={"/professeur/Jenseigne/Modules/DetailModule/devoirprof/"+props.match.params.id}>Voir...</Link>
         </div>
      
   </div>
)
}

export default DetailModule
