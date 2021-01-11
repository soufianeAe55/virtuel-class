import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import '../../styles/dashboard.css'
import Notif  from './imgs/notif.svg'
import Avatar  from './imgs/Avatar.svg'
import Arrow  from './imgs/arrowDown.svg'
import jwtdecode from 'jwt-decode'
import axios from 'axios'


function Menu(props){
	
	let firstName=""
	let lastName=""
	
  if(localStorage.token){
	let data=jwtdecode(localStorage.token)
	let str=data.userEmail
	 firstName=str.split('-',1)[0].split('.')[0]
	 lastName=str.split('-',1)[0].split('.')[1]
	
 	 }else{	
		props.history.push('/')
	 }
	const Deconnexion= () => {
		axios.get('http://localhost:8000/api/deconnecter')
		.then(res => {
			localStorage.removeItem('token')
			props.history.push('/')
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
	}

	useEffect(() => {
		if(!localStorage.token){
			props.history.push('/')
		}
		
	})

	return(
		<ul className="nav NavHead justify-content-end row" >
		  
		  <li className="nav-item notif ">
		   <img src={Notif} className="img-fluid" alt=""  />
		  </li>
		   <div class="dropdown">
		  <li className="nav-item Username ">
		     <img src={Avatar} className="avatar img-fluid" alt="" />
		     <div className="userInfo">
		     <p className="hello"> Hello </p>
		     <p className="Name">{lastName} {firstName} </p>
		     </div>
		    
		     <img src={Arrow} className="arrow img-fluid dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" alt=""/>
			  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			    <a className="dropdown-item" onClick={Deconnexion} >Deconnxion</a>
			  </div>
		      
		  </li>
		  </div>
		</ul>
		)
}

export default withRouter(Menu)