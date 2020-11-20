import React, { useState } from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import { Route, Switch} from "react-router-dom"
import Actu1 from './actu_comp/Actu1'
import Actu from './actu_comp/Actu'
import photo2 from './Imageactu/image_98.png'
function Actualites() { 
    const [posts, setposts] = useState([{
	
        "name" : "Titre du contenu ",
        "image" : photo2,
    
    },
    {
        "name" : "Titre du contenu 2",
        "image" : photo2,
    
    },
    {
        "name" : "Titre du contenu 3",
        "image" : photo2,
    },
    {
        "name" : "Titre du contenu 4",
        "image" : photo2,
    
    },
    {
        
        "name" : "Titre du contenu 5",
        "image" : photo2,
    
    },
    {
        "name" : "Titre du contenu 6",
        "image" : photo2,
    
    },
    {
        "name" : "Titre du contenu 7",
        "image" : photo2,
    
    },
    {
        "name" : " titre du contenu 8",
        "image" : photo2,
    
    },
    ]);
   return(
      <React.Fragment>
         <SideNav />
         <div className="sous-app" >
            <Menu />
            <Switch>
               <Route exact path="/acts"> 
                  <Actu1 posts={posts}/>
               </Route>
               <Route path ='/acts/acts1' component={Actu}/>         
            </Switch>
         </div>
      </React.Fragment>
   )
}
export default Actualites
