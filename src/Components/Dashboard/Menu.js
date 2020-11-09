import React from 'react'
import '../../styles/dashboard.css'
import Notif  from './imgs/notif.svg'
import Avatar  from './imgs/Avatar.svg'
import Arrow  from './imgs/arrowDown.svg'


function Menu(){

	return(
		<ul className="nav NavHead justify-content-end row" >
		  
		  <li className="nav-item notif ">
		   <img src={Notif} className="img-fluid"  />
		  </li>
		   <div class="dropdown">
		  <li className="nav-item Username ">
		     <img src={Avatar} className="avatar img-fluid" />
		     <div className="userInfo">
		     <p className="hello"> Hello </p>
		     <p className="Name">Unknown user </p>
		     </div>
		    
		     <img src={Arrow} className="arrow img-fluid dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
			  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			    <a class="dropdown-item" href="#">Profil</a>
			    <a class="dropdown-item" href="#">Deconnxion</a>
			  </div>
		      
		  </li>
		  </div>
		</ul>
		)
}

export default Menu