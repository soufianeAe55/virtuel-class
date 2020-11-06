import './App.css';
import {Switch, Route} from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage'
import HomeEtu from './Components/Etudiant/Home'
import Myclass from './Components/Etudiant/Myclass'
import SideNav from './Components/Dashboard/sideNav'

function App() {

  return ( 
    <div className="container-fluid">
    <SideNav />
      <Switch>
         <Route exact path='/' component={LoginPage} />
         <Route  path='/homeEtu' component={HomeEtu} />
         <Route  path='/Myclass' component={Myclass} />
      </Switch>
    </div>
  );
}

export default App;
