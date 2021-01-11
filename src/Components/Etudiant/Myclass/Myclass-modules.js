import React,{useState,useEffect} from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import '../../../styles/Myclass.css'
import ModuleCard from './ModuleCard'
import Search from '../ImageEtd/search.svg'
import jwtdecode from 'jwt-decode'
import axios from 'axios'



function MyclassModule(props){
	const [mods,setMods]=useState([])
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
		
		axios.get('http://localhost:8000/api/getModules/'+props.match.params.id,headers)
			.then(res => {
				if(res.data.MsgErr == 'JustForEtu'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
				}
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data.data){

					setMods(res.data.data)
				
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
					
					<div className="row justify-content-center cont ">
						<div className="row justify-content-end col-lg-12 col-xl-12 moduleHeader" >
							
							<nav className=" col-lg-12 col-xl-12 col-sm-12 col-md-12 col-12 " aria-label="breadcrumb">
									  <ol class="breadcrumb">
									    <li class="breadcrumb-item " ><Link to="MyClass">Semsters </Link></li>
									    <li class="breadcrumb-item " aria-current="page">Modules</li>
									  </ol>
							</nav>
	                        
						</div>
						{mods.length !=0 ? mods.map((mod,key) => (
							<ModuleCard key={key} nb={key} data={mod} />
						)):<div className="donutMods"></div>}
					</div>
				</div>
			
		 </React.Fragment>
	

		)
}

export default MyclassModule