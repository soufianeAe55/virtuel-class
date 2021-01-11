import React,{useState,useEffect} from 'react'
import Valider from './Admin_Img/Valider.svg'
import {withRouter} from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import jwtdecode from 'jwt-decode';


function ModalApprouver(props) {
     
  const [titre,setTitre]=useState('')
  const [file,setFile]=useState('')
  const [fileName,setFileName]=useState('')
  const [depts,setDepts]=useState('')
  const [fils,setFils]=useState('')
  const [classe,setClasse]=useState('')
  const [contenu,setContenu]=useState('')
  const [showSucess,setSucess]=useState(false)
  const [showError,setError]=useState(false)

  

  const ChangeData=(e) => {
    let {name,value}=e.target
    if(name== 'titre') setTitre(value)
    if(name== 'contenu') setContenu(value)
    if(name== 'depts') setDepts(value)
    if(name== 'fils') setFils(value)
    if(name== 'classe') setClasse(value)
    if(name== 'file'){ 
      setFile(e.target.files[0])
      setFileName(e.target.files[0].name)
    }
    
 }
  
  let data=jwtdecode(localStorage.token)
  
  

  useEffect(() => {

     if(localStorage.token) {
        
        if(data.type != 'Admin' ){
           localStorage.removeItem('token')
              props.history.push('/')

           }

     }else{
        props.history.push('/')
     }
    

     setSucess(false)
     setError(false)

  },[])
  const sendData= (e) => {
    e.preventDefault()
    let form=new FormData()
    let token= 'Bearer '+localStorage.token
    let headers={
        headers : {Authorization: token}
   } 

    if(props.verife==="Actualite"){
      let dat=new Date()
      
      form.append('name',titre)
      form.append('contenu',contenu)
      form.append('image',fileName)
      form.append('date',dat)
      form.append('file',file)
      
    
        axios.post('http://localhost:8000/api/addActu',form,headers)
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
       }else if( props.verife== 'Etudiant' && props.mode=='approuve') {
         let dat={}
        for (let i = 0; i < props.Data3.length; i++) {
          if(props.Data3[i].id== classe){
           dat = props.Data3[i].name;
          }
        } 
       let dataSend={
         name: dat,
         id:props.Tab1.id
       }
        axios.post('http://localhost:8000/api/approuveEtu',dataSend,headers)
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
       }else if( props.verife== 'Etudiant' && props.mode=='modify') {
        let dat={}
       for (let i = 0; i < props.Data3.length; i++) {
         if(props.Data3[i].id== classe){
          dat = props.Data3[i].name;
         }
       } 
      let dataSend={
        name: dat,
        id:props.Tab1.id
      }
       axios.post('http://localhost:8000/api/modifyETu',dataSend,headers)
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
  let deptsV2= props.Data1
  let filsV2=props.Data2
  let classeV2=props.Data3

  if(depts != ''){
    let tem=[]
    
    filsV2=props.Data2
    for(let i=0; i< filsV2.length;i++){
      if(filsV2[i].idDept == depts){
        tem.push(filsV2[i])
      }
    }
    filsV2=tem
    
  }else{
    
    filsV2=[]
    classeV2=[]
  }
  if(fils != ''){
    let tem=[]
    classeV2=props.Data3
    for(let i=0; i< classeV2.length;i++){
      if(classeV2[i].idFiliere == fils){
        tem.push(classeV2[i])
      }
    }
    classeV2=tem
    
  }else{
    
    classeV2=[]
  }
    return (
        <div >
        {props.verife==="Actualite"?<p data-toggle="modal" data-target="#exampleModalCenter" className="text-right font-weight-bold text-add  mt-4">+ Nouvelle actualite</p>:
    null }
    
    


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle">{props.verife==="Actualite"?"Ajouter Actualite":props.mode=='approuve'? "Approuver l'etudiant ": 'Modifier la classe '}</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    {showSucess ?<div class="alert alert-success" role="alert">
          {props.verife==="Actualite"?" Votre actualite ajouté":null} { props.mode=='approuve'? "Etudiant approuvée ": 'La classe modifiée '} avec succès
         </div>: null}
         {showError?<div class="alert alert-danger" role="alert">
           Il y a une error, veulliez essayer une autre fois
         </div>:null}
    <div className="row mx-0  px-2"><h5 className="mx-0 my-2">Veuillez ajouter {props.verife==="Actualite"?"l'actualite ici :":"l 'étudiant a son class :"}</h5>
    <div className="col-lg-12  ">
      <form onSubmit={sendData} >
        <div className="form-group text-left ">

        <label  className="col-form-label font-weight-bold">{props.Tab2.champ1}</label>
        {props.verife==="Actualite"?<input name='titre' value={titre} onChange={ChangeData} type="text" className="form-control w-75" id="recipient-name_ed3" required  /> :
              
           <select className="Support__dropdown_depart my-2 " name='depts' value={depts} onChange={ChangeData} required >
              <option value='' >{props.Tab2.champ1}</option>
              { deptsV2.map(optio =>(<option key={optio.id} value={optio.id}>{optio.name}</option>))}
              </select>}
      
    </div>
          { props.verife==="Etudiant" ?
                <div className="form-group text-left mx-3">
                  <label  className="col-form-label">{props.Tab2.champ2} </label>
              
                  <select className="Support__dropdown_depart my-2 " name='fils' value={fils} onChange={ChangeData} required>
                    <option value="" > { props.verife==="Etudiant" ? props.Tab2.champ2:props.Tab1.Date}</option>
                    {filsV2.map(optio =>(<option key={optio.id} value={optio.id}>{optio.name}</option>))}
                  </select>
              </div>  :null}

               <div className="form-group text-left mx-3">
               { props.verife==="Etudiant" ? <label  className="col-form-label">{props.Tab2.champ3} :</label>: null}
            { props.verife==="Etudiant" ? <div className="form-group text-left ">  
            <select className="Support__dropdown_depart my-2 "  name='classe' value={classe} onChange={ChangeData} required >
            <option value='' >{props.Tab2.champ3}</option>
            { classeV2.map(optio =>(<option key={optio.id} value={optio.id}>{optio.name}</option>))}
         </select> </div>: <div className="form-group text-left mx-2">   <label  className="col-form-label font-weight-bold">{props.Tab2.champ3}</label><textarea name='contenu' value={contenu} onChange={ChangeData} className="form-control w-75" id="recipient-name_ed3" required> </textarea> </div>}
         </div>
         
         {props.verife==="Actualite"? <div className="form-group text-left ">
      
      <label  className="col-form-label font-weight-bold">Image</label>
     <input name='file'  onChange={ChangeData} type="file" className="form-control w-75" id="recipient-name_ed3" required  /> 
     </div>:null}

     <div className="modal-footer">
      <button type="submit" className="btn btn-primary" >{props.verife==="Actualite"?"Ajouter":"Approuver"}</button>
    </div>
             
    </form>
  </div>
</div>
    
    </div>
    
  </div>
</div>
</div></div>
    )
}

export default withRouter(ModalApprouver)
