import React ,{useState}from 'react'
import '../../../../styles/Departement.css'
import ModalAdd from '../AdminModals/ModalAddDepart'
import ModalEdit from '../AdminModals/ModalEditDepart'
function Filieretab({Professeurs,Filiere,departement,Classes,Etudiants,actif}) {
  
    const [elementFiliere] = useState({
      button :"+ Nouvelle Filiere",
      titre : "Ajouter un Filiere",
      champ1 :" Nom de filière",
      champ2 :" Coordinateur Fi",
      champ3 :" Alias",
      champ4 :" Departement",
      
      })
      const [elementFiliereEdit] = useState({
  
        titre : "Modifier une Filiere",
        champ1 :" Nom de filière",
        champ2 :" Coordinateur Fi",
        champ3 :" Nombre d'etudiants",
        champ4 :" Departement",
       
        
        })
        const [elementAfficher,setelementAfficher] = useState({});
        const [Verife] = useState("Filiere");
    return (

        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row"><div className="col-12 mx-0 font-weight-bold nouv-depart"><p className="text-right my-2 mx-1"> {(actif==="actif")? <ModalAdd  Verife={Verife} depts={departement} Professeurs={Professeurs} departement={elementFiliere} />:
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
  {Filiere.length !=0 ?Filiere.map(Fi =>{
    let nbEtu=0
     for (let j = 0; j < Classes.length; j++) {
      if(Fi.id ==Classes[j].idFiliere ){
        
        for (let k = 0; k < Etudiants.length; k++) {
          
            if(Classes[j].name== Etudiants[k].class){
             
              nbEtu++
            }
        }
      }

    }
    let deptName
    for (let j = 0; j < departement.length; j++) {
      if(Fi.idDept ==departement[j].id ){
         deptName=departement[j].alias
      
      }

    }
    let fullName=Fi.id_chefFil.split('-')[0].split('.')
    let name= fullName[0]+" "+fullName[1]
    
    return ( <tr key={Fi.id}>
      <th scope="row " >{Fi.alias}</th>
      <td>{name}</td>
      <td>{nbEtu}</td>
      <td>{deptName}</td>
      <td className="gerer mx-0 my-0"  > <div onClick={()=>setelementAfficher(Fi)}> 
      {((actif !="actif") || (elementAfficher=='') ) ? <p>Gèrer</p> :  <p className="mx-0 my-0"  data-toggle="modal" data-target="#ex">
        Gérer
        </p> }
       </div>  </td>
    </tr>)})
   
  :<h3 style={{marginLeft:'200px'}}>il n'y pas des filieres</h3>}
    {((actif==="actif") &&(elementAfficher!='') )? <ModalEdit depts={departement} departement={elementFiliereEdit} Professeurs={Professeurs}  depart={elementAfficher} Verife={Verife}/>: null}

  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default Filieretab
