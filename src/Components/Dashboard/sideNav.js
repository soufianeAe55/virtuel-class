import React from 'react'
import {Link} from 'react-router-dom'

function SideNav(){
	return(
		<ul class="nav flex-column sideNa">
		<h2>My logo </h2>
		  <li class="nav-item">
		    <Link class="nav-link active" to="/homeEtu" >Home</Link>
		  </li>
		  <li class="nav-item">
		    <Link class="nav-link" to="/Myclass" >Myclass </Link>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link" href="#">Support</a>
		  </li>
		  <li class="nav-item">
		    <a class="nav-link " href="#">Contact</a>
		  </li>
		</ul>
		)
}

export default SideNav