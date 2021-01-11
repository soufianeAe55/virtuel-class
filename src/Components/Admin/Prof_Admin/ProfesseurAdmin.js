import React,{useState,useEffect,useCallback} from 'react'
import chapeau from '../Admin_Img/chapeau.svg'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import Tableau from '../Tableau.js'
import FiltrerCase from'../FiltrerCase.js'
import axios from 'axios'
import jwtdecode from 'jwt-decode'

function ProfesseurAdmin(props) {

    const [ProfesseurInfo,setProfesseurInfo] = useState([])
    const [ProfesseurInfoV2, setProfesseurInfoV2] = useState([]);
    const [departement,setDepts] = useState([])
    const [Filiere,setFils] = useState([])
    const [Classes,setClasses] = useState([]) 
    const [Module,setMods] = useState([]) 
    const [Etudiants,setEtus] = useState([]) 
    const [Professeurs,setProfs] = useState([])
    const [departProf,setDepartProf] = useState([]) 
    const [filiereProf,setFiliereProf] = useState([]) 
    const [classProf,setClassProf] = useState([])
     
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
            //  console.log(res.data)
                setDepts(res.data[0])
                setFils(res.data[1])
                setClasses(res.data[2])
                setMods(res.data[3])
                setEtus(res.data[4])
                setProfs(res.data[5])
                setProfesseurInfo(res.data[5])
                setProfesseurInfoV2(res.data[5])
                setDepartProf(res.data[6])
                setFiliereProf(res.data[7])
                setClassProf(res.data[8])
          } 
       })
       .catch(err => {
          console.log(err)
       })
 
  
 
 },[ProfesseurInfo])


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
           <Tableau Tab={ProfesseurInfoV2} verife={Verife}  module={Module} classe={Classes} filiere={Filiere} departement={departement}   classProf={classProf} filiereProf={filiereProf} departProf={departProf} Data={ProfesseurInfo}/>
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
