import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import backLink from '../../Dashboard/imgs/backLink.svg'
import avatar from '../../Dashboard/imgs/Avatar.svg'
import File from "../ImageEtd/File.svg"
import download from "../ImageEtd/download.svg"
import moment from 'moment'

function SupportDisplay(props) {
   console.log(props.location.state)
    let fullName= props.location.state.userEmail.split('-')[0].split('.')
    let firstName=fullName[0]
    let lastName=fullName[1]
   return (
      <div className="row d-flex flex-column ml-3 mr-0">
         <Link to="/support" className="p-3 svgBack">
            <img src={backLink} alt="" />
         </Link>

         <div className="d-flex flex-column col-11 col-lg-7 my-4 px-3 mx-auto SupportDisplay__card">
            <img className="" src={avatar} alt="" />
            <h2 className=" mt-0">{props.location.state.titre}</h2>
            <p className="nomPrenom">{firstName} {lastName}</p>
            <h4>{"Module : "+props.location.state.module+' '+props.location.state.semstre}</h4>
            <p>
            <h3>Description</h3>
            {props.location.state.contenu}
            </p>
            {props.location.state.fileName !='' ?<div className="d-flex justify-content-center flex-column flex-md-row my-4 SupportDisplay__card__footer">
               <div className="d-flex mx-auto  py-1 ">
                  <img className="py-0" src={File} alt="" />
                  <p className="">{props.location.state.fileName}</p>
               </div>
               <a href={'http://localhost:8000/supports/'+moment(props.location.state.date).format('DD-MM-YYYY')+'_'+props.location.state.fileName} className="mx-auto">
                  <img src={download} alt=""  />
               </a>
            </div>:null}
         </div>
      </div>
   )
}

export default SupportDisplay
