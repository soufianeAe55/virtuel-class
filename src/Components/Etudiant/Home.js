import React ,{useState}from 'react'
import SideNav from '../Dashboard/sideNav'
import Menu from '../Dashboard/Menu'
import '../../styles/homeEtu.css'
import welcome from './ImageEtd/welcome.svg'
import home2 from './ImageEtd/home2.svg'
import home3 from './ImageEtd/home3.svg'

function HomeEtu(){
const [Unkown, setUnkown] = useState("Zakariaa");
	return(
		 <React.Fragment>
			<SideNav />
			<div className="sous-app" >
			<Menu />
			<div className="row cont " >
				<div className="row  mx-3  w-100    " id="ligne1">
					<div className=" mx-0 col-md-12    " id="ligne1_para">
						<div className=" mx-0 w-100 bg-white  row rounded">
							<div className="col-md-7   my-lg-5 my-lg-4 mt-3 p-lg-3 ">
								<h5 className=" mx-lg-3 mx-1 mb-3 font-weight-bold font-family-montserrat h51 ">Bienvenue chers {Unkown}</h5>
								<p className="mx-lg-3 my-1 mx-1 para1 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  </p>
							</div>
						
							<div className=" col-md-5  cont-img mb-sm-4 ligne1_img">
								<img className=" w-100 h-100 ml-lg-3 ml-2 img1"src={welcome} ></img>
							</div>
						</div>
					</div>
	
				</div>
				<div className="row  w-100 mx-3 my-2 d-flex  " id="ligne2">
					<div className=" mx-0 my-2 col-md-6  ">
						<div className=" mx-0 w-100 row h-100 bg-white rounded ">
							<div className="col-md-7  my-lg-5 my-4 p-lg-3">
								<h5 className=" mx-lg-3 w-100 font-weight-bold font-family-montserrat  h5">Collaborer facilement avec vos collegues</h5>
							</div>
							<div className="col-md-5 ">
								<img className=" w-100 h-100 ml-lg-3 ml-2" src={home2}></img>
							</div>

						</div>
					</div>
					<div className=" mx-0 my-2 col-md-6 ">
						<div className=" mx-0 w-100  row  bg-white rounded">
							<div className="col-md-7 my-lg-5 my-4 p-lg-3">
								<h5 className=" mx-lg-3 mx-0 w-100 font-weight-bold font-family-montserrat h5 ">Communiquer facilement avec vos collegues</h5>
							</div>
							<div className="col-md-5">
								<img className=" w-100 h-100 ml-lg-3 ml-2" src={home3}></img>
							</div>
						</div>
					</div>
							
				</div>
			</div>
				
		</div>
		
		</React.Fragment>
		)
}

export default HomeEtu