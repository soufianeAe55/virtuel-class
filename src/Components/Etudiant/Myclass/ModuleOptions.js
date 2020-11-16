import React from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import MyclassCard from './MyclassCard'
import '../../../styles/Myclass.css'
import Chat from '../ImageEtd/g10.png'
import Annonces from '../ImageEtd/g10-1.svg'
import Devoir from '../ImageEtd/g10-2.svg'


function ModuleOptions(){

	return(
		 <React.Fragment>
			
				<SideNav />
				<div className="sous-app" >
					<Menu />
					
					<div className="row justify-content-around cont ">
						<div className=" col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerOptions" >
							<nav className=" col-lg-12 col-xl-12 col-sm-12 col-md-12 col-12 " aria-label="breadcrumb">
									  <ol class="breadcrumb">
									    <li class="breadcrumb-item " ><Link to="MyClass">Semsters </Link></li>
									    <li class="breadcrumb-item"><Link to="MyClassMOdules">Modules</Link></li>
									    <li class="breadcrumb-item " aria-current="page">Modules Options</li>
									  </ol>
							</nav>
						</div>

						<div className="row CardOptions col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3">	
							<img className="OptionsImg col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  src={Chat} />
							<p className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Consulter le chat de ce module  </p>
							<Link className=" linkOption col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" to="">Voir...</Link>
						</div>
						<div className="row CardOptions col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3">	
							<img className="OptionsImg col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  src={Annonces} />
							<p className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Voir les annonces de ce module  </p>
							<Link className=" linkOption col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" to="/annonce">Voir...</Link>
						</div>
						<div className="row CardOptions col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3">	
							<img className="OptionsImg col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  src={Devoir} />
							<p className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Consulter les devoirs de ce module  </p>
							<Link className=" linkOption col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" to="/devoirs">Voir...</Link>
						</div>
						
					</div>
				</div>
			
		 </React.Fragment>

		)
}

export default ModuleOptions