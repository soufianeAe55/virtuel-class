import axios from 'axios'
import jwtdecode from 'jwt-decode'
import React, { useState,useEffect } from 'react'
import UploadFile from '../Dashboard/imgs/UpLoadFile.svg'


function ModalEditAnnonce(props) {
   const [titre, setTitre] = useState("")
   const [desc, setDesc] = useState("")
   const [showSucess,setSucess]=useState(false)
   const [showError,setError]=useState(false)
  

   let data=jwtdecode(localStorage.token)
   let token= 'Bearer '+localStorage.token
   let headers={
         headers : {Authorization: token}
   } 
   
   useEffect(() => {
      setSucess(false)
      setError(false)
      
      
   },[props.data])

   const handleChange = e => {
      let {name,value}=e.target
      if(name== 'titre') setTitre(value)
      if(name== 'desc') setDesc(value)
   }

   const sendDATA= (e) => {
      e.preventDefault()
      console.log(props.data)
      let getName=data.userEmail.split('-')[0].split('.')
      let nameUser= getName[0]+" "+getName[1]
      let dataForm={
         titre,
         contenu: desc,
         ann_id: props.data.id,
      }
      axios.put('http://localhost:8000/api/updateAnnProf',dataForm,headers)
      .then(res => {
         if(res.data.MsgErr == 'JustForProf'){
            localStorage.removeItem('token')
            props.history.push('/notallowed')
         }
         
         if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
            localStorage.removeItem('token')
            props.history.push('/expire')
         }else if(res.data){
            setDesc('')
            setTitre('')
            setSucess(true)
            
         } 
      })
      .catch(err => {
         setError(true)
         console.log(err)
      })
   }
  
   return (
         <div className="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
               {showSucess ?<div class="alert alert-success" role="alert">
                   Votre Annonce ajouté avec succès
                   </div>: null}
               {showError?<div class="alert alert-danger" role="alert">
              Il y a une error, veulliez essayer une autre fois
                </div>:null}
               <form className="modal-content" onSubmit={sendDATA}>
                  <div className="modal-header">
                  <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">Modifier une annonce</h4>
                  
                  </div>
                  <div className="modal-body  ModalEditSupport">
                     <div className="d-flex flex-row p-2 ">
                        <input  onChange={handleChange} value={titre} name="titre" type="text" className="w-100 mx-2 px-3 py-3 " placeholder="Nouveau Titre de l'annonce" required/>
                     </div>
                     <div className="d-flex flex-row p-2 ">
                        <textarea onChange={handleChange} value={desc} name="desc" type="text" className="w-100 mx-2 px-3 py-3 " placeholder="Ajouter une nouvelle discription" required/>
                     </div>
                  </div>
                  <div className="modal-footer d-flex flex-row justify-content-around ModalEditSupport__footer">
                    
                     <label className="d-flex" for="upload btn">
                        
                     </label>
                     <button type="submit">Enregistrer</button>
                  </div>
               </form>
            </div>
         </div>
   )
}

export default ModalEditAnnonce
