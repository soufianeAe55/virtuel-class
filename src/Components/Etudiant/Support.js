import React, { useState } from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import {Route, Switch} from "react-router-dom"
import SupportEdit from './SupportEdit'
import SupportMain from './SupportMain'
import SupportAdd from './SupportAdd'
import '../../styles/SupportEtu.css'

function Support() {
   const [Supports] = useState([
      {
         titre:"Java playlist",
         nomPrenom:"mouad aouane",
         module:"java poo",
         description:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
      },
      {
         titre:"les videos xml",
         nomPrenom:"mouad aouane",
         module:"xml et les framworks",
         description:"lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu"
      }]
   )
   return(
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <Switch>
               <Route exact path="/support"> <SupportMain Supports={Supports} /> </Route>
               <Route path="/support/supportEdit" component={SupportEdit} />
               <Route path="/support/supportAdd" component={SupportAdd} />
            </Switch>
         </div>
      </React.Fragment>
   )
}

export default Support
