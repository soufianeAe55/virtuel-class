import React,{ useState } from 'react'
import backLink from '../Dashboard/imgs/backLink.svg'
import annonce from './ImageProf/annonce.svg'
import { Link } from 'react-router-dom'
import UploadFile from '../Dashboard/imgs/UpLoadFile.svg'
import '../../styles/SupportEtu.css'


function AnnonceAdd() {
   const [fileName, setfileName] = useState("Choisir un fichier")
   const handleChange = e => {
      setfileName(e.target.files[0].name);
   }

   return (
      <div className="row d-flex flex-column m-4 SupportAdd">
         <Link to="/professeur/Jenseigne/Modules/DetailModule/annonceProf/" className="p-3 svgBack">
            <img src={backLink} alt="" />
         </Link>
         <h1 className="mt-4">Ajouter une annonce</h1>
         <div className="d-flex flex-column flex-xl-row mt-3">
            <form className="flex-grow-1 py-4 mx-2">
               <div className="d-flex flex-row p-2 ">
                  <input type="text" className="w-100 mx-2 px-3 py-3" placeholder="Titre de l'annonce" />
               </div>
               <div className="d-flex flex-row p-2 ">
                  <textarea type="text" rows="5" className="w-100 mx-2 px-3 py-3 " placeholder="Ajouter une description..." />
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
            <div className="SupportAdd__img m-auto">
               <img className="" src={annonce} alt="" />
            </div>
         </div>
      </div> 
   )
}

export default AnnonceAdd
