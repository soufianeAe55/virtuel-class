import React ,{useState , useEffect,useMemo}from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '../../../../styles/Actualite.css'
import '../../../../styles/homeEtu.css'
import {Link } from 'react-router-dom'
import Actu from './Actu'
import Pagination from './Pagination'
import photo2 from '../Imageactu/image_98.png'
import moment from 'moment'

function Actu1(props){

   
/*----------------------Pour l'affichage de l'actualite et pagination-------------------------*/

const [currentPage, setcurrentPage] = useState(1);
const [postsPerPage] = useState(4);
const indexOfLastPost= currentPage * postsPerPage;
const indexOfFirstPost=indexOfLastPost - postsPerPage;
const currentPosts = props.posts.slice(indexOfFirstPost ,indexOfLastPost);
const paginate = pageNumber => setcurrentPage(pageNumber);
/*--------------------------------------------------------------------------------------------*/

   if(props.posts){
	return (
 
        <div className="row conter p-4 ">
     
            
        <div className=" row mx-0 w-100  ligne1">

           {currentPosts.length !=0 ?<div className="col-md-7 col w-100   ligne1_col1 " >
               <h5 className=" actu font-weight-bold  " >Dernières Actualités</h5>
               <h5 className="titre "> Titre du contenu actuelle </h5>
        </div>:<div className="donut"></div>}

            <div className="col-md-5 col my-0">
                <div className="row   " >
                    <div className="col-12 div-contenu">
                       {currentPosts.map(post=>
                       
                      { 

                        let dateTest=new Date(post.date).getTime()
                        let date=moment(dateTest).subtract(1,'hours').format('DD-MM-YYYY-hh:mm:ss')
                        console.log(date+post.image)
                        return(
                         <Link to={{
                            pathname:'/acts/acts1',
                            state :{...post}
                         }}>
                         
                         <div className=" d-flex mb-2  " > 
                           
                        <div key={post.id} className="col-sm-4 col-5  div-image" style={{backgroundImage:"url(http://localhost:8000/images/Actualites/"+date+"_"+post.image+")",backgroundSize:" 100% 100% " }} >
                            </div>
                            <div key={post.id} className="col-sm-8 col-7 bg-white div-name mx-0   p-1 ">
                                <h6 className="mx-2 my-2" >{post.name}</h6> 
                        <p className="mx-2 my-1">{post.contenu.slice(0,52)+' . . .'}</p>
                            </div>
                            
                        </div>
                        </Link>
                        
                        )})
                    }
                   
                  
                     
                    </div>
          
                </div>
                <div className="row   ">
                    <div className ="col-12 align-self-centre my-1  ">
                        <Pagination  postsPerPage={postsPerPage} totalPosts={props.posts.length} paginate={paginate}/>
                    </div>
                </div>
           
            </div>
       
        </div> 
    </div>
 
)
    }else{
        return (
            <div class="donut"></div>
        )
    }
}

export default Actu1