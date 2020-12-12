import React , {useEffect,useState} from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link,withRouter} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import '../../../styles/Myclass.css'
import Devoir from '../ImageEtd/Group 44.svg'
import UserDev from '../ImageEtd/Group 58.svg'
import DevoirsX from '../ImageEtd/Group 53.svg'
import Time from '../ImageEtd/Group99.svg'
import Upload from '../ImageEtd/UpLoad.svg'
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import moment from 'moment'
import pdf from '../ImageEtd/pdf.svg'
import word from '../ImageEtd/word.svg'


function DevoirContent(props){
	const [devoir,setDevoir]=useState([])
	const [confirmer,setConfirmer]=useState(false)
	const [showUp,setShowUp]=useState(true)
	const [fileInfo,setFileInfo]=useState({})
	const [file,setFile]=useState('')
	const [toServer,setToServer]=useState(false)
	
	let token= 'Bearer '+localStorage.token
	let headers={
			headers : {Authorization: token}
		} 
		
	const Retour = () => {
	
		props.history.push('/devoirs/'+devoir[0].id_module);
	}
	useEffect(() => {
	
		if(localStorage.token) {
			let data = jwtdecode(localStorage.token)
		 if(!data.type == 'Etudiant'){
				props.history.push('/')
			}else if( data.class == null){

				props.history.push('/approuvee')
			}
		  }else{
			props.history.push('/')
		  }

		
		axios.get('http://localhost:8000/api/getDevior/'+props.match.params.id,headers)
			.then(res => {
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
					console.log(res.data)
					setDevoir(res.data)
					if(res.data[1]){
						setShowUp(false)
						setToServer(true)
						console.log(moment(res.data[1].date).format('DD-MM-YYYY'))
						setFileInfo({
							name: res.data[1].fileName,
							type:res.data[1].fileType,
							date: moment(res.data[1].date).format('DD-MM-YYYY')
						})
					}
				
				} 
				if(res.data.MsgErr == 'JustForEtu'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
				}
			})
			.catch(err => {
				console.log(err)
			})
	},[])
	const sendDevoir= () => {

		let user = jwtdecode(localStorage.token)
		let data=new FormData()
		
		if(file != ''){
			let date = new Date()
			data.append('file',file)
			data.append('fileName',fileInfo.name)
			data.append('fileType',fileInfo.type)
			data.append('date',date)
			data.append('emailEtu',user.userEmail)
			data.append('devoir_id',props.match.params.id)
			
		}
		
		axios.post('http://localhost:8000/api/setDevior',data,headers)
			.then(res => {
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
					setToServer(true)
					setConfirmer(false)
				
				}else if(res.data.MsgErr == 'JustForEtu'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
				}
			})
			.catch(err => {
				console.log(err)
			})
			
	}

	const fileChange= (e)=>{
		console.log(e.target.files[0])
		let type=e.target.files[0].type.split('/')[1]
		if(type=="vnd.openxmlformats-officedocument.wordprocessingml.document"){
			type='docx'
		}
		if((type=='pdf' || type=='docx') && e.target.files[0].size<=1000000  ){
		setFileInfo({
			name: e.target.files[0].name,
			size: e.target.files[0].size,
			date: moment(new Date()).format('DD-MM-YYYY'),
			type
		})
		setFile(e.target.files[0])
		setConfirmer(true)
		setShowUp(false)
		
	}
	}
	const FileDelete= () => {
		let data={...fileInfo,idDev: props.match.params.id}
		axios.post('http://localhost:8000/api/deleteDevoir',data,headers)
			.then(res => {
				if(res.data.MsgErr == 'TokenExpiredError'){
					localStorage.removeItem('token')
					props.history.push('/expire')
				}else if(res.data){
					setToServer(false)
					setConfirmer(false)
					setShowUp(true)
				
				}else if(res.data.MsgErr == 'JustForEtu'){
					localStorage.removeItem('token')
					props.history.push('/notallowed')
				}
			})
			.catch(err => {
				console.log(err)
			})
			
	}
  if(devoir[0]){
	 
	return(
		 <React.Fragment>
			
				<SideNav />
				<div className="sous-app" >
					<Menu />
					<div className="row justify-content-around cont" >
						<div className="devCont row justify-content-between col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10 DevoirContent" >
							<div className="TitleDev col-12 col-sm-12 col-md-9 col-lg-9 col-lx-9">
								<img src={DevoirsX} className="IconDev" />
								<div className="NameDev">
									<h2>{devoir.length >= 0 ?devoir[0].name: null}</h2>
									<p>Professeur - {devoir.length >= 0 ?moment(devoir[0].date.seconds).format('DD MMMM'): null}</p>
								</div>
							</div>

							<div className="LimiteDev align-self-center col-12 col-sm-12 col-md-3 col-lg-3 col-lx-3">
									<img src={Time} /> <p>Date limite : {devoir.length >= 0 ?moment(devoir[0].date.seconds).format('DD MMMM'):null}</p>
							</div>
							<div className="ContentDev align-self-center col-12 col-sm-12 col-md-12 col-lg-12 col-lx-12">
									<p>{devoir.length >= 0 ?devoir[0].contenu: null}
									   </p>
							</div>
							<div className="upload row justify-content-start col-12 col-lg-10 col-md-12 col-sm-12 col-xl-12">
								{showUp?<label forhtml="inpt" >
									<input type="file" id="inpt" hidden onChange={fileChange} name="file" />
									<img src={Upload} />
									<div className="uploadConditions">
										<p>Max size: 1mb </p>
										<p>Doc,pdf</p>
								 	</div>
								</label>:
								<React.Fragment>
									{fileInfo.type=='pdf'?<img src={pdf} />
									:<img src={word} />}
									<div className="fileInfo">
									<span>{fileInfo.name}</span>
									<p>{fileInfo.type}</p>
									</div>
								</React.Fragment>
								}
							</div>
							<div className="buttons row justify-content-end col-12 col-lg-10 col-md-12 col-sm-12 col-xl-12">
								{confirmer?<button className="ajouter btn btn-primary" data-toggle="modal" data-target="#exampleModal"  >Confirmer</button>:null}
								{toServer?<button className="annuler" onClick={FileDelete} >Annuler la remise</button>:null}
								<button className="retour" onClick={() => {Retour()}} >Retour</button>
								
								<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog" role="document">
										<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLabel">Rendre le devoir</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											Vous etes sure pour joindre ce fichier?
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary AnnulerConf" onClick={() => {setShowUp(true); setConfirmer(false)}} data-dismiss="modal">Annuler</button>
											<button type="button" class="btn btn-primary" data-dismiss="modal" onClick={sendDevoir}>Enregistere</button>
										</div>
										</div>
									</div>
									</div>
							</div>
						</div>
					</div>
						
					
					
				</div>
			
		 </React.Fragment>

		)
	}else{
		return(
			<h2>nothing</h2>
		)
	}
}

export default withRouter(DevoirContent)