import React, { useState, useEffect } from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import {Route, Switch} from "react-router-dom"
import SupportEdit from './SupportEdit'
import RespoSupportEdit from './RespoSupportEdit'
import SupportMain from './SupportMain'
import SupportAdd from './SupportAdd'
import SupportDisplay from './SupportDisplay'
import '../../../styles/SupportEtu.css'
import axios from 'axios'
import jwtdecode from 'jwt-decode'



function Support(props) { 
   const [etudientType] = useState("respo");

   const [Supports, setSupports] = useState([])

   let token= 'Bearer '+localStorage.token
		let headers={
			headers : {Authorization: token}
		} 
   useEffect(() => {
	
		if(localStorage.token) {
			let data = jwtdecode(localStorage.token)
		 if(!data.type == 'Etudiant'){
				props.history.push('/')
			}else if( data.class == null){

				props.history.push('/approuvee')
			}
		  }else{
			props.history.push('/')
		  }

		
		axios.get('http://localhost:8000/api/getSupports',headers)
			.then(res => {
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
					setSupports(res.data)
				
				}else if(res.data.MsgErr == 'JustForEtu'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
				}
			})
			.catch(err => {
				console.log(err)
         })
      })

   return(
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <Switch>
               <Route exact path="/support"> 
                  <SupportMain Supports={Supports} />
               </Route>
               <Route path="/support/supportEdit">
                  {
                     ( etudientType === "etudient") ?
                     <SupportEdit Supports={Supports} />
                     : <RespoSupportEdit Supports={Supports} />
                  }
               </Route>
               <Route path="/support/supportAdd" component={SupportAdd}/>
               <Route path="/support/supportDisplay" component={SupportDisplay} />
            </Switch>
         </div>
      </React.Fragment>
   )
}
export default Support
