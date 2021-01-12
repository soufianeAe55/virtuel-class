import React,{useState,useEffect} from 'react'
import Valider from '../Admin_Img/Valider.svg'
import jwtdecode from 'jwt-decode'
import axios from 'axios'


function ModalApprouverProf(props) {
 
  const [depts,setDepts]=useState('')
  const [fils,setFils]=useState('')
  const [classe,setClasse]=useState('')
  const [module,setModule]=useState('')
  const [showSucess,setSucess]=useState(false)
  const [showError,setError]=useState(false)
  let deptsV2= props.Data0
  let filsV2=props.Data1
  let classeV2=props.Data2
  let moduleV2=props.Data3
  let data=jwtdecode(localStorage.token)

  const ChangeData=(e) => {
    let {name,value}=e.target
    if(name== 'depts') setDepts(value)
    if(name== 'fils') setFils(value)
    if(name== 'classe') setClasse(value)
    if(name== 'module') setModule(value)
    
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
   
    setDepts('')
    setFils('')
    setClasse('')
    setModule('')
    setSucess(false)
    setError(false)

 },[])

 const sendData= (e) => {
  e.preventDefault()
  let form
  let token= 'Bearer '+localStorage.token
  let headers={
      headers : {Authorization: token}
      } 
   
    let tem
   for (let i = 0; i < props.Data1.length; i++) {
      if(props.Data1[i].id == fils){
        tem=props.Data1[i]
      }
     
   }
   let tem1
   for (let i = 0; i < props.Data2.length; i++) {
      if(props.Data2[i].name == classe){
        tem1=props.Data2[i]
      }
     
   }

  form={
    id: props.Tab1.id,
    email: props.Tab1.email,
    idDept: depts,
    idFil: tem.id,
    nameFil:tem.alias,
    nameClass: tem1.name,
    idClasse: tem1.id,
    idFilClasse: tem1.idFiliere,
    idMod: module
  }
      axios.post('http://localhost:8000/api/approuveProf',form,headers)
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
            setDepts('')
            setFils('')
            setClasse('')
            setModule('')
          } 
       })
       .catch(err => {
        setSucess(false)
        setError(true)
          console.log(err)
       })
     
     
}

  if(depts != ''){
    let tem=[]
    
    filsV2=props.Data1
    for(let i=0; i< filsV2.length;i++){
      if(filsV2[i].idDept == depts){
        tem.push(filsV2[i])   
      }
    }
    filsV2=tem
    
  }else{
    
    filsV2=[]
    classeV2=[]
    moduleV2=[]
  }
  if(fils != ''){
    let tem=[]
    classeV2=props.Data2
    for(let i=0; i< classeV2.length;i++){
      if(classeV2[i].idFiliere == fils){
        tem.push(classeV2[i])
      }
    }
    if(depts == '' && fils== ''){
      classeV2=[]
    }else{
      classeV2=tem
    }
   
    
  }else{
    
    classeV2=[]
    moduleV2=[]
  }

  if(classe != ''){
    let tem=[]
    moduleV2=props.Data3
    for(let i=0; i< moduleV2.length;i++){
      if(moduleV2[i].className == classe){
        tem.push(moduleV2[i])
      }
    }
    if(depts == ''){
      moduleV2=[]
    }else{
      moduleV2=tem
    }
    
    
  }else{
    
    moduleV2=[]
  }

    return (
<div >
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle">Approuver un professeur</h5>
      <button onClick={(e) => {
        setDepts('')
        setFils('')
        setClasse('')
        setModule('')
      }} type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <div className="row mx-0  px-2 ">
    <div className=""><h5 className="mx-0 my-2 " >Veuillez ajouter le professeur à ses classes</h5>
    <p className="text-danger w-100 textapp">** Si il est plusieurs class vous pouvez approuver plusieur fois !</p></div>
    
    <div className="col-lg-12  ">
    {showSucess ?<div class="alert alert-success" role="alert">
          Le professeur ete approuvee avec succès
         </div>: null}
         {showError?<div class="alert alert-danger" role="alert">
           Il y a une error, veulliez essayer une autre fois
         </div>:null}
      <form onSubmit={sendData} >
           <div className="form-group text-left mx-0">
          
            <select name='depts' value={depts} onChange={ChangeData} className="Support__dropdown_depart_2 my-2 " required >
                    <option value='' selected>Departement</option>
                    {deptsV2.map(optio =>(<option key={optio.id} value={optio.id}>{optio.name}</option>))}
                  </select>
          </div>

          <div className="form-group text-left mx-0">
          <select name='fils' value={fils} onChange={ChangeData} className="Support__dropdown_depart_2 my-2 " required >
          <option value='' selected>Filiere</option>
          {filsV2.map(optio =>(<option key={optio.id} value={optio.id}>{optio.name}</option>))}
        </select>
          </div>
         

        <div className="form-group text-left mx-0">
            
            <select name='classe' value={classe} onChange={ChangeData} className="Support__dropdown_depart_2 my-2 " required >
            <option value='' selected> Classe</option>
            {classeV2.map(optio =>(<option key={optio.id} value={optio.name}>{optio.name}</option>))}
          </select>
          </div>


          <div className="form-group text-left mx-0">
         
          <select name='module' value={module} onChange={ChangeData} className="Support__dropdown_depart_2 my-2  " required >
          <option value="module" selected> Module</option>
          {moduleV2.map(optio =>(<option key={optio.id} value={optio.id}>{optio.name}</option>))}
        </select>
        </div>
          
          
        <div className="modal-footer">
      <button type="submit" className="btn btn-primary" >Approuver</button>
    </div>
    </form></div>
    </div>
    
    </div>
    
  </div>
</div>
</div></div>
    )
}

export default ModalApprouverProf
