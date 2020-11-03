import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import './LoginPage'
import SeConnecter from './SeConnecter';


function LoginPage(){
	return(
		<div>
		 <Switch>
		 	<Route exact path='/' component={SeConnecter} />
		 </Switch>
		</div>
	)
}

export default LoginPage