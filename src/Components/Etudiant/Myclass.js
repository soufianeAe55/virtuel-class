import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/homeEtu.css'

function Myclass(){

	return(
		 <React.Fragment>
			
				<SideNav />
				<div className="sous-app" >
					<Menu />
					<div className="row cont">

						<h2> Myclass page for etudiants </h2>
					</div>
				</div>
			
		 </React.Fragment>

		)
}

export default Myclass