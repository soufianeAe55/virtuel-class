import React ,{useState}from 'react'
import Editer from '../Admin_Img/Editer.svg'
import arrowDown from '../../Professeur/ImageProf/arrowDown.svg'
import arrowUp from '../../Professeur/ImageProf/arrowUp.svg'
function ModalEditProf() {
    const DisplayAndHide = (e) => {
        console.log(e.target)
        if(e.target.nextElementSibling!=null && e.target.childNodes[2]!=undefined){ 
             e.target.nextElementSibling.hidden  ?
        e.target.nextElementSibling.hidden = false  :
        e.target.nextElementSibling.hidden = true 
        // Change the image arrow : 
        e.target.nextElementSibling.hidden   ?
        e.target.childNodes[2].src = arrowDown :
        e.target.childNodes[2].src = arrowUp}
      
     }
const[Departementinf]=useState([{
titre:"Glsid"

},
{titre:"Bdcc"}


])
console.log(Departementinf);

    return (
        <div >
        <img src={Editer} data-toggle="modal" data-target="#examp"/>
        
    
    
    <div className="modal fade" id="examp" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog " role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Modifier </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <div className="row mx-0  px-2"> <h5 className="mx-0 my-2 textapp">Veuillez choisir la class qui vous voulez et la modifier :</h5>
        <div className="col-lg-12  ">
        {Departementinf.map(dep=>( <div className="" key={dep.id}><div onClick={DisplayAndHide} className="d-flex col-10 col-lg-12 col-md-12 col-xl-12 col-sm-12 Departement2 mt-2">
            <div className="blueLine"></div>
            <div className="DepartementName">
               {dep.titre}
            </div>
            <img src={arrowDown} className="ml-auto"  alt="" />
         </div>	
         <div className="" hidden><form >
        <div className="d-flex flex-row">    <div className="form-group text-left mx-3">
                    <label  className="col-form-label">La departement : *</label>
                    <input type="text " className="form-control w-100" id={"recipient-name1"} required/>
                  </div>
                  <div className="form-group text-left mx-3">
                    <label  className="col-form-label">La filiere : *</label>
                    <input type="text" className="form-control w-100" id="recipient-name2" required/>
                  </div></div>
                <div className="d-flex flex-row"><div className="form-group text-left mx-3">
                    <label  className="col-form-label">Class : *</label>
                    <input type="text" className="form-control w-100" id="recipient-name3" required/>
                  </div>
                  <div className="form-group text-left mx-3">
                  <label  className="col-form-label">Module : *</label>
                  <input type="text" className="form-control w-100" id="recipient-name3" required/>
                </div></div>
                <div className="text-right"><button type="button" className="btn btn2 mx-1" >Enregister</button> 
                <button type="button" className="btn btn-secondary mx-1" >Annuler</button> </div>
                
            </form></div></div>))}


   
            
        
        </div>
        </div>
        
        </div>
   
      </div>
    </div>
    </div></div>
    )
}

export default ModalEditProf
