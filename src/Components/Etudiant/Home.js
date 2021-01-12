import React ,{useState, useEffect}from 'react'
import {withRouter} from 'react-router-dom'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/homeEtu.css'
import '../../styles/Home.css'
import welcome from './ImageEtd/welcome.svg'
import home2 from './ImageEtd/home2.svg'
import home3 from './ImageEtd/home3.svg'
import jwtdecode from 'jwt-decode'

function HomeEtu(props){

	
	let data=jwtdecode(localStorage.token)
	let str=data.userEmail
	let firstName=str.split('-',1)[0].split('.')[0]

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
		
		
	})

	return(
		 <React.Fragment>
			<SideNav />
			<div className="sous-app" >
			<Menu />
			<div className="row conter" >
				<div className="row  mx-3  w-100    " id="ligne1">
					<div className=" mx-0 col-md-12    " id="ligne1_para"> 
						<div className=" mx-0 w-100 bg-white  row rounded">
							<div className="col-md-7   my-lg-5 my-lg-4 mt-3 p-lg-3 ">
								<h5 className=" mx-lg-3 mx-1 mb-3 font-weight-bold font-family-montserrat h51 ">Bienvenue chers {firstName}  </h5>
								<p className="mx-lg-3 my-1 mx-1 para1 ">
								Grâce a Virtual Class platform. vous pouvez gérer et communiquer facilement 
								avec vos collegues et vos professeurs, et vous pouvez aussi partager 
								vos supports et rendre vos devoirs et consulter les actualites de votre école. 	
								 </p>
							</div>
						
							<div className=" col-md-5  cont-img mb-sm-4 ligne1_img">
								<img className=" w-100 h-100 ml-lg-3 ml-2 img1" src={welcome} ></img>
							</div>
						</div>
					</div>
	
				</div>
				<div className="row  w-100 mx-3 my-2 d-flex  " id="ligne2">
					<div className=" mx-0 my-2 col-md-6  ">
						<div className=" mx-0 w-100 row h-100 bg-white rounded ">
							<div className="col-md-7  my-lg-5 my-4 p-lg-3">
								<h5 className=" mx-lg-3 w-100 font-weight-bold font-family-montserrat  h5">Collaborer facilement avec vos collegues</h5>
							</div>
							<div className="col-md-5 ">
								<img className=" w-100 h-100 ml-lg-3 ml-2" src={home2}></img>
							</div>

						</div>
					</div>
					<div className=" mx-0 my-2 col-md-6 ">
						<div className=" mx-0 w-100  row  bg-white rounded">
							<div className="col-md-7 my-lg-5 my-4 p-lg-3">
								<h5 className=" mx-lg-3 mx-0 w-100 font-weight-bold font-family-montserrat h5 ">Communiquer facilement avec vos collegues</h5>
							</div>
							<div className="col-md-5">
								<img className=" w-100 h-100 ml-lg-3 ml-2" src={home3}></img>
							</div>
						</div>
					</div>
							
				</div>
			</div>
				
		</div>
		
		</React.Fragment>
		)
}

export default withRouter(HomeEtu)