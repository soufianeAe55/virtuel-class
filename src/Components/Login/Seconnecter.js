import React from 'react'
import './Logincss/Seconnecter.css';
function Seconnecter() {
    return (
       <div className="seConnecter"> <div className="container-fluide">
      <div className="row vh-100" id="ligne">
         <div className="col-lg-8">
            <h1>Hello app</h1>
         </div>
         <div className="col-lg-4  " id="card" >
           
            <h1 className="display-4  text-center py-5 font-weight-bold">My Logo</h1>
            <div className="row justify-content-around" id="nn">
               <div className="col-lg-5 col-md-11 col-11 " id ="seconnecter"><a className="text-white text-center py-5 font-weight-bold" href="#">
               <p>Se connecter</p></a></div>
               <div className=" col-lg-5 col-md-11 col-11" id="inscri"><a className="text-white text-center py-5 font-weight-bold" href="#"><p>S'inscrire</p></a></div>  
            </div>
            <div className="row justify-content-around " id="rowd">
            <div className=" col-lg-12 col-md-12 col-12" id="inp"> 
            <form>
            <input type="text" placeholder="Votre mail"/> 
            <input type ="password" placeholder="votre mot de passe "/>
            <p>mot de passe oublié ?</p>
            <input type="submit " value="Se connecter" id ="sub"/>
            </form>
            </div>
           



            </div>
         </div>
      </div>
   </div>
        </div>
     
    )
}

export default Seconnecter
