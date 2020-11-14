import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import backLink from '../../Dashboard/imgs/backLink.svg'
import avatar from '../../Dashboard/imgs/Avatar.svg'

function SupportDisplay(props) {
    const [Support] = useState(props.location.state)
   return (
      <div className="row d-flex flex-column m-4 border border-dark ">
         <Link to="/support" className="p-3">
            <img src={backLink} alt="" />
         </Link>

         <div className="d-flex flex-column col-11 col-lg-7 my-4 mx-auto border border-dark SupportDisplay__card">
            <div className="d-flex border border-dark">
               <img src={avatar} alt="" />
               <h2 className="mx-auto border border-dark">{Support.titre}</h2>
            </div>
            <p className="nomPrenom">{Support.nomPrenom}</p>
            <h4>{Support.module+' '+Support.semestre}</h4>
            <p>
            <h3>Description</h3>
            {Support.description}
            </p>
         </div>
      </div>
   )
}

export default SupportDisplay
