import React ,{useState , useEffect}from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/Actualite.css'
import '../../styles/homeEtu.css'
import photo1 from './Imageactu/photo1.png'
import ActuPosts from './actu_comp/ActuPosts'
import Pagination from './actu_comp/Pagination'
import photo2 from './Imageactu/image_98.png'

function Actualites(){
const [posts, setposts] = useState([{
	
	"name" : "titre du contenu ",
	"image" : photo2,

},
{
	"name" : "titre du contenu 2",
	"image" : photo2,

},
{
	"name" : "titre du contenu 3",
	"image" : photo2,
},
{
	"name" : "titre du contenu 4",
	"image" : photo2,

},
{
	
	"name" : "titre du contenu 5",
	"image" : photo2,

},
{
	"name" : "titre du contenu 6",
	"image" : photo2,

},
{
	"name" : "titre du contenu 7",
	"image" : photo2,

},
{
	"name" : " titre du contenu 8",
	"image" : photo2,

},


]);
const [loading, setloading] = useState(false);
const [currentPage, setcurrentPage] = useState(1);
const [postsPerPage, setpostsPerPage] = useState(4);

const indexOfLastPost= currentPage * postsPerPage;
const indexOfFirstPost=indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost ,indexOfLastPost);


const paginate = pageNumber => setcurrentPage(pageNumber);

	return (
        <React.Fragment>
			
        <SideNav />
        <div className="sous-app" >
            <Menu />
            <div className="row cont p-4 ">
                <div className=" row mx-0 w-100  ligne1">
					<div className="col-md-7 col w-100   ligne1_col1 " >
						
						
                        <h5 className=" actu font-weight-bold  " >Dernières Actualités</h5>
                        <h5 className="titre "> titre du contenu actuelle </h5>
						
						
                    </div>
        
                    <div className="col-md-5 col my-0">
                    <div className="row   ">
                    
                    <ActuPosts posts={currentPosts} loading={loading}/>
                   
                    </div>
                    <div className="row   ">
                    <div className ="col-12 align-self-centre my-1  ">
                    <Pagination  postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
                    </div>
                    </div>
                    
                     </div>
                
            </div>
        </div>
    </div>
    
 </React.Fragment>
    )
}

export default Actualites