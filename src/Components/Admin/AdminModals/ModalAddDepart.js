import React ,{useState}from 'react'
import '../../../styles/Departement.css'
import '../../../styles/SupportEtu.css'

function ModalAdd(props) {
const [element] = useState(props.departement);

    return (
       
    <div className="conter">
    <p   data-toggle="modal" data-target="#exampleModalCenter">
    {element.button}
    </p>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle">{element.titre}</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <div className="row mx-0  p-4">
    <div className="col-lg-12  "><form >
    <div className="form-group text-left mx-3">
            <label  className="col-form-label">{element.champ1}</label>
            <input type="text " className="form-control w-75" id={"recipient-name1"} required/>
          </div>
          <div className="form-group text-left mx-3">
            <label  className="col-form-label">{element.champ2}</label>
            <input type="text" className="form-control w-75" id="recipient-name2" required/>
          </div>
          <div className="form-group text-left mx-3">
            <label  className="col-form-label">{element.champ3}</label>
            <input type="text" className="form-control w-75" id="recipient-name3" required/>
          </div>
          <div className="form-group text-left mx-3">
          <label  className="col-form-label">{element.champ4}</label>
          <input type="text" className="form-control w-75" id="recipient-name4" required/>
        </div>
  
    </form></div>
    </div>
    
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-primary" >Ajouter</button>
    </div>
  </div>
</div>
</div></div>

    )
}

export default ModalAdd
