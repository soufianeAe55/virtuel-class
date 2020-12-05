import React,{useState} from 'react'

function ModalEdit({departement,depart,verife}) {
    
 
  
    
    return (
        <div >
        <p className="mx-0 my-0"  data-toggle="modal" data-target="#ex">
        Gérer
        </p>
    
    
    <div className="modal fade" id="ex" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">{departement.titre}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <div className="row mx-0  p-4">
        <div className="col-lg-12  ">
         <form >
        <div className="form-group text-left mx-3">
                <label className="col-form-label">{departement.champ1}</label>
                <input type="text " value={(depart!='')? depart.nom :""} className="form-control w-75" id={departement.id}  required/>
              </div>
              <div className="form-group text-left mx-3">
                <label  className="col-form-label">{departement.champ2}</label>
                <input type="text" value={verife==="Departement"? depart.chef:(verife==="Filiere")?depart.CoordinateurFi:(verife==="Classe")?depart.nbetd:depart.NbHeures}  className="form-control w-75" id={departement.id} required/>
              </div>
              <div className="form-group text-left mx-3">
                <label  className="col-form-label">{departement.champ3}</label>
                <input type="text" value={verife==="Departement"? depart.nbFiliere:(verife==="Filiere")?depart.nbEtd:(verife==="Classe")?depart.Responsable:depart.depart} className="form-control w-75" id={departement.id} required/>
              </div>
              <div className="form-group text-left mx-3">
              <label  className="col-form-label">{departement.champ4}</label>
              <input type="text"  value={verife==="Departement"? depart.nbEtd:(verife==="Filiere" || verife==="Classe")?depart.depart:depart.prof} className="form-control w-75" id={departement.id} required/>
            </div>
        
        </form>
       </div>
        </div>
        
        </div>
        <div className="modal-footer">
          <button type="button" class="btn btn-primary" >Enregistrer</button>
          <button type="button" class="btn btn1 " >Supprimer</button>
        </div>
      </div>
    </div>
    </div></div>
    
    )
}

export default ModalEdit
