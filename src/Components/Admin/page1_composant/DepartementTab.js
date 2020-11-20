import React ,{useState}from 'react'
import '../../../styles/Departement.css'


function Departementtab({departement}) {
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1">+ Nouveau depart</p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
        <table class="table table-hover table-borderless">
        
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
      <td className="gerer"> Gèrer </td>
    </tr>))
   
  }
  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default Departementtab
