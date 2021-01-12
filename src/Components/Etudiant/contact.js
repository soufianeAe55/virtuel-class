import React , {useState,useEffect} from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/homeEtu.css'
import '../../styles/Chat.css'
import Chat from '../Chat/Chat'
import axios from 'axios'
import jwtdecode from 'jwt-decode'



function Contact(props){
	const [module,setModule]=useState([])
	const [users,setUsers]=useState([])

	useEffect(() => {
			 
		let token= 'Bearer '+localStorage.token
		let headers={
			headers : {Authorization: token}
		} 
        let data=jwtdecode(localStorage.token)
	
		axios.get('http://localhost:8000/api/getUsersForChatOneToOne/'+data.userEmail,headers)
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
					<Chat Mode={'forContact'} users={users} module={[]} idMod={1} />
				</div>
			</div>
		
		</React.Fragment>
		)
}

export default Contact