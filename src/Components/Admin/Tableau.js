import React,{useState} from 'react'
import Avatar from '../Dashboard/imgs/Avatar.svg'
import Supprimer from './Admin_Img/Supprimer.svg'
import Editer from './Admin_Img/Editer.svg'
import Valider from './Admin_Img/Valider.svg'
import ModalSupprimer from "./ModalSupprimer.js"
import ModalApprouver from "./ModalApprouver.js"
import ModalEdit from "./ModalEdit.js"
import ModalApprouverProf from './Prof_Admin/ModalApprouverProf'
import ModalEditProf from './Prof_Admin/ModalEditProf'
function Tableau({Tab,Tab2,verife}) {





    return (
        <div className="row  mx-0 h-100 row_table">
        
        <table className="table table-hover table-borderless my-3  ">
        <thead>
        {(verife==="Professeur")?<tr>
            <th scope="col"> </th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Classe Nb</th>
            <th scope="col">Filiere Nb</th>
            <th scope="col">Departement Nb</th>
            <th scope="col">Approuver</th>
          </tr>
      
      :(verife==="Etudiant")?<tr>
      <th scope="col"> </th>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Classe</th>
      <th scope="col">Filiere</th>
      <th scope="col">Approuver</th>
    </tr>
      :<tr>
      <th scope="col"> </th>
      <th scope="col">Titre</th>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
 
    </tr>
      }
          
        </thead>
        <tbody>
      {verife==="Professeur"?(Tab.map(tab1=>(<tr key={tab1.id}>
            <th scope="row"><img src={tab1.avatar}/></th>
            <td>{tab1.Nom}</td>
            <td>{tab1.Prenom}</td>
            <td>{tab1.Classe}</td>
            <td>{tab1.Filiere}</td>
            <td>{tab1.DepartNb}</td>
            <td className="mx-4">{tab1.status}</td>  
            <td>{(tab1.status==="non")?
            (<ModalApprouverProf Tab2={Tab2} verife={verife}/>):(<ModalEditProf Tab2={Tab2}/>)}</td>
            <td><ModalSupprimer verife={verife}/></td>
          
          </tr>
        ))
        )
         :verife==="Etudiant"?(Tab.map(tab1=>(<tr key={tab1.id}>
            <th scope="row"><img src={tab1.avatar}/></th>
            <td>{tab1.Nom}</td>
            <td>{tab1.Prenom}</td>
            <td>{tab1.Classe}</td>
            <td>{tab1.Filiere}</td>
            <td className="mx-4">{tab1.status}</td>  
            <td>{(tab1.status==="non")?
            (<ModalApprouver Tab2={Tab2} verife={verife}/>):(<ModalEdit Tab2={Tab2}/>)}</td>
            <td><ModalSupprimer verife={verife}/></td>
          
          </tr>
        ))
        ) :(Tab.map(tab1=>(<tr key={tab1.id}>
          <th scope="row"><img src={tab1.avatar}/></th>
          <td>{tab1.Titre}</td>
          <td>{tab1.Date}</td>
          <td>{tab1.Description}</td>
          <td><ModalEdit Tab2={Tab2} verife={verife}/></td>
          <td><ModalSupprimer verife={verife}/></td>
        </tr>
      ))
      )}


        
        
        </tbody>
      </table>
        </div>
    )
}

export default Tableau
