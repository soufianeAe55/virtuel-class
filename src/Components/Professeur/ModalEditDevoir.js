import React, {useState,useEffect} from 'react'
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import moment from 'moment'

function ModalEditDevoir(props) {

   const [titre, setTitre] = useState("")
   const [contenu, setContenu] = useState("")
   const [date, setDate] = useState('')
   const [showSucess,setSucess]=useState(false)
   const [showError,setError]=useState(false)
   let data=jwtdecode(localStorage.token)
   let token= 'Bearer '+localStorage.token
	let headers={
			headers : {Authorization: token}
   } 
   useEffect(() => {
      setDate(moment(props.devoir.date))
   },[props.devoir])

   const ChangeData=(e) => {
      let {name,value}=e.target
      if(name== 'titre') setTitre(value)
      if(name== 'contenu') setContenu(value)
      
   }
   const sendDATA= (e) => {
      e.preventDefault()
       
      let getName=data.userEmail.split('-')[0].split('.')
      let nameUser= getName[0]+" "+getName[1]
     // moment(date).format('MMM DD YYYY h:mm:ss a'),
      let dataForm={
         name: titre,
         contenu,
         date,
         id:props.devoir.id
      }
      console.log(dataForm)
      axios.put('http://localhost:8000/api/updateDevoirProf',dataForm,headers)
      .then(res => {
         if(res.data.MsgErr == 'JustForProf'){
            localStorage.removeItem('token')
            props.history.push('/notallowed')
         }
         
         if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
            localStorage.removeItem('token')
            props.history.push('/expire')
         }else if(res.data){
            setError(false)
            setSucess(true)
            
         } 
      })
      .catch(err => {
         setSucess(false)
         setError(true)
         console.log(err)
      }) 
   }

   return (

      <form onSubmit={sendDATA} className="modal fade ModalAddDevoir" id="EditModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">
                  Modifier ce devoir</h4>
               </div>
               {showSucess ?<div class="alert alert-success" role="alert">
                     Votre devoir mise a jour avec succès
                     </div>: null}
               {showError?<div class="alert alert-danger" role="alert">
                     Il y a une error, veulliez essayer une autre fois
                  </div>:null}
               <div className="modal-body ">
                  <input value={titre} onChange={ChangeData} name="titre" className="col-12 px-3 py-3" type="text" placeholder="Nouveau titre du devoir" required/>
                  <div className="row d-flex flex-column flex-md-row col-12 mt-2">
                     <h5 className="my-auto mx-auto mx-md-0 limDa">Date limite :</h5>
                     <DateTimePicker value={date} onChange={setDate}  name="date" />
                  </div>
                  <textarea value={contenu} onChange={ChangeData} name="contenu" className="col-12 mt-2 px-3 py-3" placeholder="Nouvelle description" required></textarea>
               </div>
               <div className="modal-footer">
                  <button type="submit" className="mx-auto">Save changes</button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default ModalEditDevoir
