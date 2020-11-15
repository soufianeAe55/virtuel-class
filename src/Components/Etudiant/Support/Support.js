import React, { useState } from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import {Route, Switch} from "react-router-dom"
import SupportEdit from './SupportEdit'
import SupportMain from './SupportMain'
import SupportAdd from './SupportAdd'
import SupportDisplay from './SupportDisplay'
import '../../../styles/SupportEtu.css'


function Support() {
   const [Supports] = useState([
      {
         titre:"Java playlist",
         nomPrenom:"mouad aouane",
         module:"java poo",
         semestre:"S3",
         description:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
      },
      {
         titre:"Cpp pdf",
         nomPrenom:"mouad aouane",
         module:"cpp poo",
         semestre:"S2",
         description:"lojrwe lojrwe lojrwe lojrwe lojrwe lojrwe lojrwe lojrwe lojrwe lojrwe lorem"
      },
      {
         titre:"les videos xml",
         nomPrenom:"mouad aouane",
         module:"xml et les framworks",
         semestre:"S3",
         description:"lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu lotxeu"
      }
   ])
   return(
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <Switch>
               <Route exact path="/support"> 
                  <SupportMain Supports={Supports} />
               </Route>

               <Route path="/support/supportEdit">
                  <SupportEdit Supports={Supports} />
               </Route>

               <Route path="/support/supportAdd">
                  <SupportAdd />
               </Route>

               <Route path="/support/supportDisplay" component={SupportDisplay} />
            </Switch>
         </div>
      </React.Fragment>
   )
}
export default Support
