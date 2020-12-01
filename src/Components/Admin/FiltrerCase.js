import React,{useState,useEffect} from 'react'
import filtrer from './Admin_Img/filtrer.svg'
function FiltrerCase({func,verife}) {
    const[NvTab,setNvTab]=useState("");
    const[NvTab2,setNvTab2]=useState("");
    const[NvTab3,setNvTab3]=useState("");
    

  
   
    
    
    return (
        <div className="row rounded mx-lg- mx-md-1  mx-1  bg-white  ">
        <div className="col-lg-12 col-md-12 d-flex flex-column "> 
           <div className=" d-flex flex-row  mx-1 my-3 ">
           <div className=" flex-shrink-1 mx-0"><img src={filtrer} className="mx-md-1"/> </div> 
           <div className=""><p className=" filtrer-text font-weight-bold">Filtrer</p></div>
           
           </div>
             
           <div className=" mx-1 my-3  "> 
           <p className="nom_depart font-weight-bold">Nom {verife}</p>
           <input className="w-100 inpt rounded " name="Nom" onChange={(e)=>setNvTab(e.target.value)    
           }  
            type="text"/>
           </div>
           <div className=" mx-1 my-3  "> 
           <p className="nom_depart font-weight-bold">{verife==="Actualite"?"Date":"Classe"}</p>
           <input className="w-100 inpt rounded " name="Classe"  type="text" onChange={(e)=>setNvTab2(e.target.value)    
           }/>
           </div>
           {verife!="Actualite"?  <div className=" mx-1 my-3  "> 
           <p className="nom_depart font-weight-bold">Filiere</p>
           <input className="w-100 inpt rounded " name="Filiere"  type="text" onChange={(e)=>setNvTab3(e.target.value)    
           }/>
           </div>:<div className=" invisible "> 
           <p className="nom_depart font-weight-bold">Filiere</p>
           <input className="w-100 inpt rounded " name="Filiere"  type="text" onChange={(e)=>setNvTab3(e.target.value)    
           }/>
           </div>}
         
        {verife!="Actualite"?  <div className="  mx-1 my-2 text-right "> 
           <button className="btn" type="submit" onClick={
        ()=>func(NvTab,NvTab2,NvTab3)
        }> Appliquer</button>
           </div>:<div className="  mx-1 my-2 text-right "> 
           <button className="btn" type="submit" onClick={
        ()=>func(NvTab,NvTab2)
        }> Appliquer</button>
           </div> }
       
       
        </div>
           

        </div>
    )
}

export default FiltrerCase
