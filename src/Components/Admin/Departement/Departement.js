import React, { useState,useEffect } from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import {Route, Switch} from "react-router-dom"
// import '../../../styles/SupportEtu.css'
import DepartementMain from './DepartementMain'
import jwtdecode from 'jwt-decode'
import axios from 'axios'


function Departement(props) {
   const [departement,setDepts] = useState([])
   const [Filiere,setFils] = useState([])
   const [Classes,setClasses] = useState([]) 
   const [Module,setMods] = useState([]) 
   const [Etudiants,setEtus] = useState([]) 
   const [Professeurs,setProfs] = useState([])
    
   let data=jwtdecode(localStorage.token)
   let token= 'Bearer '+localStorage.token
   let headers={
         headers : {Authorization: token}
   } 


   useEffect(() => {

   if(localStorage.token) {
      
      if(data.type != 'Admin' ){
         localStorage.removeItem('token')
            props.history.push('/')

         }

   }else{
      props.history.push('/')
   }

   axios.get('http://localhost:8000/api/getDepts',headers)
      .then(res => {
         if(res.data.MsgErr == 'JustForAdmin'){
            localStorage.removeItem('token')
            props.history.push('/notallowed')
         }
         
         if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
            localStorage.removeItem('token')
            props.history.push('/expire')
         }else if(res.data){
             console.log(res.data)
               setDepts(res.data[0])
               setFils(res.data[1])
               setClasses(res.data[2])
               setMods(res.data[3])
               setEtus(res.data[4])
               setProfs(res.data[5])
         } 
      })
      .catch(err => {
         console.log(err)
      })

 

},[departement])
   
   return(
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <Switch>
               <Route exact path="/depart"> 
                  <DepartementMain Professeurs={Professeurs} Etudiants={Etudiants} departement={departement} Filiere={Filiere} Classes={Classes} Module={Module}/>
               </Route>
             
              
            </Switch>
         </div>
      </React.Fragment>
   )
}
export default Departement
