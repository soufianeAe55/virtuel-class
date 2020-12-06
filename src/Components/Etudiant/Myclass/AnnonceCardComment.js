import React from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/Myclass.css'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import Sendco from '../ImageEtd/sendco.svg'
import moment from 'moment'


function AnnonceCard(props){

	return(
		 
				
	  				
			<React.Fragment> 
			 	<div className="AvatarEtu">
					<img src={Avatar} />
					<span>{props.data.userName}</span>
					<p>{moment(props.data.date).fromNow()}</p>
				</div>
				<p className="comment" >{props.data.comment}</p>
			</React.Fragment>	
						
						
		)
}

export default AnnonceCard