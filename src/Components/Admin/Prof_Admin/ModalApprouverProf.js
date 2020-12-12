import React from 'react'
import Valider from '../Admin_Img/Valider.svg'
function ModalApprouverProf({Data}) {
    return (
        <div >
        
     <img src={Valider} data-toggle="modal" data-target="#exampleModalCenter"/> 
    
    


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle">Approuver un professeur</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <div className="row mx-0  px-2 ">
    <div className=""><h5 className="mx-0 my-2 " >Veuillez ajouter le professeur à ses classes</h5>
    <p className="text-danger w-100 textapp">** Si il est plusieurs class vous pouvez approuver plusieur fois !</p></div>
    
    <div className="col-lg-12  "><form >
<div className="d-flex flex-row">    <div className="form-group text-left mx-3">
          
            <select className="Support__dropdown_depart my-2 " required >
                    <option value="departement" selected>departement</option>
                    {Data.map(optio =>(<option key={optio.id} value={optio.Nom}>{optio.Nom}</option>))}
                  </select>
          </div>
          <div className="form-group text-left mx-3">
          <select className="Support__dropdown_depart my-2 " required >
          <option value="filiere" selected>Filiere</option>
          {Data.map(optio =>(<option key={optio.id} value={optio.Nom}>{optio.Nom}</option>))}
        </select>
          </div></div>
        <div className="d-flex flex-row"><div className="form-group text-left mx-3">
            
            <select className="Support__dropdown_depart my-2 " required >
            <option value="classe" selected> Classe</option>
            {Data.map(optio =>(<option key={optio.id} value={optio.Nom}>{optio.Nom}</option>))}
          </select>
          </div>
          <div className="form-group text-left mx-5">
         
          <select className="Support__dropdown_depart my-2  " required >
          <option value="module" selected> Module</option>
          {Data.map(optio =>(<option key={optio.id} value={optio.Nom}>{optio.Nom}</option>))}
        </select>
        </div></div>
          
          
  
    </form></div>
    </div>
    
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-primary" >Approuver</button>
    </div>
  </div>
</div>
</div></div>
    )
}

export default ModalApprouverProf
