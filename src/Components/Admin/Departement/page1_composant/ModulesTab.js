import React ,{useState}from 'react'
import '../../../../styles/Departement.css'
import ModalAdd from '../AdminModals/ModalAddDepart'
import ModalEdit from '../AdminModals/ModalEditDepart'
function ModulesTab({Module,Classes,Professeurs,actif}) {
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
      champ3 :" Classe",
      champ4 :" Semstre",
      
      })
      const [elementAfficher,setelementAfficher] = useState({});
      const [Verife] = useState("Module");
      
     
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1"> {(actif==="actif")? <ModalAdd Verife={Verife} Professeurs={Professeurs} Classes={Classes} departement={elementModule} />:
        <p>+ Nouveau Module</p>
      }</p></div></div>
        <div className="row"><div className="col-12 mx-0 font-weight-bold ">
    
        <table className="table table-hover table-borderless">
        
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">NbHeures</th>
      <th scope="col">Class</th>
      <th scope="col">Professeur</th>
    </tr>
  </thead>
  <tbody>
  {Module.length != 0 ? Module.map(Mod =>{  
    console.log(Mod) 
       let name
      if(Mod.emailProf != 'none'){
        let fullName=Mod.emailProf.split('-')[0].split('.')
        name= fullName[0]+" "+fullName[1]
      }else{
        name='none'
      }
    return( <tr key={Mod.id}>
      <th scope="row " >{Mod.name}</th>
      <td>{Mod.NbHeures}</td>
      <td>{Mod.className}</td>
      <td>{name}</td>
      <td className="gerer mx-0 my-0"  > <div onClick={()=>setelementAfficher(Mod)}> 
      {((actif !="actif") || (elementAfficher=='') ) ? <p>Gèrer</p> :  <p className="mx-0 my-0"  data-toggle="modal" data-target="#ex">
        Gérer
        </p> }
       </div>  </td>
    </tr>)})
   
  :<h3 style={{marginLeft:'200px'}}>il n'y pas des modules</h3>}
      {((actif==="actif") &&(elementAfficher!='') )? <ModalEdit departement={elementModuleEdit} Professeurs={Professeurs} Classes={Classes} depart={elementAfficher} Verife={Verife}/>: null}

  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default ModulesTab
