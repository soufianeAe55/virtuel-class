import React ,{useState}from 'react'
import '../../styles/Departement.css'
function DepartementMain() {
  const [actif1, setactif1] = useState("actif")
  const [actif2, setactif2] = useState("")
  const [actif3, setactif3] =useState("")
  const [actif4, setactif4] =useState("")
  const handleLinkOne = () => {
     setactif1("actif")
     setactif2("")
     setactif3("")
     setactif4("")
  }
  const handleLinkTwo = () => {
     setactif1("")
     setactif2("actif")
     setactif3("")
     setactif4("")
  }
  const handleLinkThree = () => {
    setactif1("")
    setactif2("")
    setactif3("actif")
    setactif4("")

 }
 const handleLinkfour = () => {
  setactif1("")
  setactif2("")
  setactif3("")
    setactif4("actif")
}
    return(
        <React.Fragment>
           
          
               <div className="row   conterDepart  ">
               <div className="d-flex flex-column mx-3 my-2 filtrer">
               <p className="">filtrer par nom de departement :</p>
               <input type="text" className="w-50 "/>
               </div>
               
               <div className ="row border border-dark w-100 mx-0">
               <div className="col-lg-9 col-md-10 col-12 mx-0 ">
               <div className=" d-flex w-100  departement_header ">
                <div className=" col-lg-2 border border-blue  entete mx-1 " onClick={handleLinkOne} id={actif1}>
                <p className="nombre "> 05</p>
                <p>Departement</p>
                </div>
                <div className=" col-lg-2 border border-blue entete mx-1" onClick={handleLinkTwo} id={actif2}>
                <p className="nombre"> 15</p>
                <p>Filière</p>
                </div>
                <div className=" col-lg-2 border border-blue entete mx-1" onClick={handleLinkThree} id={actif3}>
                <p className="nombre"> 20</p>
                <p>Classes</p>
                </div>
                <div className=" col-lg-2 border border-blue entete mx-1"   onClick={handleLinkfour} id={actif4} >
                <p className="nombre"> 50</p>
                <p>Modules</p>
                </div>
               
               </div>
               <div className=" border border-dark  ">
               
               <p className="">hellooooooo1</p>
               </div>
               </div>
                  <div className="col-md-2 col-lg-3  mt-10 border border-dark hhhh">
                  <p>hello</p>
                  </div></div>
               
                  
              
               </div>
           
       
       </React.Fragment>
       )
}



export default DepartementMain
