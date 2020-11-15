import React,{ useState } from 'react'
import backLink from '../../Dashboard/imgs/backLink.svg'
import AddSupport from '../../Dashboard/imgs/AddSupport.svg'
import { Link } from 'react-router-dom'
import UploadFile from '../../Dashboard/imgs/UpLoadFile.svg'
import '../../../styles/SupportEtu.css'


function SupportAdd() {
   const [fileName, setfileName] = useState("Choisir un fichier")
   const handleChange = e => {
      setfileName(e.target.files[0].name);
   }

   return (
      <div className="row d-flex flex-column m-4 border border-dark SupportAdd">
         <Link to="/support" className="p-3">
            <img src={backLink} alt="" />
         </Link>
         <h1>Ajouter un support</h1>
         <div className="d-flex flex-column flex-xl-row" >
            <form className="flex-grow-1 py-4 mx-2 border border-dark">
               <div className="d-flex flex-column flex-md-row p-2 justify-content-around">
                  <select className="w-100 mx-auto my-1 w-md-50 mx-md-4 SupportAdd__dropdown">
                     <option value="Semestre">Semestre</option>
                     <option value="1">S1</option>
                     <option value="2">S2</option>
                     <option value="3">S3</option>
                     <option value="4">S4</option>
                  </select>
                  <select className="w-100 mx-auto my-1 w-md-50 mx-md-4 SupportAdd__dropdown">
                     <option value="Modules">Modules</option>
                     <option value="1">Java</option>
                     <option value="2">xml et les framworks</option>
                  </select>
               </div>
               <div className="d-flex flex-row p-2 ">
                  <input type="text" className="w-100 mx-2 px-3 py-3" placeholder="Nouveau Titre du support" />
               </div>
               <div className="d-flex flex-row p-2 ">
                  <textarea type="text" rows="5" className="w-100 mx-2 px-3 py-3 " placeholder="Ajouter une nouvelle discription" />
               </div>
               <div className="d-flex flex-md-row flex-column justify-content-around SupportAdd__footer">
                  <input onChange={handleChange}  type="file" id="upload btn" hidden/>
                  <label className="d-flex mx-auto my-2 m-md-0" for="upload btn">
                     <img src={UploadFile} alt="" />
                     <p id="file-chosen"> { fileName }  </p>
                  </label>
                  <button className="mx-auto my-2 m-md-0" type="submit">Enregistrer</button>
               </div>
            </form>
            <div className="SupportAdd__img m-auto border border-dark">
               <img className="" src={AddSupport} alt="" style={{opacity: "0.7"}} />
            </div>
         </div>
      </div> 
   )
}

export default SupportAdd
