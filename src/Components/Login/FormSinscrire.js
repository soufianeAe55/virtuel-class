import React ,{ useState,useEffect } from 'react';
import email from './imagesLogin/email.svg'
import password from './imagesLogin/password.svg'
import nom from './imagesLogin/nom.svg';


function FormSinscrire() {
   const [dropDown, setdropDown] = useState("Etudient");
   const [valide,setValide]=useState(false);
   const [caption,setCaption]=useState();

const valider =()=>{
   const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
 
    if(!regEmail.test(caption)){
     
      setValide(false);
   }
      else{
        
         setValide(true);
      }

}
const verifieEmail=(e)=>{
  
   setCaption(e.target.value);
valider();
 console.log(caption);
// if(valide){
   
// }

}

   return (
      <form className="d-flex flex-column mt-3 mx-2" id="Sinscrire__form">
      <div className="row my-3 mx-2">
         <div className="col mx-2 my-2 text-center" id="Sinscrire__signup_drop">
            <div className="d-flex  p-1  bg-white rounded-pill" id="Sinscrire__Nom">
               <div className="mt-2 flex-fill">
                  <img src={nom} alt="" />
               </div>
               <div className="col-sm pt-2 pb-2 mt-1  flex-fill">
                  <input  type="text" placeholder="Nom et prenom" />
               </div>
            </div>
         </div>
         <div className="col-sm mx-2 my-2 p-3 text-center" id="Sinscrire__signup_drop">
            <select onChange={ e => { setdropDown(e.target.value);} } value={dropDown} id="Type">
               <option value="Etudiant">Etudiant</option>
               <option value="Professeur">Professeur</option>
               {console.log(dropDown)}
            </select>
         </div>
      </div>
         <div className="d-flex p-3 m-3 bg-white rounded-pill" id="Sinscrire__form__email">
            <div className="py-1 px-3 flex-shrink-1">
               <img src={email} alt="" />
            </div>
            <div className="p-1 w-100">
               <input className="h5" type="text" placeholder="Adresse e-mail" onChange={verifieEmail}  value={caption}/>
            </div>
         </div>
      <div className="d-flex p-3 m-3 bg-white rounded-pill" id="Sinscrire__form__password">
         <div className="py-1 px-3 flex-shrink-1">
            <img src={password} alt="" />
         </div>
         <div className="p-1 w-100">
            <input className="h5" type="password" placeholder="Mot de passe" />
         </div>
      </div>
      <div className="d-flex justify-content-center p-3 mx-3 my-1  ">
         <input id="Sinscrire__signin" className="font-weight-bold w-75 mx-3 p-3 h5" type="submit" value="S'inscrire"/>
      </div>
   </form>
   )
}
export default FormSinscrire
