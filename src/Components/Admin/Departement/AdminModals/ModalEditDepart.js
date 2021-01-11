import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import jwtdecode from 'jwt-decode';



function ModalEdit(props) {
  const [element] = useState(props.departement);

  const [nameDept,setNameDept]=useState('')
  const [chefDept,setChefDept]=useState('')
  const [aliasDept,setAliasDept]=useState('')
  const [showSucess,setSucess]=useState(false)
  const [showError,setError]=useState(false)
  const [idDept,setIdDept]=useState(false)
  const [semstre,setSemstre]=useState('')
  const [delMsg,setDelMsg]=useState(false)
  const [showSucessDel,setSucessDel]=useState(false)
  const [showErrorDel,setErrorDel]=useState(false)

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
  if(name== 'semstre') setSemstre(value)
  
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
  if(props.Verife == 'Departement' || props.Verife == 'Filiere' ) {
   setNameDept(props.depart.name)
   setChefDept(props.depart.id_chefDept)
   setAliasDept(props.depart.alias)
   if(props.Verife == 'Filiere') {
    setChefDept(props.depart.id_chefFil)
    setIdDept(props.depart.idDept)
   } 
  }else if(props.Verife == 'Classe'){

       setNameDept(props.depart.name)
        setIdDept(props.depart.idFiliere)
  }else if(props.Verife == 'Module'){
        
          setNameDept(props.depart.name)
          setChefDept(props.depart.Semster_id)
          setAliasDept(props.depart.NbHeures)
          setIdDept(props.depart.className)
          setSemstre(props.depart.Semstre_id)
  }
   setSucess(false)
   setError(false)

},[props.depart])

const sendData= (e) => {
  e.preventDefault()
  let form={}
  console.log('test')
  if(props.Verife==="Departement" && chefDept != '' ){
    form={
      id:props.depart.id,
      name:nameDept,
      id_chefDept:chefDept,
      alias: aliasDept
    }
    
      axios.post('http://localhost:8000/api/updateDept',form,headers)
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
        id:props.depart.id,
        name:nameDept,
        id_chefFil:chefDept,
        alias: aliasDept,
        idDept
      }
      console.log('test2')
        axios.post('http://localhost:8000/api/updateFil',form,headers)
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
          id:props.depart.id,
          name:nameDept,
          NbHeures: aliasDept,
          className: idDept,
          Semster_id: semstre,
         
        }
        
          axios.post('http://localhost:8000/api/updateModule',form,headers)
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
            id:props.depart.id,
            name:nameDept,
            idFiliere:idDept,
          }
          console.log('test2')
            axios.post('http://localhost:8000/api/updateClasse',form,headers)
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
  
 const deleteData= () => {
  setDelMsg(false)
  let form={}
  if(props.Verife==="Departement" && chefDept != '' ){
    form={
      id:props.depart.id,
    }
    
      axios.post('http://localhost:8000/api/deleteDept',form,headers)
       .then(res => {
          if(res.data.MsgErr == 'JustForAdmin'){
             localStorage.removeItem('token')
             props.history.push('/notallowed')
          }
          
          if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
             localStorage.removeItem('token')
             props.history.push('/expire')
          }else if(res.data){
            setDelMsg(true)
            setSucessDel(true)
            setErrorDel(false)
    
          } 
       })
       .catch(err => {
        setDelMsg(true)
        setSucessDel(false)
        setErrorDel(true)
          console.log(err)
       })
     }else if(props.Verife==="Filiere" && chefDept != '' && idDept != '' ){
      form={
        id:props.depart.id,
      }
      console.log('test2')
        axios.post('http://localhost:8000/api/deleteFil',form,headers)
         .then(res => {
            if(res.data.MsgErr == 'JustForAdmin'){
               localStorage.removeItem('token')
               props.history.push('/notallowed')
            }
            
            if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
               localStorage.removeItem('token')
               props.history.push('/expire')
            }else if(res.data){
              setDelMsg(true)
              setSucessDel(true)
              setErrorDel(false)
            }
         })
         .catch(err => {
          setDelMsg(true)
          setSucessDel(false)
          setErrorDel(true)
            console.log(err)
         })
       }else if(props.Verife==="Module" && idDept != '' ){
        form={
          id:props.depart.id,
         
        }
        
          axios.post('http://localhost:8000/api/deleteModule',form,headers)
           .then(res => {
              if(res.data.MsgErr == 'JustForAdmin'){
                 localStorage.removeItem('token')
                 props.history.push('/notallowed')
              }
              
              if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
                 localStorage.removeItem('token')
                 props.history.push('/expire')
              }else if(res.data){
                setDelMsg(true)
                setSucessDel(true)
                setErrorDel(false)
              } 
           })
           .catch(err => {
            setDelMsg(true)
            setSucessDel(false)
            setErrorDel(true)
              console.log(err)
           })
         }else if(props.Verife==="Classe" && idDept != '' ){
          form={
            id:props.depart.id,
          }
          console.log('test2')
            axios.post('http://localhost:8000/api/deleteClasse',form,headers)
             .then(res => {
                if(res.data.MsgErr == 'JustForAdmin'){
                   localStorage.removeItem('token')
                   props.history.push('/notallowed')
                }
                
                if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
                   localStorage.removeItem('token')
                   props.history.push('/expire')
                }else if(res.data){
                  setDelMsg(true)
                  setSucessDel(true)
                  setErrorDel(false)
                  
                } 
             })
             .catch(err => {
              setDelMsg(true)
                setSucessDel(false)
                setErrorDel(true)
                console.log(err)
             })
           }
 }   
  
    return (
        <div >
       
    
    
    <div className="modal fade" id="ex" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle"> {element.titre  }</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <div className="row mx-0  p-4">
        <div className="col-lg-12  ">
        {delMsg ?
          <div> 
            {showSucessDel ?<div class="alert alert-success" role="alert">
                Votre {props.Verife=='Module' ? 'module ':null} 
                {props.Verife=='Departement' ? 'departement ':null} 
                {props.Verife=='Filiere' ? 'filiere ':null} 
                {props.Verife=='Classe' ? 'classe ':null} 
                est supprimee avec succès
                </div>: null}
            {showErrorDel?<div class="alert alert-danger" role="alert">
                  Il y a une error, veulliez essayer une autre fois   
                  </div>:null}

          </div> :null}
          <form onSubmit={sendData}>
          
         {props.Verife== 'Departement' || props.Verife== 'Filiere'  ?
            <React.Fragment>
              {showSucess ?<div class="alert alert-success" role="alert">
                Votre {props.Verife== 'Departement'?'departement':'filiere' } mise a jour avec succès
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
                Votre Module est mise a jour avec succès
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
            <select value={semstre} name='semstre' onChange={ChangeData} type="text" className="form-control w-75" id="recipient-name2" required>
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
          <button type="submit" class="btn btn-primary" >Enregistrer</button>
          <button type="button" class="btn btn1 " onClick={deleteData} >Supprimer</button>
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

export default ModalEdit
