import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/Myclass.css'
import Avatar from '../../Dashboard/imgs/Avatar.svg'
import Sendco from '../ImageEtd/sendco.svg'
import AnnonceCardComment from './AnnonceCardComment'
import moment from 'moment'
import axios from 'axios'
import jwtDecode from 'jwt-decode'




function AnnonceCard(props){
	//console.log(props.data)
	const [comment,setComment]=useState('')
	const [comments,setComments]=useState([])
	const [activer,setActiver]=useState(false)
	const [added,setAdded]=useState(0)
	let token= 'Bearer '+localStorage.token
	let headers={
			headers : {Authorization: token}
		} 

	useEffect(() => {

		axios.get('http://localhost:8000/api/getComments/'+props.data.id,headers)
		.then(res => {
			if(res.data.MsgErr == 'TokenExpiredError'){
				localStorage.removeItem('token')
				props.history.push('/expire')
			}else if(res.data){
				setComments(res.data)
			
			}else if(res.data.MsgErr == 'JustForEtu'){
				localStorage.removeItem('token')
				props.history.push('/notallowed')
			}
		})
		.catch(err => {
			console.log(err)
		})	

	},[added])

	const Sendcomment = (e) =>{
		e.preventDefault()
		let token1=jwtDecode(localStorage.token)
		let str= token1.userEmail.split('-',1)[0].split('.')
		let userName=str[1]+' '+str[0]

		let data={
			comment,
			id_annonces: props.data.id,
			userName,
			date: new Date()
		}

		
		axios.post('http://localhost:8000/api/addComment',data,headers)
		.then(res => {
			if(res.data.MsgErr == 'TokenExpiredError'){
				localStorage.removeItem('token')
				props.history.push('/expire')
			}else if(res.data){
				setComment('')
				setAdded(1)
			
			}else if(res.data.MsgErr == 'JustForEtu'){
				localStorage.removeItem('token')
				props.history.push('/notallowed')
			}
		})
		.catch(err => {
			console.log(err)
		})
	}
	const activerComments= (e) =>{
		e.preventDefault()
		if(activer) setActiver(false)
		else setActiver(true)
	}

	const Comments= ()=> {
		if(comments.length == 1){
			return(
				<React.Fragment>
				   <AnnonceCardComment data={comments} />
				</React.Fragment>
			)
		}else if(comments.length > 1){
			comments.sort((a,b) =>{
				return a.date< b.date
			} )
			
			return(
				<React.Fragment>
				<a href="" className="MoreComments" onClick={activerComments}  > {comments.length-1} commentaires en cours </a>
				  {activer ? comments.map((commentaire,key) =>(
					   <AnnonceCardComment data={commentaire} key={key} />
					    ))
				  : <AnnonceCardComment data={comments[0]} />
				  }
				</React.Fragment>
			)
		}else if(comments.length==0){
			return(
				<React.Fragment>
				<p className="MoreComments"  > il n'y a pas de commentaire </p>
				   
				</React.Fragment>
			)
		}
	}
	return(
		  
				
	  			<div className="Ann col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
							<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard">
							<div className="AvatarProf">
								<img src={Avatar} />
								<div className="AvatarName">
								<span>{props.data.profName}</span>
								<p>{moment(props.data.date.seconds ,'ss').fromNow()}
								</p>
								</div>
							</div>
							<div className="AnnonceContent">
								<p> {props.data.contenu}
								 </p>
							</div>
						 </div>
						 <div className="Comments col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard2" >
						 	<Comments />
						 </div>
						
						 <div className="SendComment  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 AnnoceCard3" >
							<img className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" src={Avatar} className="UserComment" />
							
							<form className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11" onSubmit={Sendcomment} >
							 	<input placeholder="Ecrire un commentaire..." 
								 className="inputComment col-8 col-sm-9 col-md-10 col-lg-10 col-xl-11 "
								 value={comment} onChange={(e) => {setComment(e.target.value)}} />
							 	<button className="SendButtonComment" > <img src={Sendco} className="SendComment" /> </button>
							</form>
						 </div>
						</div>
			
		)
}

export default AnnonceCard