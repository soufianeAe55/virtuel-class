import React from 'react'
import '../../../styles/Actualite.css'
const ActuPosts = ({posts ,loading}) => {
    if(loading){
        <h4> chargement ...</h4>
    }
    return <div className="col-12 div-contenu">
    {posts.map(post=> (
        <div className=" d-flex mb-2 " > 
      
            <div key={post.id} className="col-sm-4 col-5  div-image" style={{backgroundImage:"url("+post.image+")",backgroundSize:" 100% 100% " }} >
                 
             </div>
            <div key={post.id} className="col-sm-8 col-7 bg-white div-name mx-0   p-1 ">
              <h6 className="mx-2 my-2" >{post.name}</h6> 
              <p className="mx-2 my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </div>
        </div>
      
        
    )
    )
   



}
       </div>
     
 
  
    
    

   
       
    
}

export default ActuPosts
