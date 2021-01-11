import React ,{useState}from 'react'
import '../../../../styles/Departement.css'
import ModalAdd from '../AdminModals/ModalAddDepart'
import ModalEdit from '../AdminModals/ModalEditDepart'
function ClasseTab({Classes,Filiere,Etudiants,actif}) {
  const [elementClasses] = useState({
    button :"+ Nouvelle Classe",
    titre : "Ajouter une classe",
    champ1 :" Nom de la classe",
    champ2 :" Nombre d'etudiants",
    champ3 :" Responsable",
    champ4 :" Filiere",
    
    })
    const [elementClassesEdit] = useState({
  
      titre : "Modifier une classe",
      champ1 :" Nom de la classe",
      champ2 :" Nombre d'etudiants",
      champ3 :" Responsable",
      champ4 :" Departement",
      
      })
      const [elementAfficher,setelementAfficher] = useState({});
      const [Verife] = useState("Classe");
      
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
         <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1"> {(actif==="actif")? <ModalAdd Verife={Verife} Filiere={Filiere} Etudiants={Etudiants} departement={elementClasses} />:
        <p>+ Nouvelle Classe</p>
      }</p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
       
        <table className="table table-hover table-borderless">
        
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">NbEtd</th>
      <th scope="col">Filiere</th>
    </tr>
  </thead>
  <tbody>
  {Classes.length != 0 ? Classes.map(classe =>{
    let nbEtu=0
    
       for (let k = 0; k < Etudiants.length; k++) {
         
           if(classe.name== Etudiants[k].class){
            
             nbEtu++
           }
       }
    
   let filName
   for (let j = 0; j < Filiere.length; j++) {
     if(classe.idFiliere ==Filiere[j].id ){
      filName=Filiere[j].alias
     }

   }
   
    return( <tr key={classe.id}>
      <th scope="row " >{classe.name}</th>
      <td>{nbEtu}</td>
      <td>{filName}</td>
      <td className="gerer mx-0 my-0"  > <div onClick={()=>setelementAfficher(classe)}> 
      {((actif !="actif") || (elementAfficher=='') ) ? <p>Gèrer</p> :  <p className="mx-0 my-0"  data-toggle="modal" data-target="#ex">
        Gérer
        </p> }
       </div>   </td>
    </tr>)})
   
  :<h3 style={{marginLeft:'200px'}}>il n'y pas des classes</h3>}
      {((actif==="actif") &&(elementAfficher!='') )? <ModalEdit  Etudiants={Etudiants} Filiere={Filiere} departement={elementClassesEdit}   depart={elementAfficher} Verife={Verife}/>: null}

  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default ClasseTab
