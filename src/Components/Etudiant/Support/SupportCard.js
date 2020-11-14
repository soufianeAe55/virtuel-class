import React from 'react';
import { Link } from 'react-router-dom';
import IconSupportPc from '../../Dashboard/imgs/IconSupportPc.svg';
import SupportDisplay from './SupportDisplay';


function SupportCard({Support}) {
   // const [Detail, setDetail] = useState(false);
   return(

         <div className="card d-flex justify-content-center SupportCard">
            <img className="card-img-top pt-4 px-4 pb-2" src={IconSupportPc} alt="" />
            <div className="card-body">
               <h4 className="text-center font-weight-bold" style={{color:"rgb(18, 106, 160)"}}>
               { Support.titre }
               </h4>
               <Link to={{
                  pathname:'/support/supportDisplay',
                  state:{...Support}
               }} 
               className="mt-4 px-4 py-2 float-right font-weight-bold">
                  Voir plus...
               </Link>
            </div>
         </div>
         
   )
}

export default SupportCard;
