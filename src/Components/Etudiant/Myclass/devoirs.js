import React,{useEffect,useState} from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import '../../../styles/Myclass.css'
import Devoir from '../ImageEtd/Group 44.svg'
import UserDev from '../ImageEtd/Group 58.svg'
import DevoirsX from '../ImageEtd/Group 53.svg'
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import moment from 'moment'


function Devoirs(props){
	const [devoirs,setDevoirs]=useState([])
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
		
		axios.get('http://localhost:8000/api/getDeviors/'+props.match.params.id,headers)
			.then(res => {
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){

					setDevoirs(res.data)
				//	console.log(res.data)
				
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
					<div className="row cont" >
					<div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerAnnonce" >
							<img src={Devoir} className="devoirIcon" /> 
							<h1 className="devoirTitle">Devoirs  </h1>
						</div>
					</div>
						
					<div className="row justify-content-center cont ">
						<div className="col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10 devoirsCard" >
							<div className="VoirRow col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12" >
								<img src={UserDev} /> <a className="VoirDevs" > Voir votre devoirs</a>
							</div>

							<div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12" >
								
									{devoirs.length!=0? devoirs.map((devoir,key) => 
									(<Link key={key} to={"/devoirContent/"+devoir.id} className="DevoirLink row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12"> 
										<div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9" > 
											<img className="DevoirIcon" src={DevoirsX} />
											 <p>{devoir.name}</p> 
										 </div>
										 <p id="devoirLimite" className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3" >Date limite : {moment(devoir.date.seconds,'s').format('DD MMMM')} </p> 
									 </Link>))
									 : <h5>il n'y a pas de devoir pour le moment!</h5>} 
							    
							</div>
						</div>
						 
						</div>
				</div>
			
		 </React.Fragment>

		)
}

export default Devoirs