import React ,{useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import moment from 'moment'

function ModalDeleteDevoir(props) {
   const [showSucess,setSucess]=useState(false)
   const [showError,setError]=useState(false)

   let token= 'Bearer '+localStorage.token
   let headers={
      headers : {Authorization: token}
   } 
   
   useEffect(() => {
      setSucess(false)
      setError(false)   
      
   },[props.data])

   const DeleteDev = (e) => {

      axios.post('http://localhost:8000/api/deleteDev',props.devoir,headers)
      .then(res => {
         if(res.data.MsgErr == 'TokenExpiredError'){
            localStorage.removeItem('token')
            props.history.push('/expire')
         }else if(res.data){
           setSucess(true)
         
         }else if(res.data.MsgErr == 'JustForEtu'){
            localStorage.removeItem('token')
            props.history.push('/notallowed')
         }
      })
      .catch(err => {
         setError(true)
         console.log(err)
      })
   
   }

   return (
      <div className="modal fade" id="DeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
               <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">
               Confirmer la suppression
               </h4>
               </div>
               <div className="modal-body">
               {showSucess ?<div class="alert alert-success" role="alert">
               Votre Devoir ete supprimee avec succès
               </div>: null}
               {showError?<div class="alert alert-danger" role="alert">
               Il y a une error, veulliez essayer une autre fois
               </div>:null}
                  <h4 className="text-danger text-center my-4 mx-2">
                  Voulez vous supprimer ce Devoir de façon permanente ?
                  </h4>
               </div>
               <div className="modal-footer d-flex flex-row justify-content-around">
                  <button onClick={DeleteDev} type="button" className="ModalDeleteSupport__btnSupprimer" >Supprimer</button>
                  <button type="button" className="ModalDeleteSupport__btnAnnuler" data-dismiss="modal">
                  Annuler</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default withRouter(ModalDeleteDevoir)
