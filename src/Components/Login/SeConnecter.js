import React from 'react'
import './LoginPage.css'
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function SeConnecter() {
   return(
      <div className="container-fluide">

         <div className="row">
            <div class="col-xl-7">
               <h1>Hello app</h1>
            </div>
            <div className="col-xl-5 my-2" id="Seconnecter__carte">
               <h1 className="display-4 text-white text-center py-5 font-weight-bold">My Logo</h1>
               
                  <div className="row justify-content-around mx-auto px-2">
                     <a class="col-sm-5 text-center text-decoration-none text-center font-weight-bold my-2" id="Seconnecter__signin"  href="#">
                        Se connecter
                     </a>
                     <a class="col-sm-5 text-decoration-none text-white text-center font-weight-bold my-2" id="Seconnecter__signup"  href="#">
                        S'inscrire
                     </a>
                  </div>
               
            </div>
         </div>

      </div>
   )
}

export default SeConnecter