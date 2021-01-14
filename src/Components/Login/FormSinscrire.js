import React ,{ useState,useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import nom from './imagesLogin/nom.svg';
import axios from 'axios'
import email_img from './imagesLogin/email_img.svg'
import password_img from './imagesLogin/password_img.svg'

function FormSinscrire(props) {
   const [name, setName] = useState('');
   const [type, setType] = useState('Etudiant');   
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [valide, setValide] = useState('');
   const [validePass, setValidepass] = useState('');
  
  
   const getValues = (e) => {
         let {name,value} = e.target
      
           if(name =='name') setName(value);
           if(name =='type' ) setType(value);

           if(name =='email'){
            setEmail(value);
              if(/^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(value)){
              
               setValide('Email Accepted!')
              }else{
               setValide('Email Not Accepted!')
              }
            
          
           } 
           if(name =='password'){
               setPassword(value);
               if(value.length < 6){
                  setValidepass('Password must be more then 6 caracters')
               }else{
                  setValidepass('Password correct !')
               }
            }
        
   }
   const sendData = (e) => {
      e.preventDefault()
      if(valide=='Email Accepted!' && validePass== 'Password correct !')
      {
         let dataUser={name,type,email,password,class: null}
        
         axios.post('http://localhost:8000/api/RegisterEtu',dataUser)
         .then(res => {
           // console.log(res.data)
               localStorage.setItem('token',res.data.Token)
               props.history.push('/approuvee')

         })
         .catch(err => {
            console.log(err)
         })
      }else{

         if(!/^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)){
      
            setValide('Email Not Accepted!')
           }
            if(password.length < 6){
               setValidepass('Password must be more then 6 caracters')
            }
      }
   }

   return (
      <form className="d-flex flex-column mt-3 mx-2" id="Sinscrire__form" onSubmit={sendData} >
      <div className="row my-2 mx-2">
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
         <div className="d-flex p-2 mx-3 my-3 bg-white rounded-pill" id="Sinscrire__form__email">
            <div className="py-1 px-3 flex-shrink-1">
               <img src={email_img} alt="" />
            </div>
            <div className="py-2 px-1 w-100">
               <input className="" onChange={getValues} type="text" placeholder="Adresse e-mail" name="email" value={email} />
            </div>
         </div>
         <span style={{color: 'orange',marginLeft: '40px'}}>{valide}</span>
      <div className="d-flex p-2 mx-3 my-2  bg-white rounded-pill" id="Sinscrire__form__password">
         <div className="py-1 px-3 flex-shrink-1">
            <img src={password_img} alt="" />
         </div>
         <div className="py-2 px-1 w-100">
            <input className="" type="password" placeholder="Mot de passe" onChange={getValues} name="password" value={password} />
         </div>
      </div>
      <span style={{color: 'orange',marginLeft: '40px'}}>{validePass}</span>
      <div className="d-flex justify-content-center p-3 mx-3 my-1  ">
         <input  id="Sinscrire__signin" className="font-weight-bold w-75 mx-3 p-3 h5" type="submit" value="S'inscrire"/>
      </div>
   </form>
   )
}
export default withRouter(FormSinscrire)