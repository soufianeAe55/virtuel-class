import React, { useState } from 'react'
import settings from '../../Dashboard/imgs/settings.svg'
import AddFile from '../../Dashboard/imgs/AddFile.svg'
import SupportCard from './SupportCard'
import '../../../styles/SupportEtu.css'
import { Link } from 'react-router-dom'

function SupportMain(props) {
   const [Supports] = useState(props.Supports);
   return (
      <div className="row d-flex flex-column m-4">
      <div className="m-3 d-flex flex-row-reverse">
         <div className="mx-2 p-2  d-flex flex-column flex-lg-row justify-content-around">
            <Link to ='/support/supportEdit'>
               <img className="px-4 py-2" src={settings} alt="settings" />
            </Link>
            <Link to ='/support/supportAdd'>
               <img className="px-4 py-2" src={AddFile} alt="AddFile" />
            </Link>
         </div>
         <div className="flex-grow-1 py-2 d-flex align-items-center  ">
            <div className="row w-100 d-flex flex-column flex-xl-row ml-5" id="Support__filtrage">
                  <p className="text-center my-2"> Filtrez selon un</p> 
                  <select className="Support__dropdown mx-auto my-2">
                     <option value="semestre">semestre</option>
                     <option value="s1">s1</option>
                     <option value="s2">s2</option>
                     <option value="s3">s3</option>
                     <option value="s4">s4</option>
                     <option value="s5">s5</option>
                     <option value="s6">s6</option>
                  </select>
                  <p className="text-center my-2">les supports du </p> 
                  <select className="Support__dropdown mx-auto my-2">
                     <option value="modules">modules</option>
                     <option value="1">xml et les framworks</option>
                     <option value="2">java poo</option>
                  </select>
            </div>
         </div>
      </div>
      <div className="row mx-3 p-2 d-flex justify-content-center">
      {
         Supports.map( (Support) => (
            <SupportCard Support={Support} />
         ))
      }
      </div>
   </div>
)
}

export default SupportMain
