import React ,{useState}from 'react'
import '../../../styles/Departement.css'

function ModulesTab(props) {
    const [Module] = useState(props.Module)
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1">+ Nouveau depart</p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
        <table class="table table-hover table-borderless">
        
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
      <td className="gerer"> Gèrer </td>
    </tr>))
   
  }
  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default ModulesTab
