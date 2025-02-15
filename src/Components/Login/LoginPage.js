import React , {useState, useEffect} from 'react'
import svgMain from './imagesLogin/svgMain.svg'
import FormSeconnecter from './FormSeconnecter';
import FormSinscrire from './FormSinscrire';
import '../../styles/LoginPage.css'
import Decode from 'jwt-decode'
import Logo from '../Dashboard/imgs/Logo_app.png'

function SeConnecter(props) {
   const [formSignIn, setformSignIn] = useState(true);
   const [idSeconecter, setidSeconecter] = useState("Seconnecter__signin");
   const [idSinscrire, setidSinscrire] = useState("Seconnecter__signup");

   useEffect(() => {
     // localStorage.removeItem('token')
    
      if(localStorage.token) {
        let data = Decode(localStorage.token)
        console.log(data)
        if(data.type == 'Etudiant' && data.class !=null){
            props.history.push('/homeEtu')
        }else  if(data.type == 'Professeur' && data.class !=null){

         props.history.push('/professeurHome')

          }else  if(data.type == 'Admin'){

            props.history.push('/AdminActu')
   
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
      <div className="row vw-100 vh-100 page_acc">
         <div className="col-xl-7  bg-white welcome">
            <div className="d-flex flex-column">
               <div className="SeConnecter_bienvenue">
                  <p>Bienvenue dans votre<br/>Classe virtuelle</p>
                  <img id="SeConnecter__image" src={svgMain} alt="" />
               </div>
            </div>
         </div>
         <div className="col-xl-5" id="Seconnecter__carte">
            <h1 className="text-center text-white m-4 font-weight-bold"><img 
            src={Logo}
            className='LogoForLogin'
             /></h1>
            <div className="row mt-4 mx-2">
               <button onClick={ Seconnecter } className="col-lg my-2 mx-3   text-center h5 font-weight-bold buttons"
                id={idSeconecter}>
                  Se connecter
               </button>
               <button onClick={ Sinscrire } className="col-lg my-2 mx-3  text-center h5 font-weight-bold buttons"
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

