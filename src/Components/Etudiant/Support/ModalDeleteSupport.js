import React from 'react'

function ModalDeleteSupport() {
   return (
      <div className="modal fade" id="DeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
               <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">
               Confirmer la suppression
               </h4>
               </div>
               <div className="modal-body">
                  <h4 className="text-danger text-center my-4 mx-2">
                  Voulez vous supprimer ce support de façon permanente ?
                  </h4>
               </div>
               <div className="modal-footer d-flex flex-row justify-content-around">
                  <button type="button" className="ModalDeleteSupport__btnSupprimer">Supprimer</button>
                  <button type="button" className="ModalDeleteSupport__btnAnnuler" data-dismiss="modal">
                  Annuler</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ModalDeleteSupport
