import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/homeEtu.css'

function Actualites(){

	return(
		 <React.Fragment>
			<SideNav />
			<div className="sous-app" >
				<Menu />
				<div className="row cont">
					<div className="col-2 col-sm-4 col-md-6 col-lg-10" >
					  <h2 > Actualites page for etudiants </h2>
					</div>
				</div>
			</div>
		
		</React.Fragment>
		)
}

export default Actualites