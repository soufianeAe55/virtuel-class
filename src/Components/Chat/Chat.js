import React, {useEffect,useState} from 'react'
import '../../styles/homeEtu.css'
import '../../styles/Chat.css'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import ChatIcon from './ChatImg/chat.svg'
import AvatarIcon from '../Dashboard/imgs/Avatar.svg'
import Actif from './ChatImg/Ellipse 26.svg'
import axios from 'axios'

function Chat(props){

	const [users,setUsers]=useState([])
	const [idRoom,setIdRoom] = useState('')
	const [nameFriend,setNameFriend]= useState('')
	

	let fullName
	if(props.module[0] != undefined){
		fullName=props.module[0].emailProf.split('-')[0].split('.')
	}

	useEffect(() => {
			 
		let token= 'Bearer '+localStorage.token
		let headers={
			headers : {Authorization: token}
		} 

	},[])

	const getRoom = (data) => {
		if(props.Mode == 'forContact'){
			setIdRoom(data.idFriend)
			
		}

	} 
	return(
			<div className="Chat col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

							<div className="ChatList col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
							<div className="ChatList-Header row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<img className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" src={ChatIcon} />
								<h2 className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" > Contact</h2>
							</div>
							
							{props.Mode !='forContact' ?<div className="Contact col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<img className="AvatarIcon" src={AvatarIcon} />
								<img className="Actif" src={Actif} />
								<span className="ContactName" >{fullName != undefined ?fullName[0]:null} {fullName != undefined ?fullName[1]:null}</span>
							</div>:null}

							{props.users.map((user,key) => { 

								let fullNameV2
								
								if(user.idFriend){
									fullNameV2=user.idFriend.split('-')[0].split('.')
									console.log(fullNameV2)
								}else if(user.email){
									
									 fullNameV2=user.email.split('-')[0].split('.')
								}

								return (
							<div key={key} onClick={e => getRoom(user)} className="Contact col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<img className="AvatarIcon" src={AvatarIcon} />
								<img className="Actif" src={Actif} />
								<span className="ContactName" >{fullNameV2[0]} {fullNameV2[1]}</span>
							</div>
							)})}

						

						</div>

						<ChatForm idRoom={props.Mode == 'forContact'?idRoom:'vv'} Mode={props.Mode} nmEtu={props.users.length} users={props.users} module={props.module[0]} idMod={props.idMod} />
					</div>
		)

}

export default Chat;