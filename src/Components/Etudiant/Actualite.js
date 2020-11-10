import React from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/Actualite.css'
import photo1 from './Imageactu/photo1.png'



function Actualite() {
    return (
        <React.Fragment>
			
        <SideNav />
        <div className="sous-app" >
            <Menu />
            <div className="row cont p-4 border border-dark">
                <div className=" row mx-0 w-100">
                    <div className="col-md-8 col-8 border border-dark ">
                        <img className="w-100" src={photo1}></img>
                    </div>
                    <div className="col-md-4 col-8 border border-dark">
                        <div className=" d-flex "></div>
                    </div>
                </div>
                
            </div>
        </div>
    
 </React.Fragment>
    )
}

export default Actualite
