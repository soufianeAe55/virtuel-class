import React from 'react'
import './Sinscrire.css'
import svgMain from './imagesLogin/svgMain.svg'
import email from './imagesLogin/email.svg'
import password from './imagesLogin/password.svg'
import nom from './imagesLogin/nom.svg';
import { Link } from 'react-router-dom';

// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Sinscrire() {
return(
   <div className="container-fluide">
         <div className="row mx-0">
         <div class="col-xl-7 bg-white">
            <div class="d-flex flex-column">
               <div className="SeConnecter_bienvenue">
                  <p>Bienvenue dans votre<br/>Classe virtuelle</p>
                  <img id="SeConnecter__image" src={svgMain} alt="" />
               </div>
            </div>
         </div>

         <div class="col-lg-5 vh-100 rounded border border-white pt-5" id="Sinscrire__carte">
            <h1 className="text-center text-white m-4 font-weight-bold">My LoGo</h1>
            <div className="row my-3 mx-2">
               <div className="col my-2 mx-3 text-center" id="Sinscrire__signin">
                  <Link to={'/'} className="text-decoration-none" href="#">
                     <h3 className="font-weight-bold my-3 text-white">Se connecter</h3>
                  </Link>
               </div>
               
               <div className="col my-2 mx-3 text-center" id="Sinscrire__signup">
                  <Link to={'/Sinscrire'} className="text-decoration-none" href="#">
                     <h3 className="font-weight-bold my-3">S'inscrire</h3>
                  </Link>
               </div>
            </div>
            <form className="d-flex flex-column my-1 mx-2" id="Sinscrire__form">
            <div className="row my-1 mx-2 ">
               <div className="col my-2 mx-3 text-center" id="Sinscrire__signup_drop">
                  <div class="d-flex  p-1  bg-white rounded-pill" id="Sinscrire__Nom">
                     <div class="mt-2 flex-fill">
                        <img src={nom} alt="" />
                     </div>
                     <div class=" p-1 mt-2 flex-fill">
                        <input type="text" placeholder="Nom et prenom" />
                     </div>
                  </div>
               </div>
               <div className="col my-2 text-center" id="Sinscrire__signup_drop">
                  <button type="button" class="btn w-100 h-100 dropdown-toggle rounded-pill boder border-white"   data-toggle="dropdown">
                     type
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                     <button class="dropdown-item font-weight-bold h5" type="button">Professeur</button>
                     <button class="dropdown-item font-weight-bold h5" type="button">Etudiant</button>
                  </div>
               </div>
            </div>
                  <div class="d-flex p-3 m-3 bg-white rounded-pill" id="Sinscrire__form__email">
                  <div class="py-1 px-3 flex-shrink-1">
                     <img src={email} alt="" />
                  </div>
                  <div class="p-1 w-100">
                     <input className="h5" type="text" placeholder="Adresse e-mail" />
                  </div>
               </div>
               <div class="d-flex p-3 m-3 bg-white rounded-pill" id="Sinscrire__form__password">
                  <div class="py-1 px-3 flex-shrink-1">
                     <img src={password} alt="" />
                  </div>
                  <div class="p-1 w-100">
                     <input className="h5" type="password" placeholder="Mot de passe" />
                  </div>
               </div>
               <div class="d-flex justify-content-center p-3 mx-3 my-1  ">
                  <input id="Sinscrire__signin" className="font-weight-bold w-75 mx-3 p-3 h4" type="submit" value="Se connecter"/>
               </div>
            </form>
         </div>   
      </div>
   </div>

)
}
export default Sinscrire