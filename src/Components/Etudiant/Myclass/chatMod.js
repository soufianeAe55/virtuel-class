import React , {useState,useEffect} from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import '../../../styles/homeEtu.css'
import '../../../styles/Chat.css'
import ChatModule from '../../Chat/Chat'
import axios from 'axios'


function Chat(props){

	const [module,setModule]=useState([])
	const [users,setUsers]=useState([])

	useEffect(() => {
			 
		let token= 'Bearer '+localStorage.token
		let headers={
			headers : {Authorization: token}
		} 
		axios.get('http://localhost:8000/api/getModuleForChat/'+ props.match.params.id,headers)
		.then(res => {
		  
			if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
			  localStorage.removeItem('token')
			  props.history.push('/expire')
		   }else if(res.data){
			setModule(res.data)
			 
		   } 
		})
		.catch(err => {
		   console.log(err)
		})
		
		axios.get('http://localhost:8000/api/getUsersForChat/'+ props.match.params.id,headers)
		.then(res => {
		  
			if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
			  localStorage.removeItem('token')
			  props.history.push('/expire')
		   }else if(res.data){
			   console.log(res.data)
			setUsers(res.data)
			 
		   } 
		})
		.catch(err => {
		   console.log(err)
		})
	
	
	},[])
	
	return(
		 <React.Fragment>
			<SideNav />
			<div className="sous-app" >
				<Menu />
				<div className="row cont contV2">
					<ChatModule  Mode={'forModule'} users={users} module={module} idMod={props.match.params.id} />
				</div>
			</div>
		
		</React.Fragment>
		)
}

export default Chat