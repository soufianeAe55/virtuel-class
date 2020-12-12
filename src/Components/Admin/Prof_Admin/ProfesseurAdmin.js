import React,{useState,useCallback} from 'react'
import chapeau from '../Admin_Img/chapeau.svg'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import Tableau from '../Tableau.js'
import FiltrerCase from'../FiltrerCase.js'
function ProfesseurAdmin() {

    const [ProfesseurInfo] = useState([{
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
              if(nom!='intialise1'&& classe!='intialise2' && filiere!='intialise3'){ 
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
           <div className="row conter2  ">
           <div className="row  mx-0 w-100">
           <div className="col-lg-8 col-md-10 col-12  ">
           <div className="d-flex flex-row ">
           <div className="p-2 my-md-2 flex-shrink-1 titre_img">
           <img src={chapeau}/>
           </div>
           <div className="p-md-3 py-3 w-100">
           <h3 className=" titre_etu">Gestion des Professeurs</h3>
           </div></div>
           </div>
           </div>
           <div className="row  mx-0 w-100" >
           <div className="col-lg-9 col-md-8 col-12  bg-white">  
           <Tableau Tab={ProfesseurInfoV2} verife={Verife} Data={ProfesseurInfo}/>
           </div>
           <div className="col-lg-3 col-md-4 col-2  filtrer_case">
           <FiltrerCase  func={changeProf} verife={Verife} Data={ProfesseurInfo}/>
           </div>
         
           </div>
          
           </div> </div>
        </React.Fragment>
    )
}

export default ProfesseurAdmin
