import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import backLink from '../../Dashboard/imgs/backLink.svg'
import avatar from '../../Dashboard/imgs/Avatar.svg'
import File from "../ImageEtd/File.svg"
import download from "../ImageEtd/download.svg"

function SupportDisplay(props) {
    const [Support] = useState(props.location.state)
   return (
      <div className="row d-flex flex-column ml-3 mr-0">
         <Link to="/support" className="p-3 svgBack">
            <img src={backLink} alt="" />
         </Link>

         <div className="d-flex flex-column col-11 col-lg-7 my-4 px-3 mx-auto SupportDisplay__card">
            <img className="" src={avatar} alt="" />
            <h2 className=" mt-0">{Support.titre}</h2>
            <p className="nomPrenom">{Support.nomPrenom}</p>
            <h4>{"Module : "+Support.module+' '+Support.semestre}</h4>
            <p>
            <h3>Description</h3>
            {Support.description}
            </p>
            <div className="d-flex justify-content-center flex-column flex-md-row my-4 SupportDisplay__card__footer">
               <div className="d-flex mx-auto  py-1 ">
                  <img className="py-0" src={File} alt="" />
                  <p className="">Nom du fichier</p>
               </div>
               <button className="mx-auto">
                  <img src={download} alt=""  />
               </button>
            </div>
         </div>
      </div>
   )
}

export default SupportDisplay
