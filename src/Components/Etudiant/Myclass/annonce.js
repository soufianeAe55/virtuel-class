import React from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import AnnonceCard from './AnnonceCard'
import '../../../styles/Myclass.css'
import AnnonceIcon from '../ImageEtd/Group.svg'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import Exam from '../ImageEtd/Group 47.svg'


function Annonce(){

	return(
		 <React.Fragment>
			
				<SideNav />
				<div className="sous-app" >
					<Menu />
					<div className="row cont" >
					<div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerAnnonce" >
							<img src={AnnonceIcon} className="annonceIcon" /> 
							<h1 className="annonceTitle">Annonces  </h1>
						</div>
					</div>
						
					<div className="row justify-content-around cont ">
						
						
						<AnnonceCard />
							
						
						<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  DevoirComing" >
							<h4 className=" Avenir col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> A venir ! </h4>
							<a className=" Exam col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><img src={Exam} /> <p> Exam 1 </p> </a>
							<a className=" Exam col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><img src={Exam} /> <p> Exam 1 </p> </a>
							<a className=" AfficheExams align-self-end col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >Tout Afficher </a>
						</div>
						<React.Fragment>
							<AnnonceCard />
							<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  " >
							</div>
						</React.Fragment>
						 
					</div>
				</div>
			
		 </React.Fragment>

		)
}

export default Annonce