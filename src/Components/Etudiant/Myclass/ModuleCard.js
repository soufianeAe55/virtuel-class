import React from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/Myclass.css'

function ModuleCard(){

	return(
		<div className="col-12 col-lg-8 col-md-10 col-xl-8 col-sm-12 module">
			<div className="blueLine">
			</div>
			<Link to="/ModuleOptions" className="moduleName">
				Module 1: Xml et les Frameworks
			</Link>
		</div>	
	)
}

export default ModuleCard