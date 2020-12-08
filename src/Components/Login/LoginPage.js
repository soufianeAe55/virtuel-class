import React , {useState, useEffect} from 'react'
import svgMain from './imagesLogin/svgMain.svg'
import FormSeconnecter from './FormSeconnecter';
import FormSinscrire from './FormSinscrire';
import '../../styles/LoginPage.css'
import Decode from 'jwt-decode'

function SeConnecter(props) {
   const [formSignIn, setformSignIn] = useState(true);
   const [idSeconecter, setidSeconecter] = useState("Seconnecter__signin");
   const [idSinscrire, setidSinscrire] = useState("Seconnecter__signup");

   useEffect(() => {
     // localStorage.removeItem('token')
      if(localStorage.token) {
        let data = Decode(localStorage.token)
        if(data.type == 'Etudiant'){
            props.history.push('/homeEtu')
        }else  if(data.type == 'Professeur'){

         props.history.push('/professeur')

         }else{
            props.history.push('/')
        }
      }
   })

   const Seconnecter = () => {
      setformSignIn(true);
      if(!formSignIn){
         setidSinscrire(idSeconecter); 
         setidSeconecter(idSinscrire); 
      }
   }
   const Sinscrire = () => {
      setformSignIn(false);
      if(formSignIn){
         setidSinscrire(idSeconecter);
         setidSeconecter(idSinscrire);
      }
   }

return(
      <div className="row vw-100 vh-100">
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
               <button onClick={ Seconnecter } className="col-lg my-2 mx-3 p-3 text-center h4 font-weight-bold"
                id={idSeconecter}>
                  Se connecter
               </button>
               <button onClick={ Sinscrire } className="col-lg my-2 mx-3 p-3 text-center h4 font-weight-bold"
                id={idSinscrire} >
                  S'inscrire
               </button>
            </div>
            {  formSignIn ? <FormSeconnecter /> : <FormSinscrire />  }
         </div>   
      </div>
)
}
export default SeConnecter

