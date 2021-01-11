import React,{useState,useEffect} from 'react'
import Editer from './Admin_Img/Editer.svg'
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import jwtdecode from 'jwt-decode';

function ModalEdit(props) {
  
  const [titre,setTitre]=useState()
  const [contenu,setContenu]=useState('')
  const [showSucess,setSucess]=useState(false)
  const [showError,setError]=useState(false)
  
 
  const ChangeData=(e) => {
    let {name,value}=e.target
   
    if(name== 'titre') {
      console.log(props.Tab1)
      setTitre(value)}
    if(name== 'contenu') setContenu(value)
 }
  
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
    
     
   

  },[props.Tab2])

  const sendData= (e) => {
    e.preventDefault()
    let form=new FormData()
    if(props.verife==="Actualite"){
        
        let formAct={
          id: props.Tab1.id,
          titre,contenu
        }
 
        axios.put('http://localhost:8000/api/updateActu',formAct,headers)
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
              setContenu('')
              setTitre('')
            } 
         })
         .catch(err => {
          setSucess(false)
          setError(true)
            console.log(err)
         })
       }else {
         
       }
  }

    return (
     <div >
     
        
      <div className="modal fade" id="examp" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modifier {props.verife==="Actualite"?"l'actualite":"un Etudiant"}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
        <div className="modal-body">
        {showSucess ?<div class="alert alert-success" role="alert">
         Votre Actualite mise a jour avec succès
         </div>: null}
         {showError?<div class="alert alert-danger" role="alert">
           Il y a une error, veulliez essayer une autre fois
         </div>:null}
          <div className="row mx-0  px-2"> 
            <h5 className="mx-0 my-2">vous pouvez Modifier {props.verife==="Actualite"?"l'actualite":"la class de  l 'étudiant "}  :</h5>
            <div className="col-lg-12  ">
              <form onSubmit={sendData} >

                <div className="form-group text-left mx-3 my-2">
                <label  className="col-form-label font-weight-bold">{props.Tab2.champ1}</label>
            {props.verife==="Actualite"?<input name='titre' value={titre} onChange={ChangeData} type="text" className="form-control w-75" id="recipient-name_ed3" required  /> :
              <select className="Support__dropdown_depart my-2 " required >
              <option value={props.Tab2.champ1} >{props.Tab2.champ1}</option>
              { props.Data.map(optio =>(<option key={optio.id} value={props.verife==="Actualite"?optio.name:optio.Nom}>{props.verife==="Actualite"?optio.Name:optio.Nom}</option>))}
              </select>}
            
                </div>
                { props.verife==="Etudiant" ?
                <div className="form-group text-left mx-3">
                  <label  className="col-form-label">{props.Tab2.champ2} :</label>
                  <select className="Support__dropdown_depart my-2 "  required>
                    <option value="intialise1" > { props.verife==="Etudiant" ? props.Tab1.Filiere:props.Tab1.Date}</option>
                    {props.Data.map(optio =>(<option key={optio.id} value={props.verife==="Actualite"?optio.Date:optio.Filiere}>{props.verife==="Actualite"?optio.Date:optio.Filiere}</option>))}
                  </select>
                </div>:null}

                <div className="form-group text-left mx-3">
                  <label  className="col-form-label">{props.Tab2.champ3} :</label>
                  {props.verife==="Etudiant" ?  
                    <select className="Support__dropdown_depart my-2 "  required>
                    <option value="intialise1" > { props.Tab1.Classe}</option>
                    {props.Data.map(optio =>(<option key={optio.id} value={optio.Classe}>{optio.Classe}</option>))}
                    </select>
                    :<textarea name='contenu' value={contenu} onChange={ChangeData} className="form-control w-75" id="recipient-name_ed3" required> </textarea>}
                </div>
              
                <div className="modal-footer">
                <button type="submit" className="btn btn-primary" >Modifier</button>
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

export default withRouter(ModalEdit)
