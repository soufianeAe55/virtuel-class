import React,{useEffect, useState} from 'react'
import UploadFile from '../../Dashboard/imgs/UpLoadFile.svg'

function ModalEditSupport() {
   const [fileName, setfileName] = useState("Choisir un fichier")

   useEffect(() => {
      // const actualBtn = document.getElementById('upload btn');

      // const fileChosen = document.getElementById('file-chosen');

      // const close = document.querySelector('#close');
      // console.log(close)
      // actualBtn.addEventListener('change', function(){
      // fileChosen.textContent = this.files[0].name
      // })
   }, [])
   const handleChange = e => {
      setfileName(e.target.files[0].name);
   }

   return (
   <div className="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
         <form className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title mx-auto px-5 font-weight-bold" id="exampleModalLabel">Modifier un support</h4>
            {console.log(fileName)}
            </div>
            <div className="modal-body  ModalEditSupport">
               <div className="d-flex flex-row py-2 justify-content-around ">
                  <select className="col-5 py-3  ">
                     <option value="Semestre">Semestre</option>
                     <option value="1">S1</option>
                     <option value="2">S2</option>
                     <option value="3">S3</option>
                     <option value="4">S4</option>
                  </select>
                  <select className="col-5 py-3 ">
                     <option value="Modules">Modules</option>
                     <option value="1">Java</option>
                     <option value="2">xml et les framworks</option>
                  </select>

               </div>
               <div className="d-flex flex-row p-2 ">
                  <input type="text" className="w-100 mx-2 px-3 py-3 " placeholder="Nouveau Titre du support" />
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

export default ModalEditSupport
