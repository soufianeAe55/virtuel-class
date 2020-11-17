import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/homeEtu.css'
import '../../styles/Chat.css'
import ChatList from './ChatList'
import ChatForm from './ChatForm'

function Chat(){

	return(
			<div className="Chat col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<ChatList />
						<ChatForm />
					</div>
		)

}

export default Chat;