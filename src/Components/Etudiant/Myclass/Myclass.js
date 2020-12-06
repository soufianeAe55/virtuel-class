import React,{useState,useEffect} from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import MyclassCard from './MyclassCard'
import '../../../styles/Myclass.css'
import axios from 'axios'
import jwtdecode from 'jwt-decode'




function Myclass(props){

	const [nameClass,setNameClass]=useState('')

	useEffect(() => {

		if(localStorage.token) {
			let data = jwtdecode(localStorage.token)
		 if(!data.type == 'Etudiant'){

				props.history.push('/')

			}else if( data.class == null){

				props.history.push('/approuvee')
			}
		  }else{

			props.history.push('/')

		  }

		let token= 'Bearer '+localStorage.token
		let headers={
			headers : {Authorization: token}
		}
		
		axios.get('http://localhost:8000/api/getSemsters',headers)
			.then(res => {
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){

				setNameClass(res.data[0].class)
				
				}else if(res.data.MsgErr == 'JustForEtu'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
				}
			})
			.catch(err => {
				console.log(err)
			})
	},[])

	return(
		 <React.Fragment>
			
				<SideNav />
				
				<div className="sous-app" >
					<Menu />
					
					<div className="row justify-content-around cont ">
						
						<div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 header" >
							<nav className=" col-lg-12 col-xl-12 col-sm-12 col-md-12 col-12 " aria-label="breadcrumb">
									  <ol class="breadcrumb">
									    <li class="breadcrumb-item " aria-current="page">Semsters</li>
									  </ol>
							</nav>
						</div>
						
						 <MyclassCard num={1} name={nameClass} />
						 <MyclassCard num={2} name={nameClass} />
						 <MyclassCard num={3} name={nameClass} />
						 <MyclassCard num={4} name={nameClass} />
						 <MyclassCard num={5} name={nameClass} />
						 <MyclassCard num={6} name={nameClass} />
					</div>
				</div>
			
		 </React.Fragment>

		)
}

export default Myclass