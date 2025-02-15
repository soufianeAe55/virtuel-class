import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import LoginPage from './Components/Login/LoginPage'
import App from './App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>	
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
