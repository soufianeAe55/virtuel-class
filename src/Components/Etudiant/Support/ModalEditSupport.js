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
                  <input type="text" className="col-5 py-3 " placeholder="Module" />
                  <input type="text" className="col-5 py-3 " placeholder="Semestre"/>
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
