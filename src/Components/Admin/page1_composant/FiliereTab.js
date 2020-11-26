import React ,{useState}from 'react'
import '../../../styles/Departement.css'
import ModalAdd from '../AdminModals/ModalAddDepart'
import ModalEdit from '../AdminModals/ModalEditDepart'
function Filieretab({Filiere,actif}) {
  
    const [elementFiliere] = useState({
      button :"+ Nouvelle Filiere",
      titre : "Ajouter un Filiere",
      champ1 :" Nom de filière",
      champ2 :" Coordinateur Fi",
      champ3 :" Nombre d'etudiants",
      champ4 :" Departement",
      
      })
      const [elementFiliereEdit] = useState({
  
        titre : "Modifier une Filiere",
        champ1 :" Nom de filière",
        champ2 :" Coordinateur Fi",
        champ3 :" Nombre d'etudiants",
        champ4 :" Departement",
       
        
        })

    return (

        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1"> {(actif==="actif")? <ModalAdd departement={elementFiliere} />:
        <p>+ Nouvelle Filiere</p>
      }</p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
        <table className="table table-hover table-borderless">
        
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">CoordinateurFi</th>
      <th scope="col">NbEtd</th>
      <th scope="col">Departement</th>
    </tr>
  </thead>
  <tbody>
  {Filiere.map(Fi =>( <tr key={Fi.id}>
      <th scope="row " >{Fi.nom}</th>
      <td>{Fi.CoordinateurFi}</td>
      <td>{Fi.nbEtd}</td>
      <td>{Fi.depart}</td>
      <td className="gerer">  {(actif==="actif")? <ModalEdit departement={elementFiliereEdit}  />:
      <p>Gèrer</p>} </td>
    </tr>))
   
  }
  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default Filieretab
