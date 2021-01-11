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
import moment from 'moment'

function Tableau({Tab,Tab2,verife,Data,Data1,Data2,Data3,classProf,filiereProf,departProf,departement,filiere,classe,module}) {



  const [elementAfficher,setelementAfficher] = useState({});
  const [mode,setMode]=useState('')
    return (
        <div className="row  mx-0 h-100  row_table">
        
        <table className="table table-hover  table-borderless my-3  ">
        <thead>
        {(verife==="Professeur")?<tr>
            <th scope="col"> </th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Filiere Nb</th>
            <th scope="col">Departement Nb</th>
            <th scope="col">Approuver</th>
          </tr>
      
      :(verife==="Etudiant")?<tr>
      <th scope="col"> </th>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Classe</th>
     
      <th scope="col">Approuver</th>
    </tr>
      :<tr>
        
      <th scope="col">Titre</th>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
 
    </tr>
      }
          
        </thead>
        <tbody>
      {verife==="Professeur"?(Tab.length !=0?Tab.map(tab1=>{
         let fName=tab1.email.split('-')[0].split('.')
         let firstName=fName[0]
         let lastName=fName[1]
         let c1=0
         let c2=0
         for (let i = 0; i < departProf.length; i++) {
              if(departProf[i].profEmail== tab1.email){
                c1++
              }
           
         }
         for (let i = 0; i < filiereProf.length; i++) {
          if(filiereProf[i].emailProf== tab1.email){
            c2++
          }
       
     }
        return(<tr key={tab1.id}>
            <th scope="row"><img src={Avatar}/></th>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{c2}</td>
            <td>{c1}</td>
            <td className="mx-4">{tab1.class== null?'none':'approuvee'}</td>  
            <td>{(tab1.class=== null)?
            (
              <img onClick={()=>setelementAfficher(tab1)} src={Valider} data-toggle="modal" data-target="#exampleModalCenter"/> 
            ):(<div  onClick={()=>setelementAfficher(tab1)}><img src={Editer} data-toggle="modal" data-target="#examp"/></div>)}</td>
            <td>{tab1.class !=null ? <img onClick={()=>setelementAfficher(tab1)} src={Valider} data-toggle="modal" data-target="#exampleModalCenter"/> :null}</td>
          
          </tr>
        )})
        :<div className='donutAdmin' ></div>)
         :verife==="Etudiant"?(Tab.length !=0 ?Tab.map(tab1=>{
                  let fName=tab1.email.split('-')[0].split('.')
                  let firstName=fName[0]
                  let lastName=fName[1]
           return (<tr key={tab1.id}>
            <th scope="row"><img src={Avatar}/></th>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{tab1.class== null ? 'none':tab1.class }</td>
            <td className="mx-4">{tab1.class== null ? 'none': 'approuvée'}</td>  
            <td>{(tab1.class===null)?
          (  <img onClick={()=>{
            setelementAfficher(tab1)
            setMode('approuve')
          }} src={Valider} data-toggle="modal" data-target="#exampleModalCenter" alt=""/>
              ):(<div  onClick={()=>{
                setelementAfficher(tab1)
                setMode('modify')
              }}>{elementAfficher!={}?<img src={Editer} data-toggle="modal" data-target="#exampleModalCenter"/>:<p></p>}</div>)
            }
            </td>
            
            
          {/** <ModalSupprimer verife={verife} Tab1={elementAfficher}/>
           *<ModalEdit Tab1={elementAfficher} Tab2={Tab2} verife={verife} Data={Data}/>
           * 
          */}
          </tr>
        )})
        :<div className='donutAdmin' ></div>) :(Tab.length != 0? Tab.map(tab1=>(<tr key={tab1.id}>
          
          <td>{tab1.data.name}</td>
          <td>{moment(tab1.data.date).format('DD-MM-YYYY hh:mm:ss a')}</td>
          <td>{tab1.data.contenu}</td>
          <td><div onClick={()=>setelementAfficher(tab1)}> <img src={Editer} data-toggle="modal" data-target="#examp"/></div></td>
          <td><div onClick={()=>setelementAfficher(tab1)}><img src={Supprimer} data-toggle="modal" data-target="#exampleModal"/> </div></td>
        </tr>
      ))
      : <h2 style={{marginLeft:'200px'}} >Il n'y pas des actualites</h2>)}
      
      {verife==="Etudiant"? <ModalApprouver  mode={mode} Tab2={Tab2} Tab1={elementAfficher} verife={verife} Data={Data}  Data1={Data1}  Data2={Data2}  Data3={Data3}/>:null}
     
      {elementAfficher!={} && verife != 'Professeur' ?<ModalEdit Tab1={elementAfficher} Tab2={Tab2} verife={verife} Data={Data}/>:<p></p>}
     
      {elementAfficher!={}? <ModalSupprimer verife={verife} Tab1={elementAfficher}/>:<p></p>}  

      {verife == 'Professeur' ?<ModalApprouverProf Tab1={elementAfficher} Data0={departement}  Data1={filiere}  Data2={classe}  Data3={module} Data={Data}/>:null}
      {verife == 'Professeur' ?<ModalEditProf module={module} classProf={classProf} classe={classe} Tab1={elementAfficher}  />:null}
        </tbody>
      </table>
        </div>
    )
}

export default Tableau
