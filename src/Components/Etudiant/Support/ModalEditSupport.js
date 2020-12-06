import React,{useState,useEffect} from 'react'
import UploadFile from '../../Dashboard/imgs/UpLoadFile.svg'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import jwtdecode from 'jwt-decode'


function ModalEditSupport(props) {
   
   const [file,setFile]=useState('')
   const [semstre,setSemstre]=useState('')
   const [module,setModule]=useState('')
   const [titre,setTitre]=useState('')
   const [contenu,setContenu]=useState('')
   const [modules,setModules]=useState([])
   const [showSucess,setSucess]=useState(false)
   const [showError,setError]=useState(false)
  
   useEffect(() => {
      setTitre(props.support.titre)
      setSemstre(props.support.semstre)
      setModule(props.support.module)
      setContenu(props.support.contenu)
      setSucess(false)
      
   },[props.support])
   let DisplayfileName=props.support.fileName

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
               if(res.data.MsgErr == 'TokenExpiredError'){
                  localStorage.removeItem('token')
                  props.history.push('/expire')
               }else if(res.data){
                  setModules(res.data)
               
               }else if(res.data.MsgErr == 'JustForEtu'){
                  localStorage.removeItem('token')
                  props.history.push('/notallowed')
               }
            })
            .catch(err => {
               console.log(err)
            })
         },[])
   
   const handleChange = e => {
     
      let {name,value}=e.target
    
      if(name== 'semstre') setSemstre(value)
      if(name== 'module') setModule(value)
      if(name== 'titre') setTitre(value)
      if(name== 'contenu') setContenu(value)
      
   }
   const updateSupport = (e) => {
      e.preventDefault()
      let user=jwtdecode(localStorage.token)

      let form;
      
         form={
            semstre,
            module,
            titre,
            contenu,
            idSupport: props.support.id
         }
      
      axios.put('http://localhost:8000/api/UpdateSupport',form,headers)
			.then(res => {
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
               setSucess(true)
               setSemstre('')
               setModule('')
               setTitre('')
               setContenu('')
                setFile('')
				
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
   <div className="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
      {showSucess ?<div class="alert alert-success" role="alert">
         Votre Support a mise a jour avec succès
         </div>: null}
         {showError?<div class="alert alert-danger" role="alert">
           Il y a une error, veulliez essayer une autre fois
         </div>:null}
         <form className="modal-content" onSubmit={updateSupport}>
            <div className="modal-header">
            <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">Modifier un support</h4>
           
            </div>
            <div className="modal-body  ModalEditSupport">
               <div className="d-flex flex-row py-2 justify-content-around ">
                  <select onChange={handleChange} value={semstre} name='semstre' className="col-5 py-3  " required>
                     <option value="Semestre">Semestre</option>
                     <option value="S1">S1</option>
                     <option value="S2">S2</option>
                     <option value="S3">S3</option>
                     <option value="S4">S4</option>
                     <option value="S3">S3</option>
                     <option value="S4">S4</option>
                  </select>
                  <select onChange={handleChange} value={module} name='module' className="col-5 py-3 " required>
                     <option value="Modules">Modules</option>
                     {modules.map((module,key) => 
                    ( <option key={key} value={module.name} >{module.name} </option>))}
                  </select>

               </div>
               <div className="d-flex flex-row p-2 ">
                  <input onChange={handleChange} value={titre} name='titre' type="text"  className="w-100 mx-2 px-3 py-3 " placeholder="Nouveau Titre du support" required />
               </div>
               <div className="d-flex flex-row p-2 ">
                  <textarea onChange={handleChange} value={contenu} name='contenu' type="text" className="w-100 mx-2 px-3 py-3 " placeholder="Ajouter une nouvelle discription" required />
               </div>
            </div>
            <div className="modal-footer d-flex flex-row justify-content-around ModalEditSupport__footer">
               
               <label className="d-flex" forhtml="upload btn">
                  <img src={UploadFile} alt="" />
                  <p id="file-chosen"> { DisplayfileName }  </p>
               </label>
               <button type="submit">Enregistrer</button>
            </div>
         </form>
      </div>
   </div>
)
}

export default withRouter(ModalEditSupport)
