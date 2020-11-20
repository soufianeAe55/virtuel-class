import React ,{useState}from 'react'
import '../../../../styles/Actualite.css'
import backLink from '../../../Dashboard/imgs/backLink.svg'
import {Link } from 'react-router-dom'
function Actu(props) {
  const [post] = useState(props.location.state)
 
    return (
      
        <div className=" row mx-3 w-100 d-flex flex-column  p-2  actu_row ">
        <div className="row  my-3 mx-0 "><Link to="/acts" className="p-3 svgBack">
        <img src={backLink} alt="" />
     </Link>
     </div>
        <div className ="row rowActu  mx-2  ">
        <div className =" col-md-4 col-12 rounded-left imageActu" style={{backgroundImage:"url("+post.image+")",backgroundSize:"100% 100%" }}>
          
          </div>
          <div className =" col-md-8 col-12 bg-white p-4 rounded-right actu_left">
          <h5 className=" py-2"  >{post.name}</h5>
          <div className="trait   rounded-pill  mx-1 " > </div> 
         
          <p  className=" my-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div></div>
          
    )
}

export default Actu
