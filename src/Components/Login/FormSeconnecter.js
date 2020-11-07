import React from 'react';
import password from './imagesLogin/password.svg';
import email from './imagesLogin/email.svg';


function FormSeconnecter() {
   return (
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
            <input id="Seconnecter__signin" className="font-weight-bold w-75 mx-3 p-3 h5" type="submit" value="Se connecter"/>
         </div>
      </form>
   )
}

export default FormSeconnecter
