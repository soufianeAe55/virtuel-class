import React, {useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'


function FormSeconnecter(props) {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [valide, setValide] = useState('');
   const [validePass, setValidepass] = useState('');

  

   const getValues = (e) => {
      let {name,value} = e.target
   
        if(name =='email'){
         setEmail(value);
           if(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(value)){
           
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
         let data={
         email,
         password
      }
      axios.post('http://localhost:8000/api/loginEtu',data)
      .then(res => {
         localStorage.setItem('token',res.data.Token)
         console.log(res.data.user)
         if(res.data.user.displayName == 'Etudiant' && res.data.user.photoURL != null ){
            props.history.push('/homeEtu')
         }else if(res.data.user.displayName == 'Professeur' && res.data.user.photoURL != null ){
            props.history.push('/professeurHome')

         } else if(res.data.user.displayName == 'Admin'  ){
            props.history.push('/AdminActu')
         }
         else{
            props.history.push('/approuvee')
         }
         
      })
      .catch(err => {
         console.log(err)
      })
   }else{
      if(!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)){
      
         setValide('Email Not Accepted!')
        }
         if(password.length < 6){
            setValidepass('Password must be more then 6 caracters')
         }
      }
   }

   return (
      <form className="d-flex flex-column my-3 mx-2" id="SeConnecter__form" onSubmit={sendData} >
         <div className="d-flex p-3 m-3 bg-white rounded-pill" id="SeConnecter__form__email">
            <div className=" py-1 px-3 flex-shrink-1">
               <img src={email} alt="" />
            </div>
            <div className="p-1 w-100">
               <input className="h5" type="text" placeholder="Adresse e-mail" onChange={getValues} name="email" value={email} />
               
            </div>
          
         </div>
         <span style={{color: 'orange',marginLeft: '40px'}}>{valide}</span>
         <div className="d-flex p-3 m-3 bg-white rounded-pill" id="SeConnecter__form__password">
            <div className="py-1 px-3 flex-shrink-1">
               <img src={password} alt="" />
            </div>
            <div className="p-1 w-100">
               <input className="h5" type="password" placeholder="Mot de passe" onChange={getValues} name="password" value={password} />
            </div>
         </div>
         <span style={{color: 'orange',marginLeft: '40px'}}>{validePass}</span>
         <div className="px-3 m-3">
            <a className="text-decoration-none" href="#">
               <h5 className="px-3 text-white"></h5>
            </a>
         </div>
         <div className="d-flex justify-content-center p-3 mx-3 my-1  ">
            <input id="Seconnecter__signin" className="font-weight-bold w-75 mx-3 p-3 h5" type="submit" value="Se connecter"/>
         </div>
      </form>
   )
}

export default withRouter(FormSeconnecter)
