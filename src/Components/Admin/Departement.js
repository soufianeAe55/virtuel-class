import React, { useState } from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import {Route, Switch} from "react-router-dom"
// import '../../../styles/SupportEtu.css'
import DepartementMain from './DepartementMain'

function Departement() { 
   
   return(
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <Switch>
               <Route exact path="/depart"> 
                  <DepartementMain />
               </Route>
              
            </Switch>
         </div>
      </React.Fragment>
   )
}
export default Departement
