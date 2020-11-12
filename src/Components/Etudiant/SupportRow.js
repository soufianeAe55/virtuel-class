import React from 'react'
import IconSupportPc from '../Dashboard/imgs/IconSupportPc.svg';
import Pen from '../Dashboard/imgs/Pen.svg';
import Delete from '../Dashboard/imgs/delete.svg';
import ModalEditSupport from './ModalEditSupport';
import ModalDeleteSupport from './ModalDeleteSupport';


function SupportRow() {
   return (
      <div className="d-flex SupportRow">
         <div className="col-9 d-flex  justify-content-around mr-5">
            <img className="SupportRow__img my-auto" src={IconSupportPc} alt="" />
            <div className="border border-dark d-flex flex-xl-row flex-column px-5 mx-5">
               <h4 className="SupportRow__title text-center">Titre du support</h4>
               <h3 className="SupportRow__moduleName text-center">Nom du module</h3>
            </div>
         </div>
         <div className="col-3 d-flex mx-auto my-auto SupportRow__EditImages">
            <img className="border border-dark" data-toggle="modal" data-target="#EditModal" src={Pen} alt="" />
            <img className="border border-dark" data-toggle="modal" data-target="#DeleteModal" src={Delete} alt="" />
         </div>
         <ModalEditSupport />
         <ModalDeleteSupport />
      </div>
   )
}

export default SupportRow
