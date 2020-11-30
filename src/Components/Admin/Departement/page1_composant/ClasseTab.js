import React ,{useState}from 'react'
import '../../../../styles/Departement.css'
import ModalAdd from '../AdminModals/ModalAddDepart'
import ModalEdit from '../AdminModals/ModalEditDepart'
function ClasseTab({Classes,actif}) {
  const [elementClasses] = useState({
    button :"+ Nouvelle Classe",
    titre : "Ajouter une classe",
    champ1 :" Nom de la classe",
    champ2 :" Nombre d'etudiants",
    champ3 :" Responsable",
    champ4 :" Departement",
    
    })
    const [elementClassesEdit] = useState({
  
      titre : "Modifier une classe",
      champ1 :" Nom de la classe",
      champ2 :" Nombre d'etudiants",
      champ3 :" Responsable",
      champ4 :" Departement",
      
      })
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
         <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1"> {(actif==="actif")? <ModalAdd departement={elementClasses} />:
        <p>+ Nouvelle Classe</p>
      }</p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
       
        <table className="table table-hover table-borderless">
        
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">NbEtd</th>
      <th scope="col">Responsable</th>
      <th scope="col">Departement</th>
    </tr>
  </thead>
  <tbody>
  {Classes.map(classe =>( <tr key={classe.id}>
      <th scope="row " >{classe.Nom}</th>
      <td>{classe.nbetd}</td>
      <td>{classe.Responsable}</td>
      <td>{classe.depart}</td>
      <td className="gerer">  {(actif==="actif")? <ModalEdit departement={elementClassesEdit}  />:
      <p>Gèrer</p>} </td>
    </tr>))
   
  }
  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default ClasseTab
