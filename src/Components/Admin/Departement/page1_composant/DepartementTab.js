import React ,{useState,useEffect}from 'react'
import '../../../../styles/Departement.css'
import ModalAdd from '../AdminModals/ModalAddDepart'
import ModalEdit from '../AdminModals/ModalEditDepart'

function Departementtab({Professeurs,Etudiants,Classes,departement,Filiere ,actif}) {
  const [elementDepartement] = useState({
    button :"+ Nouveau departement",
    titre : "Ajouter un depart",
    champ1 :" Nom du departement",
    champ2 :"Chef de departement",
    champ3 :"Alias",
    champ4 :"Nombre d'etudiants",   
    })

    const [elementDepartementEdit] = useState({
  
      titre : "Modifier un depart",
      champ1 :" Nom du departement",
      champ2 :"Chef de departement",
      champ3 :"Alias",
      champ4 :"Nombre d'etudiants",
     
      
      })
      const [elementAfficher,setelementAfficher] = useState({});
      const [Verife] = useState("Departement");
      
     
    
    
    return (
        <div className="d-flex flex-column p-2 mx-1 bg-white tableau ">
        <div className="row">
        <div className="col-12 mx-0 font-weight-bold nouv-depart">
        <p className="text-right my-2 mx-1">
        {(actif==="actif")? <ModalAdd Professeurs={Professeurs} Verife={Verife} departement={elementDepartement}  />:
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
  {departement.length !=0 ? departement.map(depart =>{
      let nbF=0
      let nbEtu=0
      for (let i = 0; i < Filiere.length; i++) {
        if(Filiere[i].idDept== depart.id){
          nbF++
          for (let j = 0; j < Classes.length; j++) {
            if(Filiere[i].id ==Classes[j].idFiliere ){
              
              for (let k = 0; k < Etudiants.length; k++) {
                
                  if(Classes[j].name== Etudiants[k].class){
                   
                    nbEtu++
                  }
              }
            }
          }

        } 
        
      }
      let fullName=depart.id_chefDept.split('-')[0].split('.')
      let nameChef= fullName[0]+" "+fullName[1]
    return( <tr key={depart.id}>
      <th scope="row" >{depart.alias}</th>
      <td>{nameChef}</td>
      <td>{nbF}</td>
      <td>{nbEtu}</td>
      <td className="gerer mx-0 my-0"  > <div onClick={()=>setelementAfficher(depart)}>  {((actif !="actif") || (elementAfficher=='') ) ? <p>Gèrer</p> :  <p className="mx-0 my-0"  data-toggle="modal" data-target="#ex">
        Gérer
        </p> } </div> </td>
    </tr>)})
   
  :<div className='donutAdmin' ></div>}
  {((actif==="actif") &&(elementAfficher!='') )? <ModalEdit departement={elementDepartementEdit} Professeurs={Professeurs}  depart={elementAfficher} Verife={Verife}/>: null}
 
  </tbody>
</table>
        
        </div>
        </div></div>
        
    )
}

export default Departementtab
