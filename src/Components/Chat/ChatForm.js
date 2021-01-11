import React, {useEffect,useState} from 'react'
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
import io from 'socket.io-client'
import axios from 'axios'
import jwtdecode from'jwt-decode'
import moment from 'moment'
import Dropzone from 'react-dropzone'
import {withRouter} from 'react-router-dom'
import Pdf from '../Etudiant/ImageEtd/pdf.svg'
import Word from '../Etudiant/ImageEtd/word.svg'

let server='http://localhost:8000'
let socket=io.connect(server)
	

function ChatForm(props){
	const [message,setMessage]= useState('')
	const [messagesData,setMessagesData]= useState([])
	const [nameFriend,setNameFriend]= useState([])

	
	let userData=jwtdecode(localStorage.token)
	let fullName
	let NameFriend
	if(props.module != undefined){
		fullName=props.module.emailProf.split('-')[0].split('.')
	}
	if(props.Mode == 'forContact'&& props.users[0] != undefined ){
				
		NameFriend=props.users[0].idFriend.split('-')[0].split('.')
	}

	const sendData= (e) => {
		e.preventDefault()
		
		let date=new Date()
		if(message != ''){
			let messageData
			if(props.Mode == 'forContact'){
				
					messageData={
						mode: props.Mode,
						message,
						date,
						type: 'text',
						email: userData.userEmail,
						idFriend: props.idRoom,
						typeUser:userData.type
					}	
				
				

			}else{
				messageData={
					message,
					date,
					type: 'text',
					idMod: props.idMod,
					email: userData.userEmail,
					typeUser:userData.type
				}		
			}

		socket.emit('message',messageData)	
		socket.emit('message',messageData)

		setMessage('')
		
		socket.on('messagesData',(data) =>{
			data.sort((a,b) => {
				a.date=new Date(a.date)
					b.date=new Date(b.date)

					if(a.type== 'pdf' || a.type== 'docx' || a.type== 'image'){
						
						a.date.setHours(a.date.getHours())
					}
					if(b.type== 'pdf' || b.type== 'docx' || b.type== 'image'){
						
						b.date.setHours(b.date.getHours())
					}
					return a.date > b.date
			})
			setMessagesData(data)
		})

		
		}
	}
	const sendDataV2= (files) => {
	
		let date=new Date()
		let type
			if(files[0].type=="application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
				type='docx'
			}else if(files[0].type=="application/pdf"){
				type='pdf'
			}else if(files[0].type.split('/')[0]=="image"){
				type='image'
				console.log(type)
			}	

		let formData= new FormData()
		if(props.Mode == 'forContact'){
			formData.append('date',date)
			formData.append('mode',props.Mode)
			formData.append('type',type)
			formData.append('idMod',props.idMod)
			formData.append('email',userData.userEmail)
			formData.append('idFriend',props.idRoom)
			formData.append('typeUser',userData.type)
			formData.append('fileName',files[0].name)
			formData.append('file',files[0])
		}else{
			formData.append('date',date)
			formData.append('type',type)
			formData.append('idMod',props.idMod)
			formData.append('email',userData.userEmail)
			formData.append('typeUser',userData.type)
			formData.append('fileName',files[0].name)
			formData.append('file',files[0])
		}
		
		axios.post('http://localhost:8000/api/sendPics',formData)
		.then(res => {
			console.log(res.data)
		})
		socket.on('messagesData',(data) =>{
			
			data.sort((a,b) => {
				a.date=new Date(a.date)
				b.date=new Date(b.date)

				if(a.type== 'pdf' || a.type== 'docx' || a.type== 'image'){
					
					a.date.setHours(a.date.getHours())
				}
				if(b.type== 'pdf' || b.type== 'docx' || b.type== 'image'){
					
					b.date.setHours(b.date.getHours())
				}
				return a.date > b.date
			})
			setMessagesData(data)
		})

		
		
		
	}
	const changeData = (e) => {

		let {name,value}=e.target
		if(name== 'message') setMessage(value)
	}

	

		useEffect(() => {
			 
			let token= 'Bearer '+localStorage.token
			let headers={
				headers : {Authorization: token}
			} 

			

			if(props.Mode != 'forContact'){

			axios.get('http://localhost:8000/api/getChats/'+ props.idMod,headers)
			.then(res => {
			  
			    if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
				  localStorage.removeItem('token')
				  props.history.push('/expire')
			   }else if(res.data){
				res.data.sort((a,b) => {
					a.date=new Date(a.date)
					b.date=new Date(b.date)

					if(a.type== 'pdf' || a.type== 'docx' || a.type== 'image'){
						
						a.date.setHours(a.date.getHours())
					}
					if(b.type== 'pdf' || b.type== 'docx' || b.type== 'image'){
						
						b.date.setHours(b.date.getHours())
					}
					return a.date > b.date
				})
				 setMessagesData(res.data)
			   } 
			})
			.catch(err => {
			   console.log(err)
			})
		}else{
			setNameFriend(props.idRoom.split('-')[0].split('.'))

			let donnees={
				idUser: userData.userEmail,
				idFriend: props.idRoom,
				type: userData.type
			}
			axios.post('http://localhost:8000/api/getChatsForAdmin',donnees,headers)
			.then(res => {
			  
			    if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
				  localStorage.removeItem('token')
				  props.history.push('/expire')
			   }else if(res.data){
				res.data.sort((a,b) => {
					a.date=new Date(a.date)
					b.date=new Date(b.date)

					if(a.type== 'pdf' || a.type== 'docx' || a.type== 'image'){
						
						a.date.setHours(a.date.getHours())
					}
					if(b.type== 'pdf' || b.type== 'docx' || b.type== 'image'){
						
						b.date.setHours(b.date.getHours())
					}
					return a.date > b.date
				})
				 setMessagesData(res.data)
			   } 
			})
			.catch(err => {
			   console.log(err)
			})
		}
			
		},[props.idRoom])
		

	return(
			
					<div className="ChatForm col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
							
							<div className="ChatHeader  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="H-1 dropdown col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">	
									<img className="img-1" src={Contacts} />
									<span id="NumberConts"> ({props.nmEtu}) Contacts </span>
									<img className="img-2 dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" alt="" src={Drop} />
									 <div class="dropdown-menu drp-2" aria-labelledby="dropdownMenuButton">
									    
									   { props.Mode != 'forContact' ?<a className="dropdown-item" href="#">
									    	<img className="AvatarIcon" src={AvatarIcon} />
											<img className="Actif" src={Actif} />
											<span className="ContactName2" >{fullName != undefined ?fullName[0]:null} {fullName != undefined ?fullName[1]:null}</span>
									    </a>: null}

										{props.users.map((user,key) => { 

											let fullNameV2
											if(user.idFriend){
												fullNameV2=user.idFriend.split('-')[0].split('.')
												
											}else if(user.email){
												fullNameV2=user.email.split('-')[0].split('.')
											}

											return (
									    <a className="dropdown-item" key={key} href="#">
									    	<img className="AvatarIcon" src={AvatarIcon} />
											<img className="Actif" src={Actif} />
											<span className="ContactName2" >{fullNameV2[0]} {fullNameV2[1]}</span>
										</a>
										)})}
											
									 </div>
								</div>
								<div className="H-2 col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8" >	
									<h2> {props.module != undefined ?props.module.name : null}
											{props.Mode == 'forContact' && props.idRoom != '' ?nameFriend[0]+' '+nameFriend[1]: null}	
									 </h2>
							       {props.idRoom != ''? <img className="ActifHeader" src={Actif} />:null}
							       <p> {props.idRoom != '' ?props.Mode != 'forContact' ?'('+props.nmEtu+') Actifs': 'Actif':null}</p>
							    </div> 
							</div>
							<div className="ChatBody col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

								{props.idRoom != '' ? messagesData.map((t,key) => {
									let c
									if(messagesData[messagesData.length-1].email == userData.userEmail) c=1;
									else c=2

									let fullNameV2
									if(props.Mode != 'forContact'){
									 fullNameV2=t.email.split('-')[0].split('.')
									}else{
										fullNameV2=t.email.split('-')[0].split('.')
									}
									// t.date=new Date(t.date)
									//t.date.setHours(t.date.getHours()-1)
									

									return (
								<React.Fragment key={key} >
									{t.email != userData.userEmail ?
									<div className="otherUser col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
										ref={r => {
											if(r != null && c==2)
											{r.scrollIntoView({behavior: 'smooth'})}
										}}
									>
											<div className="AllUserName ">
													<img src={AvatarIcon} />
													<span>{fullNameV2[0]} {fullNameV2[1]}</span>
											</div>
											<div className="msgBd">
												<p className={t.type == 'text' || t.type == 'pdf' || t.type == 'docx' || t.type == 'image' ?'mesgBody':'mesgBodyV2'}>
												{t.type=='text'?t.message:null}

												{t.type=='image'?
												<a
												href={'http://localhost:8000/ChatFiles/'+moment(t.date).subtract(1,'hours').format('DD-MM-YYYY-hh-1:mm:ss')+'_'+t.fileName}
												>
												<img 
												className="imgeUsr"
												src={'http://localhost:8000/ChatFiles/'+moment(t.date).subtract(1,'hours').format('DD-MM-YYYY-hh:mm:ss')+'_'+t.fileName}
												 />
												 </a>
												 :null }

												 {t.type=='pdf'?
												<a
												className="aforchat"
												href={'http://localhost:8000/ChatFiles/'+moment(t.date).subtract(1,'hours').format('DD-MM-YYYY-hh:mm:ss')+'_'+t.fileName}
												>
												<img 
												className="FlUsr"
												src={Pdf}
												 />
												 {t.fileName}
												 </a>
												 :null }

												 {t.type=='docx'?
												<a
												className="aforchat"
												href={'http://localhost:8000/ChatFiles/'+moment(t.date).subtract(1,'hours').format('DD-MM-YYYY-hh:mm:ss')+'_'+t.fileName}
												>
												<img 
												className="FlUsr"
												src={Word}
												 />
												 {t.fileName}
												 </a>
												 :null }
												<span className="chatDate">{moment(t.date).format('hh:mm ')}</span>
												</p>
												
											</div>
									</div>

										:
									<div className="currentUser col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
									ref={r => {
										if(r != null && c==1)
										{r.scrollIntoView({behavior: 'smooth'})}
									}}
									>
										<div>
										<p className={t.type == 'text' || t.type == 'pdf' || t.type == 'docx' || t.type == 'image' ?'mesgBody':'mesgBodyV2'}>
												{t.type=='text'?t.message:null}

												{t.type=='image'?
												<a
												href={'http://localhost:8000/ChatFiles/'+moment(t.date).subtract(1,'hours').format('DD-MM-YYYY-hh:mm:ss')+'_'+t.fileName}
												>
												<img 
												className="imgeUsr"
												src={'http://localhost:8000/ChatFiles/'+moment(t.date).subtract(1,'hours').format('DD-MM-YYYY-hh:mm:ss')+'_'+t.fileName}
												 />
												 </a>
												 :null }

{t.type=='pdf'?
												<a
												href={'http://localhost:8000/ChatFiles/'+moment(t.date).subtract(1,'hours').format('DD-MM-YYYY-hh:mm:ss')+'_'+t.fileName}
												>
												<img 
												className="FlUsr"
												src={Pdf}
												 />
												  {t.fileName}
												 </a>
												 :null }

												 {t.type=='docx'?
												<a
												href={'http://localhost:8000/ChatFiles/'+moment(t.date).subtract(1,'hours').format('DD-MM-YYYY-hh:mm:ss')+'_'+t.fileName}
												>
												<img 
												className="FlUsr"
												src={Word}
												 />
												 {t.fileName}
												 </a>
												 :null }
												<span className="chatDate2">{moment(t.date).format('hh:mm ')}</span>
											</p>
											</div>
									</div>}
								</React.Fragment>
								)}): <h4 className="selectText" ><span>Veulliez choisir une discussion</span></h4> }
							</div>
							<div className="ChatFooter col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<form className={props.idRoom != ''?'formChat':'hideformChat'} onSubmit={sendData}> 
								<div className="formChatDiv col-10 col-sm-11 col-md-10 col-lg-10 col-xl-10" >
								
									{/*<label>
									<input type='file'  hidden/>	
									<img className="imgChat"   src={Vector} />
									</label>*/}
									<Dropzone onDrop={sendDataV2}>
										{({getRootProps, getInputProps}) => (
											<section>
											<div {...getRootProps()}>
												<input {...getInputProps()} />
												<img className="imgChat"   src={Vector} />
											</div>
											</section>
										)}
									</Dropzone>
									<input className="col-10 col-sm-11 col-md-11 col-lg-11 col-xl-11"
									 type="text"
									 name="message"
									 value={message}
									 onChange={changeData}
									 placeholder="Ecrire un message" 
									 />
								</div>
								<button type='submit' className="col-2 col-sm-1 col-md-2 col-lg-2 col-xl-2"> 
									<img className="imgChat"  src={Send} />
								</button>
								</form>
							</div>
						</div>
					
		)

}

export default withRouter(ChatForm);