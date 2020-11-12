import React, {useState} from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import '../../styles/dashboard.css'
import HomeIcon from './imgs/home.svg'
import ActuaIcon from './imgs/ActualitesSvg.svg'
import {useEffect} from 'react'
import UserIcon from './imgs/peopleuser.svg'
import Support from './imgs/support.svg'
import Contact  from './imgs/svgContact.svg'
import Collapse  from './imgs/collapse.svg'

function SideNav(props){

	let [hide,setHide]=useState(false)
	const { location } = props;

	const homeEtuId = location.pathname.match(/^\/homeEtu/) ? "active" : "";
    const actsId = location.pathname.match(/^\/acts/) ? "active" : "";
    const MyclassId = location.pathname.match(/^\/Myclass/) ? "active" : "";
    const supportId = location.pathname.match(/^\/support/) ? "active" : "";
    const contactId = location.pathname.match(/^\/contact/) ? "active" : "";
    const hideId = location.pathname.match(/^\/contact/) ? "activeicon" : "";

    const homeIcon = location.pathname.match(/^\/homeEtu/) ? "activeicon" : "";
    const actsIcon = location.pathname.match(/^\/acts/) ? "activeicon" : "";
    const MyclassIcon = location.pathname.match(/^\/Myclass/) ? "activeicon" : "";
    const supportIcon = location.pathname.match(/^\/support/) ? "activeicon" : "";
    const contactIcon = location.pathname.match(/^\/contact/) ? "activeicon" : "";
    const hideIcon = location.pathname.match(/^\/contact/) ? "activeicon" : "";


	return(
	  <div className={`row Donthide ${hide ? "hide" : ""}`} >
		<ul id="NavId" className="nav flex-column sideNa col-12 col-sm-12 col-md-12 col-lg-12 ">
		<h2 className={`${hide ? "logoHide" : "logo"}`} >My logo </h2>
		<h2 className={`${hide ? "logo2" : "logoHide"}`} ></h2>
		  <li id={homeEtuId}  className={`nav-item ItemNav ${hide ? "ItemNav2" : ""}`} >
		    <NavLink activeClassName="active10"  className="nav-link sideItem" to="/homeEtu">
			    <img id={homeIcon}   alt="Responsive image"  className={`Icons img-fluid Hom active11 ${hide?" Icons2": ""}`} src={HomeIcon} />
			    Home
		    </NavLink>
		  </li>

		   <li id={actsId} className={`nav-item ItemNav ${hide ? "ItemNav2" : ""}`}  >
		    <NavLink activeClassName="active10" className="nav-link sideItem" to="/acts"  >
			    <img id={actsIcon}  alt="Responsive image" className={`Icons img-fluid Actu active11 ${hide?" Icons2": ""}`} src={ActuaIcon} />
			    Actualites
		    </NavLink>
		  </li>

		  <li id={MyclassId} className={`nav-item ItemNav ${hide ? "ItemNav2" : ""}`}  >
		    <NavLink activeClassName="active10" className="nav-link sideItem" to="/Myclass" >
			    <img id={MyclassIcon}  alt="Responsive image" className={`Icons img-fluid Use active11 ${hide?" Icons2": ""}`} src={UserIcon} />
			    Myclass 
		    </NavLink>
		  </li>
		  <li id={supportId} className={`nav-item ItemNav ${hide ? "ItemNav2" : ""}`}  >
		    <NavLink activeClassName="active10" className="nav-link sideItem" to="/support" >
			    <img id={supportIcon}  alt="Responsive image" className={`Icons img-fluid Supp active11 ${hide?" Icons2": ""}`} src={Support} />
			    Support
		    </NavLink>
		  </li>
		  <li id={contactId}  className={`nav-item ItemEX ItemNav ${hide ? "ItemNav2" : ""}`}  >
		    <NavLink activeClassName="active10" className="nav-link sideItem" to="/contact">
			    <img id={contactIcon}  alt="Responsive image" className={`Icons img-fluid Conta active11 ${hide?" Icons2": ""}`} src={Contact} />
			    Contact
		    </NavLink>
		  </li>
		  <li  className={`nav-item ItemEX ItemNav Collapse ${hide ? "ItemNav2 Collapse2" : ""}`} >
		  	
		    <img id=""  alt="Responsive image" 
		  	      className={`img-fluid ${hide?" showIcon": "Icons hideIcon"}`}
		  		  src={Collapse}
		  		  onClick={()=> { setHide(false)}}
		  		   />
		    <Link activeClassName="active10" to="#" className={` ${hide?"nav-link sideItem collapseText hideLink":"nav-link sideItem collapseText"}`}
		       onClick={()=> { setHide(true)}} >
		       <img id=""  alt="Responsive image" 
		  	      className={`img-fluid ${hide?"Icons hideIcon": "Icons"}`}
		  		  src={Collapse}
		  		   />
		       Hide
		     </Link>

		  </li>
		</ul>
		</div>
		)
}

export default withRouter(SideNav)