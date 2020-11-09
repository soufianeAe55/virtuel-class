import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/dashboard.css'
import HomeIcon from './imgs/home.svg'
import ActuaIcon from './imgs/ActualitesSvg.svg'
import UserIcon from './imgs/peopleuser.svg'
import Support from './imgs/support.svg'
import Contact  from './imgs/svgContact.svg'
import Collapse  from './imgs/collapse.svg'

function SideNav(){

	let [hide,setHide]=useState(false)

	return(
	  <div className={`row Donthide ${hide ? "hide" : ""}`} >
		<ul className="nav flex-column sideNa col-12 col-sm-12 col-md-12 col-lg-12 ">
		<h2 className={`${hide ? "logoHide" : "logo"}`} >My logo </h2>
		<h2 className={`${hide ? "logo2" : "logoHide"}`} ></h2>
		  <li className="nav-item ItemNav row " >
		    <Link className="nav-link sideItem  active" to="/homeEtu" >
			    <img  alt="Responsive image" className="Icons img-fluid Hom" src={HomeIcon} />
			    Home
		    </Link>
		  </li>
		   <li className="nav-item ItemNav " >
		    <Link className="nav-link sideItem active " to="/homeEtu" >
			    <img  alt="Responsive image" className="Icons img-fluid Actu" src={ActuaIcon} />
			    Actualites
		    </Link>
		  </li>
		  <li className="nav-item ItemNav">
		    <Link className="nav-link sideItem" to="/Myclass" >
			    <img  alt="Responsive image" className="Icons img-fluid Use" src={UserIcon} />
			    Myclass 
		    </Link>
		  </li>
		  <li className="nav-item ItemNav">
		    <a className="nav-link sideItem">
			    <img  alt="Responsive image" className="Icons img-fluid Supp" src={Support} />
			    Support
		    </a>
		  </li>
		  <li className="nav-item ItemNav ItemEX">
		    <a className="nav-link sideItem" >
			    <img  alt="Responsive image" className="Icons img-fluid Conta" src={Contact} />
			    Contact
		    </a>
		  </li>
		  <li className="nav-item ItemNav Collapse" >
		  	
		    <img  alt="Responsive image" 
		  	      className={`img-fluid ${hide?" showIcon": "Icons hideIcon"}`}
		  		  src={Collapse}
		  		  onClick={()=> { setHide(false)}}
		  		   />
		    <a className={` ${hide?"nav-link sideItem collapseText hideLink":"nav-link sideItem collapseText"}`}
		       onClick={()=> { setHide(true)}} >
		       <img  alt="Responsive image" 
		  	      className={`img-fluid ${hide?"Icons hideIcon": "Icons"}`}
		  		  src={Collapse}
		  		   />
		       Hide
		     </a>

		  </li>
		</ul>
		</div>
		)
}

export default SideNav