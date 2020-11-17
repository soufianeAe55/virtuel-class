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
import ChatList from './ChatList'

function ChatForm(){

	return(
			
					<div className="ChatForm col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
							
							<div className="ChatHeader  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="H-1 dropdown col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">	
									<img className="img-1" src={Contacts} />
									<span id="NumberConts"> 35 Contacts </span>
									<img className="img-2 dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" alt="" src={Drop} />
									 <div class="dropdown-menu drp-2" aria-labelledby="dropdownMenuButton">
									    
									    <a className="dropdown-item" href="#">
									    	<img className="AvatarIcon" src={AvatarIcon} />
											<img className="Actif" src={Actif} />
											<span className="ContactName2" >Professeur</span>
									    </a>
									    <a className="dropdown-item" href="#">
									    	<img className="AvatarIcon" src={AvatarIcon} />
											<img className="Actif" src={Actif} />
											<span className="ContactName2" >Professeur</span>
									    </a>
									 </div>
								</div>
								<div className="H-2 col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8" >	
									<h2> Unknow User </h2>
							       <img className="ActifHeader" src={Actif} />
							       <p> Actif</p>
							    </div> 
							</div>
							<div className="ChatBody col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						
							</div>
							<div className="ChatFooter col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="col-10 col-sm-11 col-md-10 col-lg-10 col-xl-10" >
									<img className="imgChat"   src={Vector} />
									<input className="col-10 col-sm-11 col-md-11 col-lg-11 col-xl-11"
									 type="text"
									 placeholder="Ecrire un message" />
								</div>
								<button className="col-2 col-sm-1 col-md-2 col-lg-2 col-xl-2"> 
									<img className="imgChat"  src={Send} />
								</button>
							</div>
						</div>
					
		)

}

export default ChatForm;