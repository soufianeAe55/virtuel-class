import React, { useState,useEffect } from 'react'
import {withRouter} from 'react-router-dom'
import settings from '../../Dashboard/imgs/settings.svg'
import AddFile from '../../Dashboard/imgs/AddFile.svg'
import SupportCard from './SupportCard'
import '../../../styles/SupportEtu.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import jwtdecode from 'jwt-decode'

function SupportMain(props) {
  

   const [modules,setModules]=useState([])
   const [semestre,setSemestre]=useState('')
   const [module,setModule]=useState('')
   let  supports=props.Supports

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

		
		axios.get('http://localhost:8000/api/getModulesForSupp',headers)
			.then(res => {
            if(res.data.MsgErr == 'JustForEtu'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
				}
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
					setModules(res.data)
				
            }
           
			})
			.catch(err => {
				console.log(err)
         })
      },[])

      const setFiltre = (e) => {

         let {name,value}= e.target
         let FiltredData=[]
        
         if(name== 'module') {
            
            setModule(value)
          
         }
      }
      const setFiltre2 = (e) => {

         let {name,value}= e.target
        
         if(name== 'semestre'){ 
            setSemestre(value)
           
         }
 
      }

      if(semestre != ''){
         let FiltredData=[]
         for (let i = 0; i < supports.length; i++) {
         
            if(supports[i].semstre==semestre){
               FiltredData.push(supports[i])
            }
         }
         supports=FiltredData
      } 
       if(module != ''){
         let FiltredData=[]
         for (let i = 0; i < supports.length; i++) {
            console.log(supports[i].module,module)
            if(supports[i].module==module){
               FiltredData.push(supports[i])
            }
         }
         supports=FiltredData
      }

     
   return (
      <div className="row d-flex flex-column">
      <div className="m-3 d-flex flex-row-reverse">
         <div className="mx-2 p-2  d-flex flex-column flex-lg-row justify-content-around">
            <Link to ='/support/supportEdit'>
               <img className="px-4 py-2" src={settings} alt="settings" />
            </Link>
            <Link to ='/support/supportAdd'>
               <img className="px-4 py-2" src={AddFile} alt="AddFile" />
            </Link>
         </div>
         <div className="row flex-grow-1 py-2 d-flex align-items-center">
            <div className="row d-flex flex-column flex-sm-row" id="Support__filtrage">
                  <p className=" text-center mx-auto my-2"> Filtrez selon un</p> 
                 
                  <select value={semestre} name="semestre" onChange={setFiltre2} className="Support__dropdown mx-auto mx-lg-2 my-2" required>
                     <option value="">semestre</option>
                     <option value="S1">S1</option>
                     <option value="S2">S2</option>
                     <option value="S3">S3</option>
                     <option value="S4">S4</option>
                     <option value="S5">S5</option>
                     <option value="S6">S6</option>
                  </select>
                  <p className=" text-center mx-auto my-2">les supports du </p> 
                  <select value={module} name="module" onChange={setFiltre} className="Support__dropdown mx-auto mx-lg-2 my-2">
                     <option value="">modules</option>
                     {modules.map((module,key) => 
                    ( <option key={key} value={module.name} >{module.name} </option>))}
                  </select>
            </div>
         </div>
      </div>
      <div className="row p-2 d-flex justify-content-center">
      {supports.length !=0?
         supports.map( (Support,key) => (
            <SupportCard key={key} Support={Support} />
         ))
      :<h2>Il n'y pas des supports pour le moment</h2>}  
      </div>
   </div>
)
}

export default withRouter(SupportMain)
