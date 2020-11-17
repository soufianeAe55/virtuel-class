import React from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import '../../../styles/Myclass.css'
import Devoir from '../ImageEtd/Group 44.svg'
import UserDev from '../ImageEtd/Group 58.svg'
import DevoirsX from '../ImageEtd/Group 53.svg'


function Devoirs(){

	return(
		 <React.Fragment>
			
				<SideNav />
				<div className="sous-app" >
					<Menu />
					<div className="row cont" >
					<div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerAnnonce" >
							<img src={Devoir} className="devoirIcon" /> 
							<h1 className="devoirTitle">Devoirs  </h1>
						</div>
					</div>
						
					<div className="row justify-content-center cont ">
						<div className="col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10 devoirsCard" >
							<div className="VoirRow col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12" >
								<img src={UserDev} /> <a className="VoirDevs" > Voir votre devoirs</a>
							</div>

							<div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12" >
								
									<Link to="/devoirContent" className="DevoirLink row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12"> 
										<div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9" > 
											<img className="DevoirIcon" src={DevoirsX} />
											 <p>Nom de devoir </p> 
										 </div>
										 <p id="devoirLimite" className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3" >Date limite : 23 sept</p> 
									 </Link> 
									 <Link to="/devoirContent" className="DevoirLink row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12"> 
										<div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9" > 
											<img className="DevoirIcon" src={DevoirsX} />
											 <p>Nom de devoir </p> 
										 </div>
										 <p id="devoirLimite" className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3" >Date limite : 23 sept</p> 
									 </Link> 
									 <Link to="/devoirContent" className="DevoirLink row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12"> 
										<div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9" > 
											<img className="DevoirIcon" src={DevoirsX} />
											 <p>Nom de devoir </p> 
										 </div>
										 <p id="devoirLimite" className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3" >Date limite : 23 sept</p> 
									 </Link> 
									
							    
							    
							</div>
						</div>
						 
						</div>
				</div>
			
		 </React.Fragment>

		)
}

export default Devoirs