import React from 'react'
import Editer from './Admin_Img/Editer.svg'
function ModalEdit() {
    return (
        <div >
        <img src={Editer} data-toggle="modal" data-target="#examp"/>
        
    
    
    <div className="modal fade" id="examp" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog " role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Modifier un Etudiant</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <div className="row mx-0  px-2"> <h5 className="mx-0 my-2">vous pouvez Modifier la class de  l 'étudiant  :</h5>
        <div className="col-lg-12  "><form >
        <div className="form-group text-left mx-3 my-2">
       
                <label  className="col-form-label">Le departement</label>
                <input type="text " className="form-control w-75" id={"recipient-name1"} required/>
              </div>
              <div className="form-group text-left mx-3">
                <label  className="col-form-label">La filiere</label>
                <input type="text" className="form-control w-75" id="recipient-name2" required/>
              </div>
              <div className="form-group text-left mx-3">
                <label  className="col-form-label">classe</label>
                <input type="text" className="form-control w-75" id="recipient-name3" required/>
              </div>
              
      
        </form></div>
        </div>
        
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" >Modifier</button>
        </div>
      </div>
    </div>
    </div></div>
    )
}

export default ModalEdit
