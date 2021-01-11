import React ,{useState,useCallback,useEffect} from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import chapeau from '../Admin_Img/chapeau.svg'
import FiltrerCase from'../FiltrerCase.js'
import Tableau from '../Tableau.js'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import jwtdecode from 'jwt-decode'
import axios from 'axios'

function Etudiant(props) {

const [Etudiants,setEtus] = useState([])   
const [departement,setDepts] = useState([])
const [Filiere,setFils] = useState([])
const [Classes,setClasses] = useState([]) 
const [EtudiantsInfo] = useState([])
const [EtudiantsInfoV2, setEtudiantsInfoV2] = useState([]);

let data=jwtdecode(localStorage.token)
   let token= 'Bearer '+localStorage.token
   let headers={
         headers : {Authorization: token}
   } 


   useEffect(() => {

   if(localStorage.token) {
      
      if(data.type != 'Admin' ){
         localStorage.removeItem('token')
            props.history.push('/')

         }

   }else{
      props.history.push('/')
   }

   axios.get('http://localhost:8000/api/getDepts',headers)
      .then(res => {
         if(res.data.MsgErr == 'JustForAdmin'){
            localStorage.removeItem('token')
            props.history.push('/notallowed')
         }
         
         if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
            localStorage.removeItem('token')
            props.history.push('/expire')
         }else if(res.data){
            
             setDepts(res.data[0])
             setFils(res.data[1])
             setClasses(res.data[2])
             setEtus(res.data[4])
             setEtudiantsInfoV2(res.data[4])
              
         } 
      })
      .catch(err => {
         console.log(err)
      })

 

},[Etudiants])

const changeEtu =useCallback(
   (nom,classe,filiere) => {
      if(nom!='intialise1'&& classe!='intialise2' && filiere!='intialise3'){ 
         setEtudiantsInfoV2(EtudiantsInfoV2.filter(T =>((T.Nom===nom)&&(T.Classe===classe)&&(T.Filiere===filiere))));
        
         }
         else{
            setEtudiantsInfoV2(Etudiants);
         }
       
   },
   [EtudiantsInfoV2],
 );

const [VerifeEtd] = useState("Etudiant");
const [Etudiantchamp]=useState({
   champ1:"Le departement",
   champ2:"La filiere",
   champ3:"La classe"

})

    return (
       
            <React.Fragment>
               <SideNav />
               <div className="sous-app" >
                  <Menu />
                  <div className="row conter2  ">
                  <div className="row  mx-0 w-100">
                  <div className="col-lg-8 col-md-10 col-12  ">
                  <div className="d-flex flex-row ">
                  <div className="p-2 my-md-2 flex-shrink-1 titre_img">
                  <img src={chapeau}/>
                  </div>
                  <div className="p-md-3 py-3 w-100">
                  <h3 className=" titre_etu">Gestion des étudiants</h3>
                  </div></div>
                  </div>
                  </div>
                  <div className="row  mx-0 w-100" >
                  <div className="col-lg-9 col-md-8 col-12  bg-white">  
                  <Tableau Tab={EtudiantsInfoV2} Tab2={Etudiantchamp} verife={VerifeEtd} Data1={departement} Data2={Filiere} Data3={Classes} Data={Etudiants}/>
                  </div>
                  <div className="col-lg-3 col-md-4 col-2  filtrer_case">
                  <FiltrerCase verife={VerifeEtd} func={changeEtu} Data={Etudiants}/>
                  </div>
                
                  </div>
                 
                  </div>
               </div>
            </React.Fragment>
         
        
    )
}

export default Etudiant
