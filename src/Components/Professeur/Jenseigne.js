import React, {useEffect, useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import arrowDown from './ImageProf/arrowDown.svg'
import arrowUp from './ImageProf/arrowUp.svg'
import jwtdecode from 'jwt-decode'
import axios from 'axios'


function Jenseigne(props) {

   const [filieres,setFiliere]=useState([])
  

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
        
        axios.get('http://localhost:8000/api/getFilieres',headers)
			.then(res => {
				if(res.data.MsgErr == 'JustForProf'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
            }
            
				if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
              console.log(res.data)
               setFiliere(res.data)
               
				} 
			})
			.catch(err => {
				console.log(err)
			})

   },[])

   const DisplayAndHide = (e,f) => {
         
      if(e.target.parentNode.className === "d-flex col-10 col-lg-8 col-md-8 col-xl-8 col-sm-12 Departement")
      { 
        e.target.parentNode.nextElementSibling.hidden  ?
        e.target.parentNode.nextElementSibling.hidden = false :
        e.target.parentNode.nextElementSibling.hidden = true 

        e.target.parentNode.nextElementSibling.hidden   ?
        e.target.parentNode.childNodes[2].src = arrowDown :
        e.target.parentNode.childNodes[2].src = arrowUp
      } else {
         e.target.nextElementSibling.hidden  ?
         e.target.nextElementSibling.hidden = false :
         e.target.nextElementSibling.hidden = true 

         e.target.nextElementSibling.hidden   ?
         e.target.childNodes[2].src = arrowDown :
         e.target.childNodes[2].src = arrowUp
      }
   }
   return(
      <div className="row justify-content-center Jenseigne">
         <div className="col-12 mt-5">
            <h2 className="text-center mb-5">Département / Filiere</h2>
         </div>
      
     {filieres.length!=0 ? filieres.map((filiere,key) => (
        <React.Fragment key={key} >
        <div onClick={(e) => DisplayAndHide(e,filiere)} className="d-flex col-10 col-lg-8 col-md-8 col-xl-8 col-sm-12 Departement">
           <div className="blueLine"></div>
           <div className="DepartementName">
            { filiere.FiliereName}
           </div>
           <img src={arrowDown} className="FilProfss ml-auto"  alt="" />
        </div>	
        
        <div className="Filiere col-6 col-md-5 col-lg-5" hidden>
           
       {filiere.classes.length !=0 ? filiere.classes.map((clas,key) => (
          <Link key={key} to={"/professeur/Jenseigne/Modules/"+clas.className}>
          <h3 className="text-center py-2 font-weight-bold">{clas.className}</h3>
          </Link>
       )) : <h2>Il n y a pas des classes</h2>}
        </div>
        </React.Fragment>
     )): <h2>Il n y a pas des filieres</h2>}

         
         
      </div>
   )
}

export default withRouter(Jenseigne)
