import React ,{useEffect, useState}from 'react'
import '../../../styles/Departement.css'
import Departementtab from './page1_composant/DepartementTab'
import FiliereTab from './page1_composant/FiliereTab'
import ClasseTab from './page1_composant/ClasseTab'
import ModuleTab from './page1_composant/ModulesTab'
import filtrer from '../Admin_Img/filtrer.svg'



function DepartementMain({Professeurs,Etudiants,departement , Filiere ,Classes ,Module} ) {
  
   const [FiltrerDepart, setFiltrerDepart] = useState('');
   
  const [departv2, setdepartv2] = useState([]);

   useEffect(() =>{
      setdepartv2(departement)
   },[departement])

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
   

  if(FiltrerDepart!=''&& FiltrerDepart!="Nom Departement"){
   setdepartv2(departement.filter(depart =>(depart.name===FiltrerDepart)));

   }
   else{
      setdepartv2(departement);
    
   }
   
 
   
}

  

    return(
        <React.Fragment>
           
          
               <div className="row   conterDepart  ">
               <div className="d-flex flex-row mx-3 my-2 filtrer_input ">
               <div className="col-12"><p className="">filtrer par nom de departement :</p>
               <select className="Support__dropdown_depart my-2  " onChange={(e)=>setFiltrerDepart(e.target.value)}>
               <option value="Nom Departement" selected>Nom Depart</option>
               {  departement.map(departe =>(<option key={departe.id} value={departe.nom}>{departe.nom}</option>))



               }
            </select>
               <button className="btn mx-1" type="submit" onClick={Appliquer} > Appliquer</button></div>
               
               </div>
              
               <div className ="row   mx-0 w-75 ">
               <div className="col-lg-12 col-md-10 col-8 mx-0 ">
               <div className=" d-flex w-100  departement_header ">
                <div className=" col-lg-2  entete mx-1 " onClick={handleLinkOne} id={actif1}>
                <p className="nombre "> {departv2.length}</p>
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
                  <div className ="row mx-0 w-100 ">
                  <div className=" col-lg-10 col-md-12 col-9    ">
                  {
                  (actif1==="actif")?(<Departementtab Professeurs={Professeurs} departement={departv2}  Etudiants={Etudiants} Classes={Classes} Filiere={Filiere} actif={actif1}/>) 
                   :(actif2==="actif")?(<FiliereTab Professeurs={Professeurs} Filiere={Filiere} departement={departv2}  Etudiants={Etudiants} Classes={Classes} Filiere={Filiere} actif={actif2}/>)
                   :(actif3==="actif")?<ClasseTab Professeurs={Professeurs} Filiere={Filiere} Classes={Classes} Etudiants={Etudiants} actif={actif3}/>
                   :<ModuleTab Professeurs={Professeurs} Module={Module} Classes={Classes} Etudiants={Etudiants} actif={actif4}/>
                  

                  }


               
               </div></div>
             
                  <div className="row rounded   bg-white  filter_case">
                  <div className="col-lg-12 d-flex flex-column"> 
                     <div className=" row mx-0 my-3 "> 
                     <img src={filtrer} className="mx-1"/> 
                     <p className="filtrer-text font-weight-bold">Filtrer</p>
                     </div>
                     <div className="row mx-0 my-2 w-100  "> 
                     
                     <select className="Support__dropdown_depart my-2  " onChange={(e)=>setFiltrerDepart(e.target.value)}>
                     <option value="Nom Departement" selected>Nom Depart</option>
                     {  departement.map(departe =>(<option key={departe.id} value={departe.name}>{departe.name}</option>))



                     }
                  </select>
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
