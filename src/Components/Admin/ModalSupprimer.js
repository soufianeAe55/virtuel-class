import React, {useState,useEffect} from 'react'
import Supprimer from './Admin_Img/Supprimer.svg'
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import {withRouter} from 'react-router-dom'


function ModalSupprimer(props) {

 
  const [showSucess,setSucess]=useState(false)
  const [showError,setError]=useState(false)
 
  
  
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
    
     
   

  },[])
  const sendData= (e) => {
    e.preventDefault()
    if(props.verife==="Actualite"){
      console.log(props.Tab1)
    let formData={
      id:props.Tab1.id,
      image: props.Tab1.data.image,
      date: props.Tab1.data.date
    }
        axios.post('http://localhost:8000/api/deleteActu',formData,headers)
         .then(res => {
            if(res.data.MsgErr == 'JustForAdmin'){
               localStorage.removeItem('token')
               props.history.push('/notallowed')
            }
            
            if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
               localStorage.removeItem('token')
               props.history.push('/expire')
            }else if(res.data){
              setSucess(true)
              setError(false)
            } 
         })
         .catch(err => {
          setSucess(false)
          setError(true)
            console.log(err)
         })
       }else if(props.verife==="Etudiant"){
        console.log(props.Tab1)
      let formData={
        id:props.Tab1.id,
      }
          axios.post('http://localhost:8000/api/deleteEtu',formData,headers)
           .then(res => {
              if(res.data.MsgErr == 'JustForAdmin'){
                 localStorage.removeItem('token')
                 props.history.push('/notallowed')
              }
              
              if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
                 localStorage.removeItem('token')
                 props.history.push('/expire')
              }else if(res.data){
                setSucess(true)
                setError(false)
              } 
           })
           .catch(err => {
            setSucess(false)
            setError(true)
              console.log(err)
           })
         }
  }

    return (
<div>



<div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    {showSucess ?<div class="alert alert-success" role="alert">
         Votre Actualite supprimer avec succès
         </div>: null}
         {showError?<div class="alert alert-danger" role="alert">
           Il y a une error, veulliez essayer une autre fois
         </div>:null}
    <p>Est ce que vous voulez supprimer {props.verife==="Professeur"? "ce" : "cet"} {props.verife} ?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn2" onClick={sendData} >Supprimer</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
    </div>
  </div>
</div>
</div></div>

        
    )
}

export default withRouter(ModalSupprimer)
