import React ,{useState}from 'react'
import '../../../styles/Departement.css'

function ClasseTab(props) {
   const [Classes] = useState(props.Classes);
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1">+ Nouveau depart</p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
        <table class="table table-hover table-borderless">
        
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">nbEtd</th>
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
      <td className="gerer"> Gèrer </td>
    </tr>))
   
  }
  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default ClasseTab
