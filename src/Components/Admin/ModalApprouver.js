import React from 'react'
import Valider from './Admin_Img/Valider.svg'
function ModalApprouver({Tab2,verife}) {
    return (
        <div >
        {verife==="Actualite"?<p data-toggle="modal" data-target="#exampleModalCenter" className="text-right font-weight-bold text-add  mt-4">+ Nouvelle actualite</p>:
     <img src={Valider} data-toggle="modal" data-target="#exampleModalCenter"/> }
    
    


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
    <div className="form-group text-left mx-3">
 
            <label  className="col-form-label">{Tab2.champ1}</label>
            <input type="text " className="form-control w-75" id={"recipient-name_app1"} required/>
          </div>
          <div className="form-group text-left mx-3">
            <label  className="col-form-label">{Tab2.champ2}</label>
            <input type="text" className="form-control w-75" id="recipient-name_app2" required/>
          </div>
          <div className="form-group text-left mx-3">
            <label  className="col-form-label">{Tab2.champ3}</label>
            <input type="text" className="form-control w-75" id="recipient-name_app3" required/>
          </div>
          
  
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
