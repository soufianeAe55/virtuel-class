import React,{useState,useCallback} from 'react'
import chapeau from '../Admin_Img/chapeau.svg'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import Tableau from '../Tableau.js'
import FiltrerCase from'../FiltrerCase.js'
function ProfesseurAdmin() {

    const [ProfesseurInfo, setEtudiantsInfo] = useState([{
        avatar:Avatar,
        Nom:"Mhb",
        Prenom:"zak",
        Classe:1,
        Filiere:1,
        DepartNb:1,
        status :"oui",
        },
        {
           avatar:Avatar,
           Nom:"ae",
           Prenom:"mouad",
           Classe :2,
           Filiere :2,
           DepartNb:2,
           status :"non",
        },
        {
           avatar:Avatar,
           Nom:"boubella",
           Prenom:"souf",
           Classe :1,
           Filiere :1,
           DepartNb:2,
           status :"non",
           },
        
        ])
        const [ProfesseurInfoV2, setProfesseurInfoV2] = useState(ProfesseurInfo);


        const changeProf =useCallback(
           (nom,classe,filiere) => {
              if(nom!=''&& classe!='' && filiere!=''){ 
                 setProfesseurInfoV2(ProfesseurInfoV2.filter(T =>((T.Nom==nom)&&(T.Classe==classe)&&(T.Filiere==filiere))));
                
                 }
                 else{
                    setProfesseurInfoV2(ProfesseurInfo);
                 }
               
           },
           [ProfesseurInfoV2],
         );
const [Verife]=useState("Professeur");


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
        <h3>Gestion des Professeurs</h3>
        </div></div>
        <div className="row mx-1 "> 
                  <div className="col-lg-9 col-md-8 col-8 bg-white rounded overflow-x-scroll ">
                
                  <Tableau Tab={ProfesseurInfoV2} verife={Verife}/>
                  </div>
                  <div className="col-lg-3 col-md-4 col-4  ">
                  <FiltrerCase  func={changeProf} verife={Verife}/>
                  </div>
                  
                  </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default ProfesseurAdmin
