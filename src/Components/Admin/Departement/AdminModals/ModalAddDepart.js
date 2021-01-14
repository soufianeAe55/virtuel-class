import React ,{useState,useEffect}from 'react'
import '../../../../styles/Departement.css'
import '../../../../styles/SupportEtu.css'
import axios from 'axios';
import jwtdecode from 'jwt-decode';


function ModalAdd(props) {
    const [element] = useState(props.departement);
    const [nameDept,setNameDept]=useState('')
    const [chefDept,setChefDept]=useState('')
    const [aliasDept,setAliasDept]=useState('')
    const [showSucess,setSucess]=useState(false)
    const [showError,setError]=useState(false)
    const [idDept,setIdDept]=useState(false)
    let Semstres=[
      {id: '1',name:'S1'},
      {id: '1',name:'S2'},
      {id: '3',name:'S3'},
      {id: '4',name:'S4'},
      {id: '5',name:'S5'},
      {id: '6',name:'S6'}
  
  ]
  
    let token= 'Bearer '+localStorage.token
    let headers={
        headers : {Authorization: token}
   } 

  const ChangeData=(e) => {
    let {name,value}=e.target
    if(name== 'namedept') setNameDept(value)
    if(name== 'chefdept') setChefDept(value)
    if(name== 'aliasDept') setAliasDept(value)
    if(name== 'idDept') setIdDept(value)
    
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
    let form={}
    console.log('test')
    if(props.Verife==="Departement" && chefDept != '' ){
      form={
        name:nameDept,
        id_chefDept:chefDept,
        alias: aliasDept
      }
      console.log('test2')
        axios.post('http://localhost:8000/api/addDept',form,headers)
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
              setChefDept('')
              setNameDept('')
              setAliasDept('')
            } 
         })
         .catch(err => {
          setSucess(false)
          setError(true)
            console.log(err)
         })
       }else if(props.Verife==="Filiere" && chefDept != '' && idDept != '' ){
        form={
          name:nameDept,
          id_chefFil:chefDept,
          alias: aliasDept,
          idDept
        }
        console.log('test2')
          axios.post('http://localhost:8000/api/addFil',form,headers)
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
                setChefDept('')
                setNameDept('')
                setAliasDept('')
              } 
           })
           .catch(err => {
            setSucess(false)
            setError(true)
              console.log(err)
           })
         }else if(props.Verife==="Module" && idDept != '' ){
          form={
            name:nameDept,
            NbHeures: aliasDept,
            className: idDept,
            Semster_id: chefDept,
            emailProf: 'none'
          }
          
            axios.post('http://localhost:8000/api/addModule',form,headers)
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
                  setNameDept('')
                  setIdDept('')
                  setChefDept('')
                  setAliasDept('')
                } 
             })
             .catch(err => {
              setSucess(false)
              setError(true)
                console.log(err)
             })
           }else if(props.Verife==="Classe" && idDept != '' ){
            form={
              name:nameDept,
              idFiliere:idDept,
              respo:''
            }
            console.log('test2')
              axios.post('http://localhost:8000/api/addClasse',form,headers)
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
                    setNameDept('')
                    setIdDept('')
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
       
    <div className="conter">
    <p   data-toggle="modal" data-target="#exampleModalCenter">
    {element.button}
    </p>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle">{element.titre}</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <div className="row mx-0  p-4">
    <div className="col-lg-12  ">
      <form  onSubmit={sendData} >
   
          {props.Verife== 'Departement' || props.Verife== 'Filiere'  ?
            <React.Fragment>
              {showSucess ?<div class="alert alert-success" role="alert">
                Votre {props.Verife== 'Departement'?'departement':'filiere' } ajouté avec succès
                </div>: null}
                {showError?<div class="alert alert-danger" role="alert">
                  Il y a une error, veulliez essayer une autre fois
         </div>:null}
          <div className="form-group text-left mx-3">   
            <label  className="col-form-label">{element.champ1}</label>
            <input value={nameDept} name='namedept' onChange={ChangeData}  type="text " className="form-control w-75" id={"recipient-name1"} required/>
          </div>
          <div className="form-group text-left mx-3">   
            <label  className="col-form-label">{element.champ3}</label>
            <input value={aliasDept} name='aliasDept' onChange={ChangeData}  type="text " className="form-control w-75" id={"recipient-name1"} required/>
          </div>
         {props.Verife== 'Filiere' ?<div className="form-group text-left mx-3">
            <label  className="col-form-label">Departement</label>
            <select value={idDept} name='idDept' onChange={ChangeData} type="text" className="form-control w-75" id="recipient-name2" required>
            <option   value='' >Choisir un dept </option>
              {props.depts.map( (dept,id) => {
                return(
                <option  key={id} value={dept.id} >{dept.alias}</option>
              )})}
              </select>
          </div>: null}
          <div className="form-group text-left mx-3">
            <label  className="col-form-label">{element.champ2}</label>
            <select value={chefDept} name='chefdept' onChange={ChangeData} type="text" className="form-control w-75" id="recipient-name2" required>
            <option   value='' >Choisir un Chef </option>
              {props.Professeurs.map( (prof,id) => {
                let fullName=prof.email.split('-')[0].split('.')
                let nameProf= fullName[0]+" "+fullName[1]
                return(
                <option  key={id} value={prof.email} >{nameProf}</option>
              )})}
              </select>
          </div>
          </React.Fragment>
          :null}

{props.Verife== 'Classe'   ?
            <React.Fragment>
              {showSucess ?<div class="alert alert-success" role="alert">
                Votre classe ajouté avec succès
                </div>: null}
                {showError?<div class="alert alert-danger" role="alert">
                  Il y a une error, veulliez essayer une autre fois
         </div>:null}
          <div className="form-group text-left mx-3">   
            <label  className="col-form-label">{element.champ1}</label>
            <input value={nameDept} name='namedept' onChange={ChangeData}  type="text " className="form-control w-75" id={"recipient-name1"} required/>
          </div>
         
         {props.Verife== 'Classe' ?<div className="form-group text-left mx-3">
            <label  className="col-form-label">{element.champ4}</label>
            <select value={idDept} name='idDept' onChange={ChangeData} type="text" className="form-control w-75" id="recipient-name2" required>
            <option   value='' >Choisir un Filiere </option>
              {props.Filiere.map( (dept,id) => {
                return(
                <option  key={id} value={dept.id} >{dept.alias}</option>
              )})}
              </select>
          </div>: null}
        
          </React.Fragment>
          :null}
  {props.Verife== 'Module'  ?
            <React.Fragment>
              {showSucess ?<div class="alert alert-success" role="alert">
                Votre Module ajouté avec succès
                </div>: null}
                {showError?<div class="alert alert-danger" role="alert">
                  Il y a une error, veulliez essayer une autre fois
         </div>:null}
          <div className="form-group text-left mx-3">   
            <label  className="col-form-label">{element.champ1}</label>
            <input value={nameDept} name='namedept' onChange={ChangeData}  type="text " className="form-control w-75" id={"recipient-name1"} required/>
          </div>
          <div className="form-group text-left mx-3">   
            <label  className="col-form-label">{element.champ2}</label>
            <input value={aliasDept} name='aliasDept' onChange={ChangeData}  type="text " className="form-control w-75" id={"recipient-name1"} required/>
          </div>
         {props.Verife== 'Module' ?<div className="form-group text-left mx-3">
            <label  className="col-form-label">Classe</label>
            <select value={idDept} name='idDept' onChange={ChangeData} type="text" className="form-control w-75" id="recipient-name2" required>
            <option   value='' >Choisir une Classe </option>
              {props.Classes.map( (dept,id) => {
                return(
                <option  key={id} value={dept.name} >{dept.name}</option>
              )})}
              </select>
          </div>: null}
          <div className="form-group text-left mx-3">
            <label  className="col-form-label"> Semestre</label>
            <select value={chefDept} name='chefdept' onChange={ChangeData} type="text" className="form-control w-75" id="recipient-name2" required>
            <option   value='' >Choisir une semstre </option>
              {Semstres.map( (prof,id) => {
                
                return(
                <option  key={id} value={prof.id} >{prof.name}</option>
              )})}
              </select>
          </div>
          </React.Fragment>
          :null}
         
     <div className="modal-footer">
      <button type="submit" className="btn btn-primary" >Ajouter</button>
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

export default ModalAdd
