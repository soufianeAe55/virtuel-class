import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import backLink from '../Dashboard/imgs/backLink.svg' 
import DevoirsX from '../Etudiant/ImageEtd/Group 53.svg'
import clock from './ImageProf/clock.svg'
import File from '../Etudiant/ImageEtd/File.svg'
import Avatar from '../Dashboard/imgs/Avatar.svg'
import Pen from '../Dashboard/imgs/Pen.svg'
import Delete from '../Dashboard/imgs/delete.svg'
import ModalDeleteDevoir from './ModalDeleteDevoir'
import ModalEditDevoir from './ModalEditDevoir'
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import moment from 'moment'


function DevoirProfListEtd(props) {

   const [devoir, setDevoir] = useState({})
   const [devoirReponses, setDevoirReponses] = useState([])

   let data=jwtdecode(localStorage.token)
   let token= 'Bearer '+localStorage.token
	let headers={
			headers : {Authorization: token}
   } 
   

   useEffect(() => {

      if(localStorage.token) {
           
         if(data.type != 'Professeur' ){
            localStorage.removeItem('token')
               props.history.push('/')

            }
            
         if(data.class == null){
               props.history.push('/approuvee')
            }

		  }else{
			 props.history.push('/')
        }
        
        axios.get('http://localhost:8000/api/getDevoirForProf/'+props.match.params.id,headers)
			.then(res => {
				if(res.data.MsgErr == 'JustForProf'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
            }
            
				if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
               console.log(res.data)
               setDevoir(res.data[0])
            
				} 
			})
			.catch(err => {
				console.log(err)
         })
         
         axios.get('http://localhost:8000/api/getDevoirReponses/'+props.match.params.id,headers)
			.then(res => {
				if(res.data.MsgErr == 'JustForProf'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
            }
            
				if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
              console.log(res.data)
              setDevoirReponses(res.data)
               
				} 
			})
			.catch(err => {
				console.log(err)
			})

   },[])

   return (

      <React.Fragment>

      <div className="row cont">
         <div className="row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerDevoir" >
            <Link to={"/professeur/Jenseigne/Modules/DetailModule/devoirprof/"+devoir.id_module} className="col-12 col-md-2 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
               <div className="row col-12 col-lg-10">
                  <div className="row">
                     <img src={DevoirsX} className="devoirIcon mx-auto mx-md-0" alt=""/> 
                     <h1 className="devoirTitle text-center">{devoir.name}</h1>
                  </div>
                  <div className="row mx-auto ml-md-auto my-auto">
                     <img src={clock} alt="" />
                     <p className="my-auto mx-2" >Date limite : {moment(devoir.date).format('DD MMM h:mm a')}</p>              
                  </div>
                  <div className="col-1 d-flex mx-auto my-auto SupportRow__EditImages">
                     <img data-toggle="modal" data-target="#EditModal"  src={Pen} alt="" />
                     <img data-toggle="modal" data-target="#DeleteModal" src={Delete} alt="" />
               </div>
               </div>
            </div>
         </div>
      
      <div className="row justify-content-center cont tableDevoirEtd">
         <table className="table col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10 bg-white">
            <thead>
               <tr >
                  <th scope="col"></th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prenom</th>
                  <th scope="col">Fichier</th>
                  <th scope="col" className="row">Date de depot</th>
               </tr>
            </thead>
            <tbody>
               {devoirReponses.length > 0? devoirReponses.map((response,key) => (
                <tr>
                  <th scope="row"><img alt="" src={Avatar} /></th>
                  <td>{response.emailEtu.split('-')[0].split('.')[1]}</td>
                  <td>{response.emailEtu.split('-')[0].split('.')[0]}</td>
                  <td ><a className="devoirName" href={"http://localhost:8000/devoirs/"+moment(response.date).format('DD-MM-YYYY')+"_"+response.fileName} > <img src={File} alt="" /> {response.fileName}</a> </td>
                  <td className={moment(devoir.date) >= moment(response.date)? "greenDate": "redDate"}>{moment(response.date).format('DD MMM YYYY h:mm a')}</td>
               </tr>
               )):<h3>il n ya pas des reponses</h3>}
              
            </tbody>
         </table> 
      </div>

      <ModalDeleteDevoir devoir={devoir} />
      <ModalEditDevoir devoir={devoir} />

      </React.Fragment>
   )
}

export default DevoirProfListEtd
