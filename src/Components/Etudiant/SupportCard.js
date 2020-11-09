import React from 'react';
import IconSupportPc from '../Dashboard/imgs/IconSupportPc.svg';


function SupportCard() {
   return (
      <div className="card d-flex justify-content-center" id="SupportCard">
         <img className="card-img-top p-4" src={IconSupportPc} alt="" />
         <div className="card-body">
            <h4 className="text-center font-weight-bold" style={{color:"rgb(18, 106, 160)"}}>
            Titre du support
            </h4>
            <a className="mt-4 px-4 py-2 float-right font-weight-bold" href="#">
            Voir plus...
            </a>
         </div>
      </div>
   )
}

export default SupportCard;
