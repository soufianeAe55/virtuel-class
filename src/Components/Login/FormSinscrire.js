import React ,{ useState,useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import nom from './imagesLogin/nom.svg';
import axios from 'axios'


function FormSinscrire(props) {
   const [name, setName] = useState('');
   const [type, setType] = useState('Etudiant');   
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  
  
   const getValues = (e) => {
         let {name,value} = e.target
      
           if(name =='name') setName(value);
           if(name =='type' ) setType(value);
           if(name =='email') setEmail(value);
           if(name =='password') setPassword(value);
        
   }
   const sendData = (e) => {
      e.preventDefault()
         let dataUser={name,type,email,password}
         axios.post('http://localhost:8000/api/RegisterEtu',dataUser)
         .then(res => {
            console.log(res)
               localStorage.setItem('token',res.data.Token)
               props.history.push('/homeEtu')

         })
         .catch(err => {
            console.log(err)
         })
   }

   return (
      <form className="d-flex flex-column mt-3 mx-2" id="Sinscrire__form" onSubmit={sendData} >
      <div className="row my-3 mx-2">
         <div className="col mx-2 my-2 text-center" id="Sinscrire__signup_drop">
            <div className="d-flex  p-1  bg-white rounded-pill" id="Sinscrire__Nom">
               <div className="mt-2 flex-fill">
                  <img src={nom} alt="" />
               </div>
               <div className="col-sm pt-2 pb-2 mt-1  flex-fill">
                  <input  onChange={getValues} name="name" type="text" placeholder="Nom et prenom" value={name} />
               </div>
            </div>
         </div>
         <div className="col-sm mx-2 my-2 p-3 text-center" id="Sinscrire__signup_drop">
            <select onChange={getValues} name="type" value={type} id="Type">
            
               <option value="Etudiant">Etudiant</option>
               <option value="Professeur">Professeur</option>
             
            </select>
         </div>
      </div>
         <div className="d-flex p-3 m-3 bg-white rounded-pill" id="Sinscrire__form__email">
            <div className="py-1 px-3 flex-shrink-1">
               <img src={email} alt="" />
            </div>
            <div className="p-1 w-100">
               <input className="h5" onChange={getValues} type="text" placeholder="Adresse e-mail" name="email" value={email} />
            </div>
         </div>
      <div className="d-flex p-3 m-3 bg-white rounded-pill" id="Sinscrire__form__password">
         <div className="py-1 px-3 flex-shrink-1">
            <img src={password} alt="" />
         </div>
         <div className="p-1 w-100">
            <input className="h5" type="password" placeholder="Mot de passe" onChange={getValues} name="password" value={password} />
         </div>
      </div>
      <div className="d-flex justify-content-center p-3 mx-3 my-1  ">
         <input  id="Sinscrire__signin" className="font-weight-bold w-75 mx-3 p-3 h5" type="submit" value="S'inscrire"/>
      </div>
   </form>
   )
}
export default withRouter(FormSinscrire)