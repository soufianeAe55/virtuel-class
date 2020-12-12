import React,{useEffect,useState} from 'react'
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import AnnonceCardComment from '../Etudiant/Myclass/AnnonceCardComment'



function Comments(props) {

      const [comments,setComments]=useState([])
      const [activer,setActiver]=useState(false)

      let data=jwtdecode(localStorage.token)
      let token= 'Bearer '+localStorage.token
      let headers={
            headers : {Authorization: token}
      } 
      

      useEffect(() => {
      
         if(localStorage.token) {
            
            if(data.type != 'Professeur' ){
               localStorage.removeItem('token')
                  props.history.push('/')

               }
               
            if(data.class == null){
                  props.history.push('/approuvee')
               }

         }else{
            props.history.push('/')
         }

         axios.get('http://localhost:8000/api/getCommentsForProf/'+props.id,headers)
         .then(res => {
            if(res.data.MsgErr == 'JustForProf'){
               localStorage.removeItem('token')
               props.history.push('/notallowed')
            }
            
            if(res.data.MsgErr == 'TokenExpiredError' || res.data.MsgErr=='InvalidTokenError'){
               localStorage.removeItem('token')
               props.history.push('/expire')
            }else if(res.data){
            
               setComments(res.data)
               
            } 
         })
         .catch(err => {
            console.log(err)
         })

      },[props.added])  

      

      const activerComments= (e) =>{
         e.preventDefault()
         if(activer) setActiver(false)
         else setActiver(true)
      }
   
     
      
         
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

export default Comments
