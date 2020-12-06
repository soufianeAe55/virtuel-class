import React from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/Myclass.css'

function ModuleCard(props){
	

	return(
		<div className="col-12 col-lg-8 col-md-10 col-xl-8 col-sm-12 module">
			<div className="blueLine">
			</div>
			<Link to={"/ModuleOptions/"+props.data.id} className="moduleName">
				Module {props.nb+1}: {props.data.name}
			</Link>
		</div>	
	)
}

export default ModuleCard