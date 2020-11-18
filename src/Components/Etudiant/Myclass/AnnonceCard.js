import React from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/Myclass.css'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import Sendco from '../ImageEtd/sendco.svg'
import AnnonceCardComment from './AnnonceCardComment'


function AnnonceCard(){

	return(
		 
				
	  				<div className="Ann col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
							<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard">
							<div className="AvatarProf">
								<img src={Avatar} />
								<div className="AvatarName">
								<span>Unknow User </span>
								<p>20 Sept</p>
								</div>
							</div>
							<div className="AnnonceContent">
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce 
								venenatis tempor mi, in aliquet nibh imperdiet rhoncus. Praesent
								 rhoncus egestas aliqu
								 </p>
							</div>
						 </div>
						 <div className="Comments col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard2" >
						 	<a className="MoreComments">10 commentaires en cours </a>
						 	<AnnonceCardComment />
						 </div>
						
						 <div className="SendComment  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard3" >
							<img className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" src={Avatar} className="UserComment" />
							<form className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11" >
							 	<input placeholder="Ecrire un commentaire..." 
							 	className="inputComment col-8 col-sm-9 col-md-10 col-lg-10 col-xl-11 " />
							 	<button className="SendButtonComment" > <img src={Sendco} className="SendComment" /> </button>
							 	</form>
						 </div>
						</div>
			
		)
}

export default AnnonceCard