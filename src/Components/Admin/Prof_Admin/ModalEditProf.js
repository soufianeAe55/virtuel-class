import React ,{useState}from 'react'
import Editer from '../Admin_Img/Editer.svg'
import arrowDown from '../../Professeur/ImageProf/close.svg'
import arrowUp from '../../Professeur/ImageProf/close.svg'
import axios from 'axios'
 

function ModalEditProf(props) {
  const [showSucess,setSucess]=useState(false)
  const [showError,setError]=useState(false)

  let classProfV2=[]
  let token= 'Bearer '+localStorage.token
  let headers={
      headers : {Authorization: token}
      } 

  for (let i = 0; i < props.classProf.length; i++) {
    if(props.classProf[i].emailProf==props.Tab1.email ){
      classProfV2.push(props.classProf[i])
    }
    
  }
   const sendData = (data) => {
    let obj
    for (let i = 0; i < props.module.length; i++) {
      if(props.module[i].className == data.className && props.module[i].emailProf ==data.emailProf ){
          obj=props.module[i]
      }
    }
      let form={
        id: props.Tab1.id,
        idMod: obj.id,
        email: props.Tab1.email,
        idClass: data.idClass
      }

      axios.post('http://localhost:8000/api/editProf',form,headers)
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

    return (
        <div >
        
    <div className="modal fade" id="examp" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog " role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Modifier </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        {showSucess ?<div class="alert alert-success" role="alert">
          La classe ete supprimee avec succès
         </div>: null}
         {showError?<div class="alert alert-danger" role="alert">
           Il y a une error, veulliez essayer une autre fois
         </div>:null}
        <div className="row mx-0  px-2"> <h5 className="mx-0 my-2 textapp">Veuillez choisir la class qui vous voulez et la supprimer :</h5>
        <div className="col-lg-12  ">
        {classProfV2.map((classP,key)=>(
           <div className="" key={key}>
             <div className="d-flex col-10 col-lg-12 col-md-12 col-xl-12 col-sm-12 Departement2 mt-2">
            <div className="blueLine"></div>
            <div className="DepartementName">
               {classP.className}
            </div>
            <img src={arrowDown} onClick={() => sendData(classP)} id='suppProf' className="ml-auto"  alt="" />
         </div>	

         </div>))}


   
            
        
        </div>
        </div>
        
        </div>
   
      </div>
    </div>
    </div></div>
    )
}

export default ModalEditProf
