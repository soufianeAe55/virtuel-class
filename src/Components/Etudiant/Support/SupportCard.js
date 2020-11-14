import React, { useState } from 'react';
import IconSupportPc from '../../Dashboard/imgs/IconSupportPc.svg';
import SupportDisplay from './SupportDisplay';


function SupportCard({Support}) {
   const [Detail, setDetail] = useState(false);
   return(
      {
         Detail ? (
         <div className="card d-flex justify-content-center SupportCard">
            <img className="card-img-top pt-4 px-4 pb-2" src={IconSupportPc} alt="" />
            <div className="card-body">
               <h4 className="text-center font-weight-bold" style={{color:"rgb(18, 106, 160)"}}>
               { Support.titre }
               </h4>
               <a onClick={() => {setDetail(true)}} className="mt-4 px-4 py-2 float-right font-weight-bold" alt="" href="#">
                  Voir plus...
               </a>
            </div>
         </div>
         ) :  <SupportDisplay Support={Support} /> 
      }
   )
}

export default SupportCard;
