import React, { useState } from 'react'
import backLink from '../../Dashboard/imgs/backLink.svg'
import SupportRow from './SupportRow'
import '../../../styles/SupportEtu.css'
import {Link} from 'react-router-dom'
import SupportRowForClass from './SupportRowForClass'
import IconSupportPc from '../../Dashboard/imgs/IconSupportPc.svg';
import Pen from '../../Dashboard/imgs/Pen.svg';
import Delete from '../../Dashboard/imgs/delete.svg';
import ModalEditSupport from './ModalEditSupport';
import ModalDeleteSupport from './ModalDeleteSupport';




function RespoSupportEdit({Supports}) {
   const [actif1, setactif1] = useState("actif")
   const [actif2, setactif2] = useState("")

   const [editMod,setEditMod]=useState(false)
   const [DeleteMod,setDeleteMod]=useState(false)
   const [supportForBackEnd,setSupportForBE]=useState({})
   
   const handleLinkOne = () => {
      setactif1("actif")
      setactif2("")
   }
   const handleLinkTwo = () => {
      setactif1("")
      setactif2("actif")
   }
  
   
   const sendToModal= (supp) => {
      //console.log(supp)
      setSupportForBE(supp)
   }

   return (
      <div className="row d-flex flex-column m-4">
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
            ( actif1==="actif" ) ?
            Supports.map( (Support) => (

               <div className="d-flex SupportRow">
         <div className="col-9 d-flex mx-5">
            <img className="SupportRow__img my-auto" src={IconSupportPc} alt="" />
            <div className="d-flex flex-xl-row flex-column px-5 mx-5">
               <h4 className="SupportRow__title text-center">{Support.titre}</h4>
               <h3 className="SupportRow__moduleName text-center">{Support.module+' '+Support.semstre}</h3>
            </div>
         </div>
         <div className="col-3 d-flex mx-auto my-auto SupportRow__EditImages">
            <img data-toggle="modal" onClick={sendToModal.bind(this,Support)} data-target="#DeleteModal" src={Delete} alt="" />
         </div>
         
      </div>
            )) 
            :
            Supports.map( (Support,key)   => 
           
               {return( 
                  <div className="d-flex SupportRow"   >
                  <div className="col-9 d-flex mx-5">
                     <img className="props.SupportRow__img my-auto" src={IconSupportPc} alt="" />
                     <div className="d-flex flex-xl-row flex-column px-5 mx-5">
                        <h4 className="SupportRow__title text-center">{Support.titre}</h4>
                        <h3 className="SupportRow__moduleName text-center">{Support.module+' '+Support.semstre}</h3>
                     </div>
                  </div>
                  <div className="col-3 d-flex mx-auto my-auto SupportRow__EditImages">
                     <img data-toggle="modal"   onClick={sendToModal.bind(this,Support)} data-target="#EditModal"  src={Pen} alt="" />
                     <img data-toggle="modal" onClick={sendToModal.bind(this,Support)} data-target="#DeleteModal" src={Delete} alt="" />
                  </div>
         
                  
               </div>
               )
            })
         }
         <ModalEditSupport support={supportForBackEnd} /> 
         <ModalDeleteSupport support={supportForBackEnd} />
         </div>
      </div>
   )
}

export default RespoSupportEdit
