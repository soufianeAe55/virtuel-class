import React from 'react'
import './LoginPage.css'
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function SeConnecter() {
   return (
      <div className="SeConnecter">
         <div className="SeConnecter__carte">
            <h1>My Logo</h1>
            <div className="SeConnecter__SignInSignUp">
               <a className="SeConnecter__SignInSignUp_bgWhite" href="#">
                  <p>Se connecter</p>
               </a>
               <a className="SeConnecter__SignInSignUp_bgBlue" href="#">
                  <p>S'inscrire</p>
               </a>
            </div>

            <form className="SeConnecter__form">

               <div className="SeConnecter__form_email">
                  <svg width="35" height="35" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M26.1515 4.08008H3.05702C2.67793 4.08008 2.32303 4.17316 2.00195 4.32659L14.5495 16.8588L17.3618 14.1593C17.3618 14.1593 17.3621 14.1591 17.3621 14.159C17.3622 14.1588 17.3624 14.1587 17.3624 14.1587L27.2069 4.32681C26.8858 4.17327 26.5307 4.08008 26.1515 4.08008Z" fill="#126AA0" fill-opacity="0.95"/>
                  <path d="M28.3697 5.48633L19.1055 14.7387L28.3694 23.9912C28.523 23.6706 28.6162 23.3161 28.6162 22.9375V6.53972C28.6162 6.16131 28.5232 5.8069 28.3697 5.48633Z" fill="#126AA0" fill-opacity="0.95"/>
                  <path d="M0.842518 5.48633C0.688902 5.80701 0.595703 6.16148 0.595703 6.5401V22.9379C0.595703 23.3163 0.688792 23.6708 0.842299 23.9914L10.1065 14.739L0.842518 5.48633Z" fill="#126AA0" fill-opacity="0.95"/>
                  <path d="M17.943 15.8985L15.1303 18.5983C14.97 18.7585 14.7599 18.8386 14.55 18.8386C14.34 18.8386 14.1299 18.7585 13.9696 18.5983L11.2663 15.8984L2.00195 25.1509C2.32309 25.3044 2.6782 25.3976 3.0574 25.3976H26.1519C26.531 25.3976 26.8859 25.3045 27.2069 25.1511L17.943 15.8985Z" fill="#126AA0" fill-opacity="0.95"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="28.0198" height="27.9855" fill="white" transform="translate(0.595703 0.746094)"/>
                  </clipPath>
                  </defs>
                  </svg>

                  <input type="text" placeholder="Entrez votre email" />
               </div>

               <div className="SeConnecter__form_password">
                     <svg width="35" height="35" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0)">
                     <path d="M25.4414 8.39908H23.5581V2.74818C23.5581 1.62381 22.5208 0.708984 21.2455 0.708984H13.9437C12.6686 0.708984 11.6311 1.62381 11.6311 2.74818V8.39908H9.7904C7.1372 8.39908 4.97852 10.3031 4.97852 12.6435V26.4496C4.97852 28.7896 7.1372 30.6934 9.7904 30.6934H25.4414C28.0943 30.6934 30.2528 28.7896 30.2528 26.4496V12.6435C30.2528 10.3031 28.0943 8.39908 25.4414 8.39908ZM13.6247 2.74818C13.6247 2.59239 13.7677 2.46588 13.9437 2.46588H21.2455C21.4215 2.46588 21.5645 2.59239 21.5645 2.74818V8.39908H13.6247V2.74818ZM21.7509 21.1997C21.3094 21.7584 20.7367 22.2145 20.0719 22.5414V24.474C20.0719 24.9592 19.6257 25.3525 19.0751 25.3525H16.1567C15.6061 25.3525 15.1599 24.9592 15.1599 24.474V22.5417C14.4951 22.2147 13.9224 21.7586 13.4809 21.2C12.8898 20.4524 12.5773 19.5739 12.5773 18.6598C12.5773 16.215 14.832 14.2213 17.6036 14.2154H17.6153C20.3938 14.2154 22.6543 16.209 22.6543 18.6598C22.6545 19.5739 22.342 20.4524 21.7509 21.1997Z" fill="#126AA0" fill-opacity="0.95"/>
                     <path d="M17.6147 15.9727H17.6054C15.9329 15.9763 14.5703 17.1819 14.5703 18.6602C14.5703 19.7623 15.3524 20.7701 16.5161 21.1672C16.8998 21.2983 17.1529 21.6236 17.1529 21.9864V23.5957H18.0778V21.9864C18.0778 21.6238 18.3306 21.2985 18.7143 21.1674C19.8783 20.7696 20.6601 19.7621 20.6601 18.6602C20.6604 17.1782 19.2939 15.9727 17.6147 15.9727Z" fill="#126AA0" fill-opacity="0.95"/>
                     </g>
                     <defs>
                     <clipPath id="clip0">
                     <rect width="34.0241" height="29.9845" fill="white" transform="translate(0.591797 0.708984)"/>
                     </clipPath>
                     </defs>
                     </svg>
                  <input type="password" placeholder="Tapez votre mot de passe" />
               </div>
               <a href="#" className="">
                  <h3>Mot de passe oublié ?</h3>
               </a>
               <input type="submit" value="Se connecter"/>
            </form>
         </div>
      </div>
   )
}

export default SeConnecter
