import React from 'react'
import {Route, Switch} from "react-router-dom"
import Menu from '../Dashboard/Menu'
import SideNav from '../Dashboard/sideNav'
import Jenseigne from './Jenseigne'
import ProfesseurAccueil from './ProfesseurAccueil'
import '../../styles/Prof.css'
import Modules from './Modules'

function professeur() {
   return(
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <Switch>
               <Route exact path="/professeur" component={ProfesseurAccueil} /> 
               <Route exact path="/professeur/Jenseigne">
                <Jenseigne />
               </Route> 
               <Route path="/professeur/Jenseigne/Modules" component={Modules} /> 
            </Switch>
         </div>
      </React.Fragment>
   )}

export default professeur
