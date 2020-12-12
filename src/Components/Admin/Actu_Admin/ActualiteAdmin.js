import React,{useState,useCallback} from 'react'
import chapeau from '../Admin_Img/chapeau.svg'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import Tableau from '../Tableau.js'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import FiltrerCase from'../FiltrerCase.js'

import ModalApprouver from "../ModalApprouver.js"

function ActualiteAdmin() {
    const [ActualiteInfo] = useState([{
        avatar:Avatar,
        Titre:"xxxxxx",
        Date:"20/10/2020",
        Description :"xxxxxxxxxxxxxxxxxxxxx",
        
        },
        {
            avatar:Avatar,
            Titre:"xxxxxx-1",
            Date:"20/11/2020",
            Description :"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            
            },
        {
            avatar:Avatar,
            Titre:"xxxxxx-2",
            Date:"20/12/2020",
            Description :"yyyyyyyyyyyyyyyyyyyyyyyy",
            
            },
        
        ])
        const [ActualiteInfoV2, setActualiteInfoV2] = useState(ActualiteInfo);


        const changeActu =useCallback(
           (Titre,Date) => {
              if(Titre!=='intialise1'&& Date!=='intialise2'){ 
                 setActualiteInfoV2(ActualiteInfoV2.filter(T =>((T.Titre==Titre)&&(T.Date==Date))));
                
                 }
                 else{
                    setActualiteInfoV2(ActualiteInfo);
                 }
               
           },
           [ActualiteInfoV2],
         );

        const [Verife]=useState("Actualite");
        const [Actualitechamp]=useState({
            champ1:"Titre",
            champ2:"Date",
            champ3:"Description"

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
           <h3 className=" titre_etu">Gestion des actualites</h3>
           </div></div>
           </div>
           </div>
           <div className="row  mx-0 w-100" >
           <div className="col-lg-9 col-md-8 col-12  bg-white">  
           <ModalApprouver Tab2={Actualitechamp} verife={Verife} Data={ActualiteInfo}/>
      
           <Tableau Tab={ActualiteInfoV2} Tab2={Actualitechamp} verife={Verife} Data={ActualiteInfo}/>
         
           </div>
           <div className="col-lg-3 col-md-4 col-2  filtrer_case">
           <FiltrerCase  func={changeActu} verife={Verife} Data={ActualiteInfo}/>
           </div>
         
           </div>
          
           </div></div>
        </React.Fragment>
    )
}

export default ActualiteAdmin
