import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import DevoirsX from '../Etudiant/ImageEtd/Group 53.svg'
import Devoir from '../Etudiant/ImageEtd/Group 44.svg'
import backLink from '../Dashboard/imgs/backLink.svg' 
import add from './ImageProf/Add.svg'
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import moment from 'moment'
import DateTimePicker from 'react-datetime-picker';

function DevoirProf(props) {
   const [devoirs,setDevoirs]=useState([])
   const [titre, setTitre] = useState("")
   const [contenu, setContenu] = useState("")
   const [date, setDate] = useState(new Date())
   const [showSucess,setSucess]=useState(false)
   const [showError,setError]=useState(false)
  

   let data=jwtdecode(localStorage.token)
   let token= 'Bearer '+localStorage.token
	let headers={
			headers : {Authorization: token}
   } 
   

   useEffect(() => {

      if(localStorage.token) {
           
         if(data.type != 'Professeur' ){
            localStorage.removeItem('token')
               props.history.push('/')

            }
            
         if(data.class == null){
               props.history.push('/approuvee')
            }

		  }else{
			 props.history.push('/')
        }
        
        axios.get('http://localhost:8000/api/getDevoirsForProf/'+props.match.params.id,headers)
			.then(res => {
				if(res.data.MsgErr == 'JustForProf'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
            }
            
				if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
              
               setDevoirs(res.data)
               
				} 
			})
			.catch(err => {
				console.log(err)
			})

   },[devoirs])
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
         id_module: props.match.params.id,
         date,
         id_prof: nameUser
      }
      console.log(dataForm)
      axios.post('http://localhost:8000/api/addDevoirProf',dataForm,headers)
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
      <React.Fragment>
      <div className="row cont" >
         <div className="row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 headerDevoir" >
            <Link to={"/professeur/Jenseigne/Modules/DetailModule/"+props.match.params.id} className="col-12 col-md-2 p-3 ml-2">
               <img src={backLink} alt="" />
            </Link>
               <div className="row">
                  <img src={Devoir} className="devoirIcon mx-auto" alt=""/> 
                  <h1 className="devoirTitle text-center">Travaux et Devoirs  </h1>
                </div>
                  
            </div>
         </div>
         
      <div className="row justify-content-center cont ">
      {showSucess ?<div class="alert alert-success" role="alert">
                  Votre devoir ajouté avec succès
                  </div>: null}
                  {showError?<div class="alert alert-danger" role="alert">
                  Il y a une error, veulliez essayer une autre fois
               </div>:null}
         <div className="col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10 devoirsCard" >
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12" >
                  <p className="row float-right h5 addDevoir mb-4" data-toggle="modal" data-target="#exampleModal">
                     <img src={add} alt="" className=" my-auto mr-1"/>
                     Nouveau devoir
                  </p>

               
               {devoirs.length!=0? devoirs.map((devoir,key) => 
									(<Link key={key} to={"/professeur/Jenseigne/devoirprof/devoirproflistetd/"+devoir.id} className="DevoirLink row col-12 col-lg-12 col-md-12 col-sm-12 col-xl-12"> 
										<div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8" > 
											<img className="DevoirIcon" src={DevoirsX} />
											 <p>{devoir.name}</p> 
										 </div>
										 <p id="devoirLimite" className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" >Date limite : {moment(devoir.date).format('MMM DD YYYY h:mm a')} </p> 
									 </Link>))
					: <h5>il n'y a pas de devoir pour le moment!</h5>} 
            </div>
         </div>

         <form onSubmit={sendDATA} className="modal fade ModalAddDevoir" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">
                     Ajouter un devoir</h4>
                  </div>
                  <div className="modal-body ">
                     <input className="col-12 px-3 py-3" value={titre} onChange={ChangeData} name="titre" type="text" placeholder="Titre du devoir" required/>
                     <div className="d-flex flex-column flex-md-row col-12 mt-2">
                        <h5 className="my-auto mx-auto mx-md-0 limDa">Date limite :</h5>
                        <DateTimePicker value={date} onChange={setDate}  name="date" />
                     </div>
                     <textarea value={contenu} onChange={ChangeData} name="contenu" className="col-12 mt-2 px-3 py-3" placeholder="Description" required></textarea>
                  </div>
                  <div className="modal-footer">
                     <button type="submit" className="mx-auto">Save changes</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
      </React.Fragment>
)
}

export default DevoirProf
