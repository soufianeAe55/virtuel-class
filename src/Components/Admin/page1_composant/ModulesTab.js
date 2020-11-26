import React ,{useState}from 'react'
import '../../../styles/Departement.css'
import ModalAdd from '../AdminModals/ModalAddDepart'
import ModalEdit from '../AdminModals/ModalEditDepart'
function ModulesTab({Module,actif}) {
  const [elementModule] = useState({
    button :"+ Nouveau Module",
    titre : "Ajouter un Module",
    champ1 :" Nom du Module",
    champ2 :" Nombre d'heures",
    champ3 :" Departement",
    champ4 :" Professeur",
    
    })
    const [elementModuleEdit] = useState({
     
      titre : "Modifier un Module",
      champ1 :" Nom du Module",
      champ2 :" Nombre d'heures",
      champ3 :" Departement",
      champ4 :" Professeur",
      
      })
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1"> {(actif==="actif")? <ModalAdd departement={elementModule} />:
        <p>+ Nouveau Module</p>
      }</p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
    
        <table className="table table-hover table-borderless">
        
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">NbHeures</th>
      <th scope="col">Departement</th>
      <th scope="col">Professeur</th>
    </tr>
  </thead>
  <tbody>
  {Module.map(Mod =>( <tr key={Mod.id}>
      <th scope="row " >{Mod.Nom}</th>
      <td>{Mod.NbHeures}</td>
      <td>{Mod.depart}</td>
      <td>{Mod.prof}</td>
      <td className="gerer"> {(actif==="actif")? <ModalEdit departement={elementModuleEdit}  />:
      <p>Gèrer</p>}</td>
    </tr>))
   
  }
  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default ModulesTab
