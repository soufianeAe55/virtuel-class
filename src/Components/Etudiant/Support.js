import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/SupportEtu.css'
import {Route, Switch} from "react-router-dom"
import SupportEdit from './SupportEdit'
import SupportMain from './SupportMain'
import SupportAdd from './SupportAdd'


function Support() {
 return(
   <React.Fragment>
      <SideNav />
      <div className="sous-app" >
         <Menu />
         <Switch>
            <Route path="/support" exact component={SupportMain} />
            <Route path="/support/supportEdit" component={SupportEdit} />
            <Route path="/support/supportAdd" component={SupportAdd} />
         </Switch>
      </div>
   </React.Fragment>
 )
}

export default Support
