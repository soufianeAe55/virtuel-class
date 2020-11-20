import React ,{useState,useEffect}from 'react'
import '../../styles/Departement.css'
import Departementtab from './page1_composant/DepartementTab'
import FiliereTab from './page1_composant/FiliereTab'
import ClasseTab from './page1_composant/ClasseTab'
import ModuleTab from './page1_composant/ModulesTab'
import filtrer from './Admin_Img/filtrer.svg'


function DepartementMain({departement , Filiere ,Classes ,Module} ) {
  
   const [FiltrerDepart, setFiltrerDepart] = useState('');
   
  const [departv2, setdepartv2] = useState(departement);
  const [verife, setverife] = useState(false)

  const [actif1, setactif1] = useState("actif")
  const [actif2, setactif2] = useState("")
  const [actif3, setactif3] =useState("")
  const [actif4, setactif4] =useState("")
  const handleLinkOne = () => {
     setactif1("actif")
     setactif2("")
     setactif3("")
     setactif4("")
  }
  const handleLinkTwo = () => {
     setactif1("")
     setactif2("actif")
     setactif3("")
     setactif4("")
  }
  const handleLinkThree = () => {
    setactif1("")
    setactif2("")
    setactif3("actif")
    setactif4("")

 }
 const handleLinkfour = () => {
  setactif1("")
  setactif2("")
  setactif3("")
    setactif4("actif")
}


const Appliquer =()=>{
   console.log(FiltrerDepart);

  if(FiltrerDepart!=''){
   setdepartv2(departement.filter(depart =>(depart.nom==FiltrerDepart)));
   console.log(FiltrerDepart);}
   else{
      setdepartv2(departement);
   }
   
 
   
}


    return(
        <React.Fragment>
           
          
               <div className="row   conterDepart  ">
               <div className="d-flex flex-row mx-3 my-2 filtrer_input">
               <div className="col-12"><p className="">filtrer par nom de departement :</p>
               <input type="text " className="w-50 "/>
               <button className="btn mx-1" type="submit" onClick={Appliquer} > Appliquer</button></div>
               
               </div>
              
               <div className ="row   mx-0 w-75 ">
               <div className="col-lg-12 col-md-10 col-12 mx-0 ">
               <div className=" d-flex w-100  departement_header ">
                <div className=" col-lg-2  entete mx-1 " onClick={handleLinkOne} id={actif1}>
                <p className="nombre "> {departement.length}</p>
                <p>Departement</p>
                </div>
                <div className=" col-lg-2  entete mx-1" onClick={handleLinkTwo} id={actif2}>
                <p className="nombre"> {Filiere.length}</p>
                <p>Filière</p>
                </div>
                <div className=" col-lg-2  entete mx-1" onClick={handleLinkThree} id={actif3}>
                <p className="nombre"> {Classes.length}</p>
                <p>Classes</p>
                </div>
                <div className=" col-lg-2  entete mx-1"   onClick={handleLinkfour} id={actif4} >
                <p className="nombre"> {Module.length}</p>
                <p>Modules</p>
                </div>
               
               </div>
              
               </div>
               </div>
                  <div className ="row mx-0 w-100">
                  <div className=" col-lg-10 col-md-11 col-12   ">
                  {
                  (actif1==="actif")?<Departementtab departement={departv2}/>
                   :(actif2==="actif")?<FiliereTab Filiere={Filiere}/>
                   :(actif3==="actif")?<ClasseTab Classes={Classes}/>
                   :<ModuleTab Module={Module}/>
                  

                  }


               
               </div></div>
             
                  <div className="row rounded   bg-white  filter_case">
                  <div className="col-lg-12 d-flex flex-column"> 
                     <div className=" row mx-0 my-3 "> 
                     <img src={filtrer} className="mx-1"/> 
                     <p className="filtrer-text font-weight-bold">Filtrer</p>
                     </div>
                     <div className=" mx-0 my-3  "> 
                     <p className="nom_depart font-weight-bold">Nom Depart</p>
                     <input className="w-100 "  type="text" onChange={(e)=>setFiltrerDepart(e.target.value)
                     
                     }/>
                     </div>
                     <div className=" mx-0 my-3  "> 
                     <p className="nom_depart font-weight-bold">Nom De Chef</p>
                     <input className="w-100 "  type="text"/>
                     </div>
                  
                     <div className="  mx-0 my-2  text-right"> 
                     <button className="btn" type="submit" onClick={Appliquer} > Appliquer</button>
                     </div>
                  </div>
                     

                  </div>
              
               </div>
           
       
       </React.Fragment>
       )
}



export default DepartementMain
