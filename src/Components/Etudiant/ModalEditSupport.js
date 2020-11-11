import React,{useEffect, useState} from 'react'
import '../../styles/SupportEtu.css'
import File from '../Dashboard/imgs/File.svg'

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
   <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
         <form className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modifier un support</h5>
            <button type="button" className="close" id="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>
            {console.log(fileName)}
            </div>
            <div className="modal-body border border-dark ModalEditSupport">
               <div className="d-flex flex-row py-2 justify-content-around border border-dark">
                  <input type="text" className="col-5 py-3 " placeholder="Module" />
                  <input type="text" className="col-5 py-3 " placeholder="Semestre"/>
               </div>
               <div className="d-flex flex-row p-2 border border-dark">
                  <input type="text" className="w-100 mx-2 px-3 py-3 " placeholder="Nouveau Titre du support" />
               </div>
               <div className="d-flex flex-row p-2 border border-dark">
                  <textarea type="text" className="w-100 mx-2 px-3 py-3 " placeholder="Ajouter une nouvelle discription" />
               </div>
            </div>
            <div className="modal-footer d-flex flex-row justify-content-around ModalEditSupport__footer">
               <input onChange={handleChange}  type="file" id="upload btn" hidden/>
               <label className="d-flex" for="upload btn">
                  <img src={File} alt="" />
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
