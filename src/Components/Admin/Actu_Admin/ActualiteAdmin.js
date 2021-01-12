import React,{useState,useCallback,useEffect} from 'react'
import chapeau from '../Admin_Img/chapeau.svg'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import Tableau from '../Tableau.js'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import FiltrerCase from'../FiltrerCase.js'
import ModalApprouver from "../ModalApprouver.js"
import axios from 'axios'
import jwtdecode from 'jwt-decode'



 
function ActualiteAdmin(props) {

    const [ActualiteInfo,setActualiteInfo] = useState([])
    const [ActualiteInfoV2, setActualiteInfoV2] = useState([]);

      
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

       axios.get('http://localhost:8000/api/getActus/',headers)
          .then(res => {
             if(res.data.MsgErr == 'JustForAdmin'){
                localStorage.removeItem('token')
                props.history.push('/notallowed')
             }
             
             if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
                localStorage.removeItem('token')
                props.history.push('/expire')
             }else if(res.data){
                 
                setActualiteInfo(res.data.payloads)
                setActualiteInfoV2(res.data.payloads)
             } 
          })
          .catch(err => {
             console.log(err)
          })

     

    },[setActualiteInfoV2])


        const changeActu =useCallback(
           (Titre,Date) => {
              if(Titre!=='intialise1'&& Date!=='intialise2'){ 
                 setActualiteInfoV2(ActualiteInfoV2.filter(T =>((T.data.name==Titre)&&(T.data.date==Date))));
                
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
