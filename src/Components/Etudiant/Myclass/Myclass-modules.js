import React from 'react'
import SideNav from '../../Dashboard/sideNav'
// import {Link} from 'react-router-dom'
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
							<input placeholder="Modules" className=" col-lg-3 col-xl-3 col-sm-8 col-md-6 col-10 ModuleSearch" />
								<img className=" col-lg-2 col-xl-2 col-sm-4 col-md-4 col-2 search" src={Search} alt="" />
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