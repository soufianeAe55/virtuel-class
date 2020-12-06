import React, { useState,useEffect } from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import { Route, Switch} from "react-router-dom"
import Actu1 from './actu_comp/Actu1'
import Actu from './actu_comp/Actu'
import axios from 'axios'
import jwtDecode from 'jwt-decode'



function Actualites(props) { 
    const [posts, setposts] = useState([]);

    useEffect(() => {
       
      let data=jwtDecode(localStorage.token)
      if( data.class == null){
			props.history.push('/approuvee')
		}
    
     let token= 'Bearer '+localStorage.token
     let headers={
           headers : {Authorization: token}
     }
     
     axios.get('http://localhost:8000/api/getActus',headers)
    .then(res => {
       
        if(res.data.MsgErr == 'TokenExpiredError'){
            localStorage.removeItem('token')
            props.history.push('/expire')
        }else if(res.data){
            let actus=[]
            for(let i=0;i<res.data.payloads.length;i++){
                actus.push(res.data.payloads[i].data)
            }
           setposts(actus)
        }
        
        /*else if(res.data.MsgErr == 'JustForEtu'){
            localStorage.removeItem('token')
            props.history.push('/notallowed')
        }*/


      })
    .catch(err => {
          console.log(err)
         })  
     
     }, []);
 
   return(
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <Switch>
               <Route exact path="/acts"> 
                  <Actu1 posts={posts}/>
               </Route>
               <Route path ='/acts/acts1' component={Actu}/>         
            </Switch>
         </div>
      </React.Fragment>
   )
}
export default Actualites
