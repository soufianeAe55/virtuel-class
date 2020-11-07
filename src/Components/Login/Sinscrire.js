import React ,{ useState } from 'react';
import './Sinscrire.css'
import svgMain from './imagesLogin/svgMain.svg'
import email from './imagesLogin/email.svg'
import password from './imagesLogin/password.svg'
import nom from './imagesLogin/nom.svg';
import { Link } from 'react-router-dom';


function Sinscrire() {
   const [dropDown, setdropDown] = useState("Etudiant");
   const [caption,setCaption]=useState('');
   const [valide,setValide]=useState(false);

const valider =()=>{
   const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
 
    if(!regEmail.test(caption)){
     
      setValide(false);
   }
      else{
        
         setValide(true);
      }

}

const updatecaption =()=>{
   console.log(valide);
if(valide)
setCaption.css("color","green");



}

console.log(valide);
return(
   <div className="container-fluide">
         <div className="row mx-0">
         <div className="col-xl-7 bg-white">
            <div className="d-flex flex-column">
               <div className="Sinscrire_bienvenue">
                  <p>Bienvenue dans votre<br/>Classe virtuelle</p>
                  <img id="Sinscrire__image" src={svgMain} alt="" />
               </div>
            </div>
         </div>
         <div className="col-xl-5 pt-5" id="Sinscrire__carte">
            <h1 className="text-center text-white m-4 font-weight-bold">MY LOGO</h1>
            <div className="row  mt-5 mx-2">
               <div className="col-lg my-2 mx-2 text-center" id="Sinscrire__signin">
                  <Link to={'/'} className="text-decoration-none" href="#">
                     <p className=" h4 font-weight-bold my-3 text-white">Se connecter</p>
                  </Link>
               </div>
               
               <div className="col-lg my-2 mx-2 text-center" id="Sinscrire__signup">
                  <Link to={'/Sinscrire'} className="text-decoration-none" href="#">
                     <p className=" h4 font-weight-bold my-3">S'inscrire</p>
                  </Link>
               </div>
            </div>
            <form className="d-flex flex-column mt-3 mx-2" id="Sinscrire__form">
               <div className="row my-3 mx-2">
                  <div className="col mx-2 my-2 text-center" id="Sinscrire__signup_drop">
                     <div className="d-flex  p-1  bg-white rounded-pill" id="Sinscrire__Nom">
                        <div className="mt-2 flex-fill">
                           <img src={nom} alt="" />
                        </div>
                        <div className="col-sm  pt-2 pb-2 mt-1  flex-fill ">
                           <input  className="w-100 " type="text" placeholder="Nom et prenom" />
                        </div>
                     </div>
                  </div>
                  <div className="col-sm mx-2 my-2 p-3 text-center" id="Sinscrire__signup_drop">
                     <select onChange={ e => { setdropDown(e.target.value); } } value={dropDown}  id="Type">
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
                        <input className="h5" type="text" placeholder="Adresse e-mail" onChange={event =>{setCaption(event.target.value)
                           valider()} } value={caption} id="email"/>
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
                  <input id="Sinscrire__signin" className="font-weight-bold w-75 mx-3 p-3 h4" type="submit" value="Se connecter"/>
               </div>
            </form>
         </div>   
      </div>
   </div>
)
}
export default Sinscrire