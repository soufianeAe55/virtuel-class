import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/SupportEtu.css'
import settings from '../Dashboard/imgs/settings.svg'
import AddFile from '../Dashboard/imgs/AddFile.svg'
import SupportCard from './SupportCard'
// import Arrow  from '../Dashboard/imgs/arrowDown.svg'


function Support() {
 return(
   <React.Fragment>
      <SideNav />
      <div className="sous-app" >
         <Menu />
         <div className="row cont d-flex flex-column ">
            <div className="m-3 d-flex flex-row-reverse">
               <div className="mx-2 p-2  d-flex flex-column flex-lg-row justify-content-around">
                  <img className="px-4 py-2" src={settings} alt="settings" />
                  <img className="px-4 py-2" src={AddFile} alt="AddFile" />
               </div>
               <div className="flex-grow-1 py-2 d-flex align-items-center  ">
                  <div className="row w-100 d-flex flex-column flex-xl-row" id="Support__filtrage">
                        <p className="text-center"> Filtrez selon un</p> 
                        <select className="Support__dropdown">
                           <option value="semestre">semestre</option>
                           <option value="s1">s1</option>
                           <option value="s2">s2</option>
                           <option value="s3">s3</option>
                           <option value="s4">s4</option>
                           <option value="s5">s5</option>
                           <option value="s6">s6</option>
                        </select>
                        <p className="text-center">les supports du </p> 
                        <select className="Support__dropdown">
                           <option value="modules">modules</option>
                           <option value="1">xml et les framworks</option>
                           <option value="2">java poo</option>
                        </select>
                  </div>
               </div>
            </div>
            <div className="row mx-3  p-2 d-flex justify-content-center ">
               <SupportCard />
               <SupportCard />
               <SupportCard />
               <SupportCard />
               <SupportCard />
               <SupportCard />
               <SupportCard />
               <SupportCard />
               <SupportCard />
               <SupportCard />
               <SupportCard />
            </div>
         </div>
      </div>
   </React.Fragment>
 )
}

export default Support
