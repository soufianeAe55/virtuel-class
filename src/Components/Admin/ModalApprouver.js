import React from 'react'
import Valider from './Admin_Img/Valider.svg'
function ModalApprouver({Tab2,verife,Data}) {
    return (
        <div >
        {verife==="Actualite"?<p data-toggle="modal" data-target="#exampleModalCenter" className="text-right font-weight-bold text-add  mt-4">+ Nouvelle actualite</p>:
     <img src={Valider} data-toggle="modal" data-target="#exampleModalCenter" alt=""/> }
    
    


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle">{verife==="Actualite"?"Ajouter Actualite":"Approuver un Etudiant"}</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <div className="row mx-0  px-2"><h5 className="mx-0 my-2">Veuillez ajouter {verife==="Actualite"?"l'actualite ici :":"l 'étudiant a son class :"}</h5>
    <div className="col-lg-12  "><form >
    <div className="form-group text-left ">
 
        
            <select className="Support__dropdown_depart my-2 "  required>
       <option value={Tab2.champ1} > {Tab2.champ1}</option>
       {  Data.map(optio =>(<option key={optio.id} value={verife==="Actualite"?optio.Titre:optio.Nom}>{verife==="Actualite"?optio.Titre:optio.Nom}</option>))}
    </select>
          </div>
          <div className="form-group text-left">
    
            <select className="Support__dropdown_depart my-2 " required >
            <option value={Tab2.champ2} >{Tab2.champ2}</option>
            {  Data.map(optio =>(<option key={optio.id} value={verife==="Actualite"?optio.Date:optio.Filiere}>{verife==="Actualite"?optio.Date:optio.Filiere}</option>))}
         </select>
          </div>
         
  
            { verife==="Etudiant" ? <div className="form-group text-left ">  
            <select className="Support__dropdown_depart my-2 " required >
            <option value={Tab2.champ3} >{Tab2.champ3}</option>
            {  Data.map(optio =>(<option key={optio.id} value={optio.Classe}>{optio.Classe}</option>))}
         </select> </div>: <div className="form-group text-left mx-2">   <label  className="col-form-label font-weight-bold">{Tab2.champ3}</label><input type="text" className="form-control w-75" id="recipient-name_ed3" required/></div>}
            
         
          
  
    </form></div>
    </div>
    
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-primary" >{verife==="Actualite"?"Ajouter":"Approuver"}</button>
    </div>
  </div>
</div>
</div></div>
    )
}

export default ModalApprouver
