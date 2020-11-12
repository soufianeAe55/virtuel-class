import React,{useState} from 'react'
import backLink from '../Dashboard/imgs/backLink.svg'
import '../../styles/SupportEtu.css'
import AddSupport from '../Dashboard/imgs/AddSupport.svg'
import {Link} from 'react-router-dom'
import UploadFile from '../Dashboard/imgs/UpLoadFile.svg'


function SupportAdd() {
   const [fileName, setfileName] = useState("Choisir un fichier")
   const handleChange = e => {
      setfileName(e.target.files[0].name);
   }

   return (
      <div className="row d-flex flex-column m-4 border border-dark">
         <Link to="/support" className="p-3">
            <img src={backLink} alt="" />
         </Link>
         <h1 className="text-center font-weight-bold">Ajouter un support</h1>
         <div className="d-flex flex-column flex-xl-row justify-content-around">
            <div className="SupportAdd border border-dark m-5 p-5">
               <div className="d-flex flex-row py-2 justify-content-around ">
                  <input type="text" className="col-5 py-3 " placeholder="Module" />
                  <input type="text" className="col-5 py-3 " placeholder="Semestre"/>
               </div>
               <div className="d-flex flex-row p-2 ">
                  <input type="text" className="w-100 mx-2 px-3 py-3 " placeholder="Nouveau Titre du support" />
               </div>
               <div className="d-flex flex-row p-2 ">
                  <textarea type="text" rows="5" className="w-100 mx-2 px-3 py-3 " placeholder="Ajouter une nouvelle discription" />
               </div>
               <div className="d-flex justify-content-around SupportAdd__footer">
                  <input onChange={handleChange}  type="file" id="upload btn" hidden/>
                  <label className="d-flex" for="upload btn">
                     <img src={UploadFile} alt="" />
                     <p id="file-chosen"> { fileName }  </p>
                  </label>
                  <button type="submit">Enregistrer</button>
               </div>


            </div>
            <img className="border border-dark pt-5" src={AddSupport} alt="" style={{opacity: "0.7"}} />
         </div>
      </div> 
   )
}

export default SupportAdd
