import React from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/Myclass.css'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import Sendco from '../ImageEtd/sendco.svg'


function AnnonceCard(){

	return(
		 
				
	  				
			<React.Fragment> 
			 	<div className="AvatarEtu">
					<img src={Avatar} />
					<span>Unknow X </span>
					<p>20 Sept</p>
				</div>
				<p className="comment" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce 
				venenatis tempor mi, in aliquet nibh imperdiet</p>
			</React.Fragment>	
						
						
		)
}

export default AnnonceCard