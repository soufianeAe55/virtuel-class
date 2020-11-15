import React from 'react'
import backLink from '../Dashboard/imgs/backLink.svg'
import SupportRow from './SupportRow'
import '../../styles/SupportEtu.css'
import {Link} from 'react-router-dom'



function SupportEdit() {
   return (
      <div className="row d-flex flex-column m-4 border border-dark">
         <Link to="/support" className="p-3">
            <img src={backLink} alt="" />
         </Link>
         <div className="SupportEdit__container">
            <SupportRow />
            <SupportRow />
            <SupportRow />
            <SupportRow />
         </div>
      </div>
   )
}

export default SupportEdit

