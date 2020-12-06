import jwtDecode from 'jwt-decode'
import React,{useEffect} from 'react'
import Menu from '../Dashboard/Menu'
import jwtdecode from 'jwt-decode'


function Approuve(props){
    useEffect(() => {

		if(localStorage.token) {
            let data = jwtdecode(localStorage.token)
          
		   if(data.type != 'Etudiant' /*|| data.type !='prof' */){
				props.history.push('/')
			}else if( data.class != null ) {
                props.history.push('/homeEtu')
            }else if(data.class == 'prof'){
                //push prof home
            }
		  }else{
			props.history.push('/')
		  }
		
		
	})
    return(
        <React.Fragment>
        <div className="sous-app" >
            <Menu />
            <div className="row cont" >
                <h1>Votre compte n'est pas approuvee</h1>
                <p></p>
            </div>
                
            
        </div>
    
 </React.Fragment>

    )
}

export default Approuve