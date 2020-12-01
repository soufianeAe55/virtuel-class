import React ,{useState,useCallback} from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import chapeau from '../Admin_Img/chapeau.svg'
import FiltrerCase from'../FiltrerCase.js'
import Tableau from '../Tableau.js'
import Avatar from '../../Dashboard/imgs/Avatar.svg'

function Etudiant() {
   
const [EtudiantsInfo, setEtudiantsInfo] = useState([{
avatar:Avatar,
Nom:"Mhb",
Prenom:"zak",
Classe :"Glsid-2",
Filiere :"Glsid",
status :"oui",
},
{
   avatar:Avatar,
   Nom:"ae",
   Prenom:"mouad",
   Classe :"BDCC-2",
   Filiere :"BDCC",
   status :"non",
},
{
   avatar:Avatar,
   Nom:"boubella",
   Prenom:"souf",
   Classe :"Glsid-2",
   Filiere :"Glsid",
   status :"non",
   },

])
const [EtudiantsInfoV2, setEtudiantsInfoV2] = useState(EtudiantsInfo);


const changeEtu =useCallback(
   (nom,classe,filiere) => {
      if(nom!=''&& classe!='' && filiere!=''){ 
         setEtudiantsInfoV2(EtudiantsInfoV2.filter(T =>((T.Nom===nom)&&(T.Classe===classe)&&(T.Filiere===filiere))));
        
         }
         else{
            setEtudiantsInfoV2(EtudiantsInfo);
         }
       
   },
   [EtudiantsInfoV2],
 );

const [VerifeEtd, setVerifeEtd] = useState("Etudiant");
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
                  <div className="conter">
                   <div className="d-flex flex-row ">
                  <div className="p-2 my-2 flex-shrink-1 ">
                  <img src={chapeau}/>
                  </div>
                  <div className="p-3 w-100 titre_etu">
                  <h3>Gestion des étudiants</h3>
                  </div></div>
                  
                  <div className="row mx-1 "> 
                  <div className="col-lg-9 col-md-8 col-8 bg-white rounded overflow-x-scroll ">
                
                  <Tableau Tab={EtudiantsInfoV2} Tab2={Etudiantchamp}verife={VerifeEtd}/>
                  </div>
                  <div className="col-lg-3 col-md-4 col-4  ">
                  <FiltrerCase verife={VerifeEtd} func={changeEtu}/>
                  </div>
                  
                  </div>
                  
                 
                  </div>
               </div>
            </React.Fragment>
         
        
    )
}

export default Etudiant
