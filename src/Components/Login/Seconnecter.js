import React from 'react'
import './LoginPage.css'
import svgMain from './imagesLogin/svgMain.svg'
import email from './imagesLogin/email.svg'
import { Link } from 'react-router-dom';
import password from './imagesLogin/password.svg'
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function SeConnecter() {
   
return(
   <div className="container-fluide">
      <div className="row mx-0">
         <div className="col-xl-7 bg-white">
            <div className="d-flex flex-column">
               <div className="SeConnecter_bienvenue">
                  <p>Bienvenue dans votre<br/>Classe virtuelle</p>
                  <img id="SeConnecter__image" src={svgMain} alt="" />
               </div>
            </div>
         </div>
         <div className="col-xl-5" id="Seconnecter__carte">
            <h1 className="text-center text-white m-4 font-weight-bold">MY LOGO</h1>
            <div className="row mt-5 mx-2">
               <div className="col-lg my-2 mx-3 text-center" id="Seconnecter__signin">
                  <Link to={'/'} className="text-decoration-none" href="#">
                     <p className=" h4 font-weight-bold my-3 ">Se connecter</p>
                  </Link>
               </div>
               <div className="col-lg my-2 mx-3 text-center" id="Seconnecter__signup">
                  <Link to={'/Sinscrire'} className="text-decoration-none" href="#">
                     <p className=" h4 font-weight-bold  my-3 text-white">S'inscrire</p>
                  </Link>
               </div>
            </div>
            <form className="d-flex flex-column my-3 mx-2" id="SeConnecter__form">
               <div className="d-flex p-3 m-3 bg-white rounded-pill" id="SeConnecter__form__email">
                  <div className=" py-1 px-3 flex-shrink-1">
                     <img src={email} alt="" />
                  </div>
                  <div className="p-1 w-100">
                     <input className="h5" type="text" placeholder="Adresse e-mail" />
                  </div>
               </div>
               <div className="d-flex p-3 m-3 bg-white rounded-pill" id="SeConnecter__form__password">
                  <div className="py-1 px-3 flex-shrink-1">
                     <img src={password} alt="" />
                  </div>
                  <div className="p-1 w-100">
                     <input className="h5" type="password" placeholder="Mot de passe" />
                  </div>
               </div>
               <div className="px-3 m-3">
                  <a className="text-decoration-none" href="#">
                     <h5 className="px-3 text-white">Mot de passe oublié ?</h5>
                  </a>
               </div>
               <div className="d-flex justify-content-center p-3 mx-3 my-1  ">
                  <input id="Seconnecter__signin" className="font-weight-bold w-75 mx-3 p-3 h4" type="submit" value="Se connecter"/>
               </div>
            </form>
         </div>   
      </div>
   </div>
)
}
export default SeConnecter

