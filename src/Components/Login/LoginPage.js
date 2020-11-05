import React from 'react';
import {Switch, Route,BrowserRouter as Router} from 'react-router-dom';
import './LoginPage'
import SeConnecter from './Seconnecter';
import Sinscrire from './Sinscrire';


function LoginPage(){
	return(
		<div>
		 <Router>
		 	<Route path='/' exact component={SeConnecter} />
		 	<Route path='/Sinscrire' component={Sinscrire} />
		 </Router>
		</div>
	)
}

export default LoginPage