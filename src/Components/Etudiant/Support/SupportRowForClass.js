import React from 'react'
import IconSupportPc from '../../Dashboard/imgs/IconSupportPc.svg';
import Pen from '../../Dashboard/imgs/Pen.svg';
import Delete from '../../Dashboard/imgs/delete.svg';
import ModalEditSupport from './ModalEditSupport';
import ModalDeleteSupport from './ModalDeleteSupport';


function SupportRowForClass({Support}) {
   return (
      <div className="d-flex SupportRow">
         <div className="col-9 d-flex mx-5">
            <img className="SupportRow__img my-auto" src={IconSupportPc} alt="" />
            <div className="d-flex flex-xl-row flex-column px-5 mx-5">
               <h4 className="SupportRow__title text-center">{Support.titre}</h4>
               <h3 className="SupportRow__moduleName text-center">{Support.module+' '+Support.semstre}</h3>
            </div>
         </div>
         <div className="col-3 d-flex mx-auto my-auto SupportRow__EditImages">
            <img data-toggle="modal" data-target="#DeleteModal" src={Delete} alt="" />
         </div>
         
         <ModalDeleteSupport support={Support} />
      </div>
   )
}

export default SupportRowForClass
