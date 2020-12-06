import React, { useState } from 'react'
import UploadFile from '../Dashboard/imgs/UpLoadFile.svg'

function ModalEditAnnonce() {
   const [fileName, setfileName] = useState("Choisir un fichier")
   const handleChange = e => {
      setfileName(e.target.files[0].name);
   }

   return (
         <div className="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
               <form className="modal-content">
                  <div className="modal-header">
                  <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">Modifier une annonce</h4>
                  {console.log(fileName)}
                  </div>
                  <div className="modal-body  ModalEditSupport">
                     <div className="d-flex flex-row p-2 ">
                        <input type="text" className="w-100 mx-2 px-3 py-3 " placeholder="Nouveau Titre de l'annonce" />
                     </div>
                     <div className="d-flex flex-row p-2 ">
                        <textarea type="text" className="w-100 mx-2 px-3 py-3 " placeholder="Ajouter une nouvelle discription" />
                     </div>
                  </div>
                  <div className="modal-footer d-flex flex-row justify-content-around ModalEditSupport__footer">
                     <input onChange={handleChange}  type="file" id="upload btn" hidden/>
                     <label className="d-flex" for="upload btn">
                        <img src={UploadFile} alt="" />
                        <p id="file-chosen"> { fileName }  </p>
                     </label>
                     <button type="submit">Enregistrer</button>
                  </div>
               </form>
            </div>
         </div>
   )
}

export default ModalEditAnnonce
