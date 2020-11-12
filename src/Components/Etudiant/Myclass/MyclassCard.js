import React from 'react'

import {Link} from 'react-router-dom'
import '../../../styles/Myclass.css'

function MyclassCard(){

	return(
		 
				
			<div className="col-lg-4 col-12  col-md-4 col-sm-5 col-xl-3 row Scard" >
					<div className="col-4 col-sm-4 col-md-4 col-lg-4 Sname " >
							<span className="Sname-name  align-self-center"> S2 </span>
					</div>
					<span className="col-6 col-sm-6 col-md-6 col-lg-8 Sclass">
								GLSID-2
					</span>
					<Link to="/MyclassModules" className="Smodules col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 align-self-end" > 
						VOIR LES MODULES
					</Link>

			</div>
	

		)
}

export default MyclassCard