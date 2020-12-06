import React,{ useState,useEffect } from 'react'
import backLink from '../../Dashboard/imgs/backLink.svg'
import AddSupport from '../../Dashboard/imgs/AddSupport.svg'
import { Link } from 'react-router-dom'
import UploadFile from '../../Dashboard/imgs/UpLoadFile.svg'
import '../../../styles/SupportEtu.css'
import axios from 'axios'
import jwtdecode from 'jwt-decode'



function SupportAdd(props) {
   const [fileName, setfileName] = useState("Choisir un fichier")
   const [file,setFile]=useState('')
   const [semstre,setSemstre]=useState('')
   const [module,setModule]=useState('')
   const [titre,setTitre]=useState('')
   const [contenu,setContenu]=useState('')
   const [modules,setModules]=useState([])
   const [showSucess,setSucess]=useState(false)
   const [showError,setError]=useState(false)

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
     if(name== 'file') {
         setFile(e.target.files[0])
         setfileName(e.target.files[0].name);
      }
   }

   const sendData = (e) => {
      e.preventDefault()
      let user=jwtdecode(localStorage.token)

      let form;
      if(file != ''){
         form=new FormData()
         form.append('file',file)
         form.append('semstre',semstre)
         form.append('module',module)
         form.append('titre',titre)
         form.append('contenu',contenu)
         form.append('fileName',fileName)
         form.append('date',new Date())
         form.append('userEmail',user.userEmail)
         form.append('class',user.class)
         console.log('testt')
      }else{
         form={
            fileName: '',
            semstre,
            module,
            titre,
            contenu,
            date : new Date(),
            userEmail: user.userEmail,
            class: user.class
         }
      }
      axios.post('http://localhost:8000/api/addSupport',form,headers)
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
               setfileName("Choisir un fichier");
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
      <div className="row d-flex flex-column m-4 SupportAdd">
         <Link to="/support" className="p-3 svgBack">
            <img src={backLink} alt="" />
         </Link>
         <h1 className="mt-4">Ajouter un support</h1>
         {showSucess ?<div class="alert alert-success" role="alert">
         Votre Support ajouté avec succès
         </div>: null}
         {showError?<div class="alert alert-danger" role="alert">
           Il y a une error, veulliez essayer une autre fois
         </div>:null}
         <div className="d-flex flex-column flex-xl-row mt-3">
            <form className="flex-grow-1 py-4 mx-2" onSubmit={sendData}>
               <div className="d-flex flex-column flex-md-row p-2 justify-content-around" >
                  <select onChange={handleChange} value={semstre} name='semstre' className="w-100 mx-auto my-1 w-md-50 mx-md-4 SupportAdd__dropdown" required>
                     <option value="">Semestre</option>
                     <option value="S1">S1</option>
                     <option value="S2">S2</option>
                     <option value="S3">S3</option>
                     <option value="S4">S4</option>
                  </select>
                  <select onChange={handleChange} value={module} name='module' className="w-100 mx-auto my-1 w-md-50 mx-md-4 SupportAdd__dropdown" required>
                     <option value="">Modules</option>
                    {modules.map((module,key) => 
                    ( <option key={key} value={module.name} >{module.name} </option>))}
                  </select>
               </div>
               <div className="d-flex flex-row p-2 ">
                  <input onChange={handleChange} value={titre} name='titre' type="text" className="w-100 mx-2 px-3 py-3" placeholder="Nouveau Titre du support" required />
               </div>
               <div className="d-flex flex-row p-2 ">
                  <textarea onChange={handleChange} value={contenu} name='contenu'  type="text" rows="5" className="w-100 mx-2 px-3 py-3 " placeholder="Ajouter une nouvelle discription" required />
               </div>
               <div className="d-flex flex-md-row flex-column justify-content-around SupportAdd__footer">
                  <input onChange={handleChange} name='file' type="file" id="upload btn" hidden/>
                  <label className="d-flex mx-auto my-2 m-md-0" for="upload btn">
                     <img src={UploadFile} alt="" />
                     <p id="file-chosen"> { fileName }  </p>
                  </label>
                  <button className="mx-auto my-2 m-md-0" type="submit">Enregistrer</button>
               </div>
            </form>
            <div className="SupportAdd__img m-auto">
               <img className="" src={AddSupport} alt="" style={{opacity: "0.7"}} />
            </div>
         </div>
      </div> 
   )
}

export default SupportAdd
