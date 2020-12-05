import React, { useState } from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import {Route, Switch} from "react-router-dom"
// import '../../../styles/SupportEtu.css'
import DepartementMain from './DepartementMain'


function Departement() {
   const [departement] = useState([{
      nom:"math-info",
      chef :"Aziz Daaif",
      nbFiliere:3,
      nbEtd:100,

   },
   {
      nom:"mecanique",
      chef :"XXXXXXX",
      nbFiliere:4,
      nbEtd:136,

   },
   {
      nom:"electrique",
      chef :"XXXXXXX",
      nbFiliere:3,
      nbEtd:100,

   },

]);
const [Filiere] = useState([{
   nom:"Glsid",
   CoordinateurFi :"Qbadou", 
   nbEtd:100,
   depart:"math-info"

},
{
   nom:"Bdcc",
   CoordinateurFi :"XXXX",
   nbEtd:100,
   depart:"math-info"

},
{
   nom:"Gmsi",
   CoordinateurFi :"XXXXX",
   nbEtd:100,
   depart:"mecanique"

},])
 const [Classes] = useState([{
   nom :"Glsid-1", 
   nbetd :35,
   Responsable:"XXXXX",
   depart:"math-info"


 },{
   nom :"Bdcc-1", 
   nbetd :35,
   Responsable:"XXXXX",
   depart:"math-info"


 },{
   nom :"Gmsi-1", 
   nbetd :35,
   Responsable:"XXXXX",
   depart:"mecanique"


 },



]) ;
const [Module] = useState([{
nom:"Dev-web",
NbHeures:25,
depart:"math-info",
prof:"DAAIF AZIZ"

},
{
   nom:"XXXXXX",
   NbHeures:28,
   depart:"math-info",
   prof:"XXXXXXXX"
   
   },
   {
      nom:"XXXXXX",
      NbHeures:30,
      depart:"mecanique",
      prof:"XXXXXXXX"
      
      },

]) 

   
   return(
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <Switch>
               <Route exact path="/depart"> 
                  <DepartementMain departement={departement} Filiere={Filiere} Classes={Classes} Module={Module}/>
               </Route>
             
              
            </Switch>
         </div>
      </React.Fragment>
   )
}
export default Departement
