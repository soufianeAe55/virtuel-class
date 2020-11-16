import React from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import '../../../styles/Myclass.css'
import ModuleCard from './ModuleCard'
import Search from '../ImageEtd/search.svg'

function MyclassModule(){

	return(
		 
				
			 <React.Fragment>
			
				<SideNav />
				<div className="sous-app" >
					<Menu />
					
					<div className="row justify-content-center cont ">
						<div className="row justify-content-end col-lg-12 col-xl-12 moduleHeader" >
							<nav className=" col-lg-12 col-xl-12 col-sm-12 col-md-12 col-12 " aria-label="breadcrumb">
									  <ol class="breadcrumb">
									    <li class="breadcrumb-item " ><Link to="MyClass">Semsters </Link></li>
									    <li class="breadcrumb-item " aria-current="page">Modules</li>
									  </ol>
							</nav>
	                        
						</div>
						<ModuleCard />
						<ModuleCard />
						<ModuleCard />
						<ModuleCard />
						<ModuleCard />
						<ModuleCard />
						
					</div>
				</div>
			
		 </React.Fragment>
	

		)
}

export default MyclassModule