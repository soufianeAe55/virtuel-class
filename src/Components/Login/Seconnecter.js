import React from 'react'
import './LoginPage.css'
import svgMain from './imagesLogin/svgMain.svg'
import email from './imagesLogin/email.svg'
import password from './imagesLogin/password.svg'
import nom from './imagesLogin/nom.svg';
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function SeConnecter() {
return(
   <div className="container-fluide">
      <div className="row mx-0" >
         <div class="col-lg-7">
            <div class="d-flex flex-column">
               <p className="text-center" id="SeConnecter_bienvenue">
                  Bienvenue dans votre<br/>classe virtuelle
               </p>
               <img id="SeConnecter__image" src={svgMain} alt="" />
            </div>
         </div>

         <div class="col-lg-5 vh-100 rounded border border-white pt-5" id="Seconnecter__carte">
            <h1 className="text-center text-white m-4 font-weight-bold">My LoGo</h1>
            <div className="row my-5 mx-2">
               <div className="col my-2 mx-3 text-center" id="Seconnecter__signin">
                  <a className="text-decoration-none" href="#">
                     <h3 className="font-weight-bold my-3 ">Se connecter</h3>
                  </a>
               </div>
               <div className="col my-2 mx-3 text-center" id="Seconnecter__signup">
                  <a className="text-decoration-none" href="#">
                     <h3 className="font-weight-bold my-3 text-white">S'inscrire</h3>
                  </a>
               </div>
            </div>
            <div className="row my-5 mx-2 ">
            <div className="col my-2 mx-3 text-center" id="Seconnecter__signup_drop">
            <div class="d-flex  p-1  bg-white rounded-pill" id="SeConnecter__Nom">
                  <div class=" mt-2 flex-fill">
                     <img src={nom} alt="" />
                  </div>
                  <div class=" p-1 mt-2 flex-fill bo">
                     <input type="text" placeholder="Nom" />
                  </div>
               </div></div>
            
               <div className="col my-2 mx-3 text-center" id="Seconnecter__signup_drop">
               
                  <button type="button" class="btn btn-secondary  w-100 h-100 dropdown-toggle rounded-pill"  id="drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     type
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                     <button class="dropdown-item" type="button">Professeur</button>
                     <button class="dropdown-item" type="button">Etudiant</button>
                   
                  </div>
                  
             </div>
               
            </div>
            <form className="d-flex flex-column my-5 mx-2" id="SeConnecter__form">
               <div class="d-flex p-3 m-3 bg-white rounded-pill" id="SeConnecter__form__email">
                  <div class="py-2 px-3 flex-shrink-1">
                     <img src={email} alt="" />
                  </div>
                  <div class="p-2 w-100">
                     <input type="text" placeholder="Adresse e-mail" />
                  </div>
               </div>
               <div class="d-flex p-3 m-3 bg-white rounded-pill" id="SeConnecter__form__password">
                  <div class="py-2 px-3 flex-shrink-1">
                     <img src={password} alt="" />
                  </div>
                  <div class="p-2 w-100">
                     <input type="password" placeholder="Mot de passe" />
                  </div>
               </div>
               <div class="px-3 m-3">
                  <a className="text-decoration-none" href="#">
                     <h5 className="px-3 text-white" >Mot de passe oublié ?</h5>
                  </a>
               </div>
               <div class="d-flex justify-content-center p-3 m-3">
                  <input id="Seconnecter__signin" className="font-weight-bold w-75 mx-3 p-3 h4" type="submit" value="Se connecter"/>
               </div>
            </form>
         </div>   
      </div>
   </div>

)
}
export default SeConnecter

