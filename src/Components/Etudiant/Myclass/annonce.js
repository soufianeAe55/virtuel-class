import React, {useState, useEffect} from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link, NavLink} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import AnnonceCard from './AnnonceCard'
import '../../../styles/Myclass.css'
import AnnonceIcon from '../ImageEtd/Group.svg'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import Exam from '../ImageEtd/Group 47.svg'
import jwtdecode from 'jwt-decode'
import axios from 'axios'
import moment from 'moment'


function Annonce(props){

	const [anns, setAnns]=useState([])
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
		
		axios.get('http://localhost:8000/api/getAnnonces/'+props.match.params.id,headers)
			.then(res => {
				if(res.data.MsgErr == 'JustForEtu'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
				}
				
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){

					setAnns(res.data)
					
				
				} 
			})
			.catch(err => {
				console.log(err)
			})
			axios.get('http://localhost:8000/api/getDeviors/'+props.match.params.id,headers)
			.then(res => {
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){

					setDevoirs(res.data)
					
				
				}else if(res.data.MsgErr == 'JustForEtu'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
				}
			})
			.catch(err => {
				console.log(err)
			})
	},[])
	
				
	if(anns.length != 0){	
		let firstAnn={}
		let annsV2=[]
		for (let i = 0; i < anns.length; i++) {
			if(i==0) firstAnn=anns[i]
			else annsV2.push(anns[i])
		}
		//console.log(annsV2)
	return(
		 <React.Fragment>
			
				<SideNav />
				<div className="sous-app" >
					<Menu />
					<div className="row cont" >
					<div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerAnnonce" >
							<img src={AnnonceIcon} className="annonceIcon" alt="" /> 
							<h1 className="annonceTitle">Annonces  </h1>
						</div>
					</div>
						
					<div className="row justify-content-around cont ">
						
						
						<AnnonceCard data={firstAnn} />
							
						
						<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  DevoirComing" >
							<h4 className=" Avenir col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> A venir ! </h4>

							{devoirs.length==1 ?devoirs.map((devoir,key) => 
								(<Link to={'/devoirContent/'+devoir.id} key={key} className=" Exam col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<img src={Exam} /> <p> Exam 1 </p> </Link>
							 )):null}
							 {devoirs.length > 1 ? 
							 <React.Fragment>
								<Link to={"/devoirContent/"+devoirs[0].id} className=" Exam col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<img src={Exam} /> <p> {devoirs[0].name} </p> </Link>
								<Link to={"/devoirContent/"+devoirs[1].id} className=" Exam col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							    <img src={Exam} /> <p> {devoirs[1].name} </p> </Link>
							</React.Fragment>
							 :null}
							<Link to={"/devoirs/"+props.match.params.id} className=" AfficheExams align-self-end col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >Tout Afficher </Link>
						</div>

						{ annsV2.length != 0 ? annsV2.map((ann,key) =>
						(<React.Fragment key={key}>
							<AnnonceCard data={ann} />
							<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  " >
							</div>
						</React.Fragment>
						)): null}
						 
					</div>
				</div>
			
		 </React.Fragment>

		)
	}else{
		return(
		<React.Fragment> 
				<SideNav />
				<div className="sous-app" >
					<Menu />
					<div className="row cont justify-content-center" >
						<h1>il n'a pas des Annonces</h1>
					</div>
				</div>
		</React.Fragment>
		)
	}
}

export default Annonce