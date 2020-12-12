import React ,{useState,useCallback} from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import chapeau from '../Admin_Img/chapeau.svg'
import FiltrerCase from'../FiltrerCase.js'
import Tableau from '../Tableau.js'
import Avatar from '../../Dashboard/imgs/Avatar.svg'

function Etudiant() {
   
const [EtudiantsInfo] = useState([{
avatar:Avatar,
Nom:"Mahboub",
Prenom:"zak",
Classe :"Glsid-2",
Filiere :"Glsid",
status :"oui",
},
{
   avatar:Avatar,
   Nom:"Aouane",
   Prenom:"mouad",
   Classe :"BDCC-2",
   Filiere :"BDCC",
   status :"oui",
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
      if(nom!='intialise1'&& classe!='intialise2' && filiere!='intialise3'){ 
         setEtudiantsInfoV2(EtudiantsInfoV2.filter(T =>((T.Nom===nom)&&(T.Classe===classe)&&(T.Filiere===filiere))));
        
         }
         else{
            setEtudiantsInfoV2(EtudiantsInfo);
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
                  <Tableau Tab={EtudiantsInfoV2} Tab2={Etudiantchamp} verife={VerifeEtd} Data={EtudiantsInfo}/>
                  </div>
                  <div className="col-lg-3 col-md-4 col-2  filtrer_case">
                  <FiltrerCase verife={VerifeEtd} func={changeEtu} Data={EtudiantsInfo}/>
                  </div>
                
                  </div>
                 
                  </div>
               </div>
            </React.Fragment>
         
        
    )
}

export default Etudiant
