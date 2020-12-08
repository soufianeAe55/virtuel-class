import React, {useState,useEffect} from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import '../../styles/dashboard.css'
import HomeIcon from './imgs/home.svg'
import ActuaIcon from './imgs/ActualitesSvg.svg'
import UserIcon from './imgs/peopleuser.svg'
import Support from './imgs/support.svg'
import Contact  from './imgs/svgContact.svg'
import Collapse  from './imgs/collapse.svg'
import MenuTog  from './imgs/menuTog.svg'
import Teacher  from './imgs/Teacher.svg'
import decode from "jwt-decode"
 
function SideNav(props){

	let [hide,setHide]=useState(false)
	let [show,setShow]=useState(false)
	const { location } = props;
	const DisplayMenu = () => {
		if(!show ){
		setShow(true);
		}else{
			setShow(false)
		}
	}
	useEffect(() => {
		window.addEventListener("resize",()=> {
			if(window.innerWidth < 750){
				console.log('test')
				setHide(true);
				if(show ){
					setHide(false);
				}
			}else{
					setHide(false)
			}
		})
		
	});
	const EtudiantNav = () =>{
		let data=''
		if(localStorage.token){
			 data= decode(localStorage.token)
		}else{
			props.history.push('/')
		}
		
		if(data.type== 'Etudiant'){
		return (
			<React.Fragment >
				<li id={homeEtuId}  className={`nav-item ItemNav ${hide ? "ItemNav2" : ""}`} >
		    <NavLink activeClassName="active10"   className="nav-link sideItem" to="/homeEtu">
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
		    <NavLink activeClassName="active10" id={MyclassIdM} className="nav-link sideItem" to="/Myclass" >
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
			</React.Fragment>
		)
		}else if(data.type== 'Professeur'){
			return (
				<React.Fragment >
					<li id={profHome}  className={`nav-item ItemNav ${hide ? "ItemNav2" : ""}`} >
				<NavLink activeClassName="active10"   className="nav-link sideItem" to="/professeurHome">
					<img id={professeurIconHome}   alt="Responsive image"  className={`Icons img-fluid Hom active11 ${hide?" Icons2": ""}`} src={HomeIcon} />
					Acceuil
				</NavLink>
			  </li>
	
			   <li id={actsId} className={`nav-item ItemNav ${hide ? "ItemNav2" : ""}`}  >
				<NavLink activeClassName="active10" className="nav-link sideItem" to="/acts"  >
					<img id={actsIcon}  alt="Responsive image" className={`Icons img-fluid Actu active11 ${hide?" Icons2": ""}`} src={ActuaIcon} />
					Actualites
				</NavLink>
			  </li>
	
			  <li id={profEns} className={`nav-item ItemNav ${hide ? "ItemNav2" : ""}`}  >
				<NavLink activeClassName="active10" id={MyclassIdM} className="nav-link sideItem" to="/professeur/Jenseigne" >
					<img id={profEnsIcon}  alt="Responsive image" className={`Icons img-fluid Use active11 ${hide?" Icons2": ""}`} src={Teacher} />
					J'enseigne 
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
				</React.Fragment>
			)
		}
	} 
	
	const homeEtuId = location.pathname.match(/^\/homeEtu/) ? "active" : "";
    const actsId = location.pathname.match(/^\/acts/) ? "active" : "";
    const MyclassId = location.pathname.match(/^\/Myclass/) ||
    				  location.pathname.match(/^\/ModuleOptions/) ||
    				  location.pathname.match(/^\/annonce/) ||
    				  location.pathname.match(/^\/devoirs/) ||
    				  location.pathname.match(/^\/devoirContent/) ? "active" : "";

 	const MyclassIdM = location.pathname.match(/^\/MyclassModules/) ||
 					   location.pathname.match(/^\/ModuleOptions/) || 
 					   location.pathname.match(/^\/annonce/)  || 
 					   location.pathname.match(/^\/devoirs/) ||
    				   location.pathname.match(/^\/devoirContent/) ? "active-1" : ""; 

	const supportId = location.pathname.match(/^\/support/) ? "active" : "";
	const profHome=location.pathname.match(/^\/professeurHome/) ? "active" : "";
	const profEns=location.pathname.match(/^\/professeur\/Jenseigne/) ? "active" : "";
    const contactId = location.pathname.match(/^\/contact/) ? "active" : "";
    const hideId = location.pathname.match(/^\/contact/) ? "activeicon" : "";

    const homeIcon = location.pathname.match(/^\/homeEtu/) ? "activeicon" : "";
    const actsIcon = location.pathname.match(/^\/acts/) ? "activeicon" : "";
    const MyclassIcon = location.pathname.match(/^\/Myclass/) ||
    				    location.pathname.match(/^\/ModuleOptions/) ||
    				    location.pathname.match(/^\/annonce/) ||
    				    location.pathname.match(/^\/devoirs/) ||
    				    location.pathname.match(/^\/devoirContent/) ? "activeicon" : "";


	const supportIcon = location.pathname.match(/^\/support/) ? "activeicon" : "";
	const profEnsIcon=location.pathname.match(/^\/professeur\/Jenseigne/) ? "activeicon" : "";
	const professeurIconHome=location.pathname.match(/^\/professeurHome/) ? "activeicon" : "";
    const contactIcon = location.pathname.match(/^\/contact/) ? "activeicon" : "";
    const hideIcon = location.pathname.match(/^\/contact/) ? "activeicon" : "";


	return(
	<React.Fragment>	
	<img src={MenuTog} className="respoMenu"  onClick={DisplayMenu} />
	  <div className={`row Donthide ${show ? "showMenu" : "hideMenu"} ${hide ? "hide" : ""}`} >
		<ul id="NavId" className="nav flex-column sideNa col-12 col-sm-12 col-md-12 col-lg-12 ">
		<h2 className={`${show ? "logoHide2" : "logo"} ${hide? "logoHide" : "logo"}`} >My logo </h2>
		<h2 className={`logo3 ${hide ? "logo2" : "logoHide"}`} ></h2>
		  {EtudiantNav()}
		</ul>
		</div>
	</React.Fragment>	
		)
}

export default withRouter(SideNav)