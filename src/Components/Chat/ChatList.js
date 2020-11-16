import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/homeEtu.css'
import '../../styles/Chat.css'
import ChatIcon from './ChatImg/chat.svg'
import AvatarIcon from '../Dashboard/imgs/Avatar.svg'
import Actif from './ChatImg/Ellipse 26.svg'
import Vector from './ChatImg/Vector.svg'
import Send from './ChatImg/send.svg'
import Contacts from './ChatImg/Contacts.svg'
import Drop from './ChatImg/drop.svg'

function ChatList(){

	return(
					<div className="ChatList col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
							<div className="ChatList-Header row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<img className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" src={ChatIcon} />
								<h2 className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" > Contact</h2>
							</div>
							
										
							<div className="Contact col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<img className="AvatarIcon" src={AvatarIcon} />
								<img className="Actif" src={Actif} />
								<span className="ContactName" >Professeur</span>
							</div>
							<div className="Contact col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<img className="AvatarIcon" src={AvatarIcon} />
								<img className="Actif" src={Actif} />
								<span className="ContactName" >Professeur</span>
					</div>

						

						</div>
		)

}

export default ChatList;