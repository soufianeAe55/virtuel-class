import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/homeEtu.css'

function HomeEtu(){

	return(
		<div className="app" >
			<SideNav />
			<div className="sous-app" >
				<Menu />
				<div className="container">

					<h2> Home page for etudiants </h2>
				</div>
			</div>

		</div>
		)
}

export default HomeEtu