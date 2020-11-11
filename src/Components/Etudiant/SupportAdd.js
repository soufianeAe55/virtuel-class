import React from 'react'
import backLink from '../Dashboard/imgs/backLink.svg'
import '../../styles/SupportEtu.css'
import {Link} from 'react-router-dom'

function SupportAdd() {
   return (
      <div className="row d-flex flex-column m-4 border border-dark">
         <Link to="/support" className="p-3">
            <img src={backLink} alt="" />
         </Link>
      </div>   )
}

export default SupportAdd
