import React,{useEffect} from 'react'
import Menu from '../Dashboard/Menu'
import jwtdecode from 'jwt-decode'
import axios from 'axios'


function Approuve(props){
    useEffect(() => {

		if(localStorage.token) {
            let data = jwtdecode(localStorage.token)
            console.log(data)
           
            if( data.class != null && data.type == 'Etudiant' ) {
                props.history.push('/homeEtu')
            }else if(data.class != null && data.type == 'Professeur'){
                props.history.push('/professeurHome')
            }else{
                if(data.class != null){
                localStorage.removeItem('token')
                props.history.push('/')
                }

            }

		  }else{
			props.history.push('/')
		  }
		
		
    })
    const sendData= () => {

        axios.get('http://localhost:8000/api/test')
        .then(res => {
            console.log(res)
        }).catch(err => {
            
        })
    }
    return(
        <React.Fragment>
        <div className="sous-app" >
                <Menu />
            <div className="row cont" >
                <h1 onClick={sendData}>Votre compte n'est pas approuvee</h1>
                <p></p>
            </div>
                
            
        </div>
    
 </React.Fragment>

    )
}

export default Approuve