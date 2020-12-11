import React, {useState, useEffect} from 'react'
import Cubes from './ImageProf/Cubes.svg'
import backLink from '../Dashboard/imgs/backLink.svg' 
import { Link } from 'react-router-dom'
import jwtdecode from 'jwt-decode'
import axios from 'axios'


function Modules(props) {
   const [modules,setModules]=useState([])
  

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

        axios.get('http://localhost:8000/api/getModulesForProf/'+props.match.params.id,headers)
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
               setModules(res.data)
               
				} 
			})
			.catch(err => {
				console.log(err)
			})

   },[])
   return (
      <div className="row justify-content-center Modules">
         <div className="row col-12 mt-5">
            <Link to="/professeur/Jenseigne" className="col-1 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
            <h2 className="text-center col-10">Modules</h2>
         </div>
         <div className="row d-flex justify-content-around w-100 py-3 cards">
            { modules.length!=0 ? modules.map((value,key) =>
           ( <Link key={key} to={"/professeur/Jenseigne/Modules/DetailModule/"+value.id}
            className="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 my-2 Modules__carte">
               <h2 className="text-center mt-4 mb-5">{value.name}</h2>
               <h5 className="text-center mt-4 mb-5">{value.className}</h5>
               <div className="d-flex justify-content-between mb-2">
                  <img src={Cubes} alt="" />
             <h4 className="my-auto">S{value.Semster_id}</h4>
               </div>
            </Link>)
            ): <h2>Il n y a pas des modules</h2>}

         </div>
      </div>
   )
}

export default Modules
