import React, { useState } from 'react'
import backLink from '../../Dashboard/imgs/backLink.svg'
import SupportRow from './SupportRow'
import '../../../styles/SupportEtu.css'
import {Link} from 'react-router-dom'
import SupportRowForClass from './SupportRowForClass'

function RespoSupportEdit({Supports}) {
   const [actif1, setactif1] = useState("actif")
   const [actif2, setactif2] = useState("")
   const handleLinkOne = () => {
      setactif1("actif")
      setactif2("")
   }
   const handleLinkTwo = () => {
      setactif1("")
      setactif2("actif")
   }
   return (
      <div className="row d-flex flex-column m-4 border border-dark">
         <Link to="/support" className="p-3 svgBack">
            <img src={backLink} alt="" />
         </Link>
         <div className="d-flex RespoSupportEdit__header">
            <div onClick={handleLinkOne} className="pt-1" id={actif1}>
               <p className="mx-5">Support de classe</p> <div></div>
            </div>
            <div onClick={handleLinkTwo} className="pt-1" id={actif2}>
               <p className="mx-5">Mes supports</p>  <div></div>
            </div>
         </div>
         <div className="RespoSupportEdit__container">
         {
            (actif1==="actif") ?
            Supports.map( (Support) => (
               <SupportRowForClass Support={Support} />
            )) :
            Supports.map( (Support) => (
               <SupportRow Support={Support} />
            ))
         }
         </div>
      </div>
   )
}

export default RespoSupportEdit
