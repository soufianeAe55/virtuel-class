import React from 'react'

function ModalAddDevoir() {
   return (
   <form className="modal fade ModalAddDevoir" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
         <div className="modal-content">
            <div className="modal-header">
               <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">
               Ajouter un devoir</h4>
            </div>
            <div className="modal-body ">
               <input className="col-12 px-3 py-3" type="text" placeholder="Titre du devoir" required/>
               <div className="d-flex flex-column flex-md-row col-12 mt-2">
                  <h5 className="my-auto mx-auto mx-md-0">Date limite :</h5>
                  <input className="ml-auto px-3 py-3" type="datetime-local" required/>
               </div>
               <textarea className="col-12 mt-2 px-3 py-3" placeholder="Description"></textarea>
            </div>
            <div className="modal-footer">
               <button type="submit" className="mx-auto">Save changes</button>
            </div>
         </div>
      </div>
   </form>
)
}

export default ModalAddDevoir
