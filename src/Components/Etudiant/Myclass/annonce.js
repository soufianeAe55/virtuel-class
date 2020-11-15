import React from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import MyclassCard from './MyclassCard'
import '../../../styles/Myclass.css'


function Annonce(){

	return(
		 <React.Fragment>
			
				<SideNav />
				<div className="sous-app" >
					<Menu />
					
					<div className="row justify-content-around cont ">
						
						<div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 header" >
						</div>
						 
					</div>
				</div>
			
		 </React.Fragment>

		)
}

export default Annonce