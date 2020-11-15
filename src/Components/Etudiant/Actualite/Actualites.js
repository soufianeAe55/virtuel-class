import React ,{useState , useEffect,useMemo}from 'react'
import SideNav from '../../Dashboard/sideNav'
import Menu from '../../Dashboard/Menu'
import '../../../styles/Actualite.css'
import '../../../styles/homeEtu.css'

import Actu from './actu_comp/Actu'
import Pagination from './actu_comp/Pagination'
import photo2 from './Imageactu/image_98.png'

function Actualites(){
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
/*----------------------Pour l'affichage de l'actualite et pagination-------------------------*/
const [loading, setloading] = useState(false);
const [currentPage, setcurrentPage] = useState(1);
const [postsPerPage, setpostsPerPage] = useState(4);
const indexOfLastPost= currentPage * postsPerPage;
const indexOfFirstPost=indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost ,indexOfLastPost);
const paginate = pageNumber => setcurrentPage(pageNumber);
/*--------------------------------------------------------------------------------------------*/
const [actuSwitch, setactuSwitch] = useState(true);

const [GetPost, setGetPost] = useState({ name :'zak',
image : ''
})


useEffect(() => {
   const SwitchPage =()=>{
    setactuSwitch(false);
    
    
} 
    return () => {
        SwitchPage()
    }
}, [GetPost]);

useMemo(() => {}, [GetPost]);

	return (
 <React.Fragment>
            
    <SideNav />
    <div className="sous-app" >
    <Menu />
        <div className="row conter p-4 ">
        {actuSwitch ?
        <div className=" row mx-0 w-100  ligne1">
            <div className="col-md-7 col w-100   ligne1_col1 " >
               <h5 className=" actu font-weight-bold  " >Dernières Actualités</h5>
               <h5 className="titre "> Titre du contenu actuelle </h5>
            </div>

            <div className="col-md-5 col my-0">
                <div className="row   " >
                    <div className="col-12 div-contenu">
                        {currentPosts.map(post=> (
                        <div className=" d-flex mb-2  " onClick={ ()=>setGetPost({
                            name :post.name,
                            image :post.image
                        })
                        
                       
                        
                    }> 
                            <div key={post.id} className="col-sm-4 col-5  div-image" style={{backgroundImage:"url("+post.image+")",backgroundSize:" 100% 100% " }} >
                            </div>
                            <div key={post.id} className="col-sm-8 col-7 bg-white div-name mx-0   p-1 ">
                                <h6 className="mx-2 my-2" >{post.name}</h6> 
                                <p className="mx-2 my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                            </div>
                        </div>
                        ))
                    }
                    </div>
          
                </div>
                <div className="row   ">
                    <div className ="col-12 align-self-centre my-1  ">
                        <Pagination  postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
                    </div>
                </div>
           
            </div>
       
        </div> : <Actu getpost={GetPost}/> 
                }
    </div>
    </div>
    
 </React.Fragment> 
)
}

export default Actualites