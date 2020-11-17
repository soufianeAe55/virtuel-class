import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/homeEtu.css'
import '../../styles/Chat.css'
import Chat from '../Chat/Chat'

function Contact(){

	return(
		 <React.Fragment>
			<SideNav />
			<div className="sous-app" >
				<Menu />
				<div className="row cont contV2">
					<Chat />
				</div>
			</div>
		
		</React.Fragment>
		)
}

export default Contact