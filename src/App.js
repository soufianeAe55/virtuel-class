import './App.css';
import {Switch, Route} from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage'
import HomeEtu from './Components/Etudiant/Home'
import Actualites from './Components/Etudiant/Actualites'
import Myclass from './Components/Etudiant/Myclass'
import Support from './Components/Etudiant/Support'
import Contact from './Components/Etudiant/contact'


function App() {
  return ( 
    <div className="container-fluid">
      <Switch>
         <Route  exact path='/'  component={LoginPage} />
         <Route  path='/homeEtu' component={HomeEtu} />
          <Route  path='/acts' component={Actualites} />
         <Route  path='/Myclass' component={Myclass} />
         <Route  path='/support' component={Support} />
         <Route  path='/contact' component={Contact} />

      </Switch>
    </div>
  );
}

export default App;
