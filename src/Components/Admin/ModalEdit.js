import React from 'react'
import Editer from './Admin_Img/Editer.svg'
function ModalEdit({Tab1,Tab2,verife,Data}) {
    return (
     <div >
      <img src={Editer} data-toggle="modal" data-target="#examp"/>
        
      <div className="modal fade" id="examp" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modifier {verife==="Actualite"?"l'actualite":"un Etudiant"}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
        <div className="modal-body">
          <div className="row mx-0  px-2"> 
            <h5 className="mx-0 my-2">vous pouvez Modifier {verife==="Actualite"?"l'actualite":"la class de  l 'étudiant "}  :</h5>
            <div className="col-lg-12  ">
              <form >

                <div className="form-group text-left mx-3 my-2">
                  <label  className="col-form-label">{Tab2.champ1} :</label>
                  <select className="Support__dropdown_depart my-2 " required >
                    <option value="intialise1" > { verife==="Etudiant" ? Tab1.Nom:Tab1.Titre}</option>
                    {Data.map(optio =>(<option key={optio.id} value={verife==="Actualite"?optio.Titre:optio.Nom}>{verife==="Actualite"?optio.Titre:optio.Nom}</option>))}
                  </select>
                 </div>

                <div className="form-group text-left mx-3">
                  <label  className="col-form-label">{Tab2.champ2} :</label>
                  <select className="Support__dropdown_depart my-2 "  required>
                    <option value="intialise1" > { verife==="Etudiant" ? Tab1.Filiere:Tab1.Date}</option>
                    {Data.map(optio =>(<option key={optio.id} value={verife==="Actualite"?optio.Date:optio.Filiere}>{verife==="Actualite"?optio.Date:optio.Filiere}</option>))}
                  </select>
                </div>

                <div className="form-group text-left mx-3">
                  <label  className="col-form-label">{Tab2.champ3} :</label>
                  {verife==="Etudiant" ?  
                    <select className="Support__dropdown_depart my-2 "  required>
                    <option value="intialise1" > { Tab1.Classe}</option>
                    {Data.map(optio =>(<option key={optio.id} value={optio.Classe}>{optio.Classe}</option>))}
                    </select>
                    :<input type="text" value={Tab1.Description} className="form-control w-75" id="recipient-name_ed3" required/>}
                </div>
              
      
              </form>
            </div>
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
