import React ,{useState}from 'react'
import '../../../../styles/Actualite.css'
import backLink from '../../../Dashboard/imgs/backLink.svg'
import {Link } from 'react-router-dom'
import moment from 'moment'

function Actu(props) {
  const [post] = useState(props.location.state)
  console.log(post)
  let dateTest=new Date(post.date)
  let h=dateTest.getUTCHours()
  dateTest.setHours(h)
  let date=moment(dateTest).format('DD-MM-YYYY-hh:mm')
  console.log(date+post.image)
   if(post){
    return (
      
        <div className=" row mx-3 w-100 d-flex flex-column  p-2  actu_row ">
        <div className="row  my-3 mx-0 "><Link to="/acts" className="p-3 svgBack">
        <img src={backLink} alt="" />
     </Link>
     </div>
        <div className ="row rowActu  mx-2  ">
        <div className =" col-md-4 col-12 rounded-left imageActu" style={{backgroundImage:"url(http://localhost:8000/images/Actualites/"+post.image+")",backgroundSize:"100% 100%" }}>
          
          </div>
          <div className =" col-md-8 col-12 bg-white p-4 rounded-right actu_left">
          <h5 className=" py-2"  >{post.name}</h5>
          <div className="trait   rounded-pill  mx-1 " > </div> 
         
    <p  className=" my-4 ">{post.contenu}</p>
          </div>
        </div></div>
          
    )}else{
      return(
        <div>
          <div class="donut"></div>
        </div>
      )
    }
}

export default Actu
