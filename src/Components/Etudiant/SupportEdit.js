import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/SupportEtu.css'
import backLink from '../Dashboard/imgs/backLink.svg'
import SupportRow from './SupportRow'

function SupportEdit() {
   return (
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <div className="row d-flex flex-column m-4 border border-dark ">
               <div className="p-3">
                  <img src={backLink} alt="" />
               </div>
               <div className="SupportEdit__container">
                  <SupportRow />
                  <SupportRow />
                  <SupportRow />
                  <SupportRow />
               </div>
            </div>
         </div>
      </React.Fragment>

   )
}

export default SupportEdit

