import React ,{useState}from 'react'
import '../../../styles/Departement.css'
import ModalAdd from '../AdminModals/ModalAddDepart'
import ModalEdit from '../AdminModals/ModalEditDepart'

function Departementtab({departement ,actif}) {
  const [elementDepartement] = useState({
    button :"+ Nouveau departement",
    titre : "Ajouter un depart",
    champ1 :" Nom du departement",
    champ2 :"Chef de departement",
    champ3 :"Nombre de Filieres",
    champ4 :"Nombre d'etudiants",
   
    
    })
    const [elementDepartementEdit] = useState({
  
      titre : "Modifier un depart",
      champ1 :" Nom du departement",
      champ2 :"Chef de departement",
      champ3 :"Nombre de Filieres",
      champ4 :"Nombre d'etudiants",
     
      
      })
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1">
        {(actif==="actif")? <ModalAdd departement={elementDepartement}  />:
        <p>+Nouveau Departement</p>
      }
       
        
        </p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
        <table className="table table-hover table-borderless">
        
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Chef</th>
      <th scope="col">Filiere Nb</th>
      <th scope="col">Etudiant Nb</th>
    </tr>
  </thead>
  <tbody>
  {departement.map(depart =>( <tr key={depart.id}>
      <th scope="row " >{depart.nom}</th>
      <td>{depart.chef}</td>
      <td>{depart.nbFiliere}</td>
      <td>{depart.nbEtd}</td>
      <td className="gerer mx-0 my-0"  >  {(actif==="actif")? <ModalEdit departement={elementDepartementEdit}  />:
      <p>Gèrer</p>
    } </td>
    </tr>))
   
  }
  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default Departementtab
