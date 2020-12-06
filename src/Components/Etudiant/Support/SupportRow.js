import React, {useState,useEffect} from 'react'
import IconSupportPc from '../../Dashboard/imgs/IconSupportPc.svg';
import Pen from '../../Dashboard/imgs/Pen.svg';
import Delete from '../../Dashboard/imgs/delete.svg';
import ModalEditSupport from './ModalEditSupport';
import ModalDeleteSupport from './ModalDeleteSupport';


function SupportRow(props) {
   const [editMod,setEditMod]=useState(false)
   const [DeleteMod,setDeleteMod]=useState(false)
   const [supportForBackEnd,setSupportForBE]=useState({})
   

   return (
      <div className="d-flex SupportRow"   >
         <div className="col-9 d-flex mx-5">
            <img className="props.SupportRow__img my-auto" src={IconSupportPc} alt="" />
            <div className="d-flex flex-xl-row flex-column px-5 mx-5">
               <h4 className="SupportRow__title text-center">{props.Support.titre}</h4>
               <h3 className="SupportRow__moduleName text-center">{props.Support.module+' '+props.Support.semstre}</h3>
            </div>
         </div>
         <div className="col-3 d-flex mx-auto my-auto SupportRow__EditImages">
            <img data-toggle="modal"  data-target="#EditModal"  src={Pen} alt="" />
            <img data-toggle="modal" data-target="#DeleteModal" src={Delete} alt="" />
         </div>

         
      </div>
   )
}

export default SupportRow
