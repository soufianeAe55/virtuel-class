import React ,{useState}from 'react'
import '../../../styles/Departement.css'

function Filieretab(props) {
    const [Filiere] = useState(props.Filiere)
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1">+ Nouveau depart</p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
        <table class="table table-hover table-borderless">
        
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">CoordinateurFi</th>
      <th scope="col">nbEtd</th>
      <th scope="col">depart</th>
    </tr>
  </thead>
  <tbody>
  {Filiere.map(Fi =>( <tr key={Fi.id}>
      <th scope="row " >{Fi.nom}</th>
      <td>{Fi.CoordinateurFi}</td>
      <td>{Fi.nbEtd}</td>
      <td>{Fi.depart}</td>
      <td className="gerer"> Gèrer </td>
    </tr>))
   
  }
  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default Filieretab
