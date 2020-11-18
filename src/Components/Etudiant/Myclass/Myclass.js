import React from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import MyclassCard from './MyclassCard'
import '../../../styles/Myclass.css'


function Myclass(){

	return(
		 <React.Fragment>
			
				<SideNav />
				
				<div className="sous-app" >
					<Menu />
					
					<div className="row justify-content-around cont ">
						
						<div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 header" >
							<nav className=" col-lg-12 col-xl-12 col-sm-12 col-md-12 col-12 " aria-label="breadcrumb">
									  <ol class="breadcrumb">
									    <li class="breadcrumb-item " aria-current="page">Semsters</li>
									  </ol>
							</nav>
						</div>
						 <MyclassCard />
						 <MyclassCard />
						 <MyclassCard />
						 <MyclassCard />
						 <MyclassCard />
						 <MyclassCard />
					</div>
				</div>
			
		 </React.Fragment>

		)
}

export default Myclass