import React,{ useState } from 'react'
import backLink from '../Dashboard/imgs/backLink.svg'
import annonce from './ImageProf/annonce.svg'
import { Link } from 'react-router-dom'
import UploadFile from '../Dashboard/imgs/UpLoadFile.svg'
import '../../styles/SupportEtu.css'
import axios from 'axios'
import jwtdecode from 'jwt-decode'



function AnnonceAdd(props) {

   const [titre, setTitre] = useState("")
   const [desc, setDesc] = useState("")
   const [showSucess,setSucess]=useState(false)
   const [showError,setError]=useState(false)

   let data=jwtdecode(localStorage.token)
   let token= 'Bearer '+localStorage.token
   let headers={
         headers : {Authorization: token}
   } 
   

   const handleChange = e => {
      let {name,value}=e.target
      if(name== 'titre') setTitre(value)
      if(name== 'desc') setDesc(value)
   }

   const sendDATA= (e) => {
      e.preventDefault()
      console.log(data)
      let getName=data.userEmail.split('-')[0].split('.')
      let nameUser= getName[0]+" "+getName[1]
      let dataForm={
         titre,
         contenu: desc,
         module_id: props.match.params.id,
         date: new Date(),
         profName: nameUser
      }
      axios.post('http://localhost:8000/api/addAnnProf',dataForm,headers)
      .then(res => {
         if(res.data.MsgErr == 'JustForProf'){
            localStorage.removeItem('token')
            props.history.push('/notallowed')
         }
         
         if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
            localStorage.removeItem('token')
            props.history.push('/expire')
         }else if(res.data){
         
            setSucess(true)
            
         } 
      })
      .catch(err => {
         setError(true)
         console.log(err)
      }) 
   }

   return (
      <div className="row d-flex flex-column m-4 SupportAdd">
         <Link to={"/professeur/Jenseigne/Modules/DetailModule/annonceProf/"+props.match.params.id} className="p-3 svgBack">
            <img src={backLink} alt="" />
         </Link>
         <h1 className="mt-4">Ajouter une annonce</h1>
         {showSucess ?<div class="alert alert-success" role="alert">
         Votre Annonce ajouté avec succès
         </div>: null}
         {showError?<div class="alert alert-danger" role="alert">
           Il y a une error, veulliez essayer une autre fois
         </div>:null}
         <div className="d-flex flex-column flex-xl-row mt-3">
            <form className="flex-grow-1 py-4 mx-2" onSubmit={sendDATA} >
               <div className="d-flex flex-row p-2 ">
                  <input onChange={handleChange} value={titre} name="titre" type="text" className="w-100 mx-2 px-3 py-3" placeholder="Titre de l'annonce" required/>
               </div>
               <div className="d-flex flex-row p-2 ">
                  <textarea onChange={handleChange} value={desc} name="desc" type="text" rows="5" className="w-100 mx-2 px-3 py-3 " placeholder="Ajouter une description..."  required />
               </div>
               <div className="d-flex flex-md-row flex-column justify-content-around SupportAdd__footer">
                 
                  <label className="d-flex mx-auto my-2 m-md-0" for="upload btn">
                    
                  </label>
                  <button className="mx-auto my-2 m-md-0" type="submit">Enregistrer</button>
               </div>
            </form>
            <div className="SupportAdd__img m-auto">
               <img className="" src={annonce} alt="" />
            </div>
         </div>
      </div> 
   )
}

export default AnnonceAdd
