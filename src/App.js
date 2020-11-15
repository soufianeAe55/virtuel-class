import './App.css';
import {Switch, Route} from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage'
import HomeEtu from './Components/Etudiant/Home'
import Actualites from './Components/Etudiant/Actualite/Actualites'
import Myclass from './Components/Etudiant/Myclass/Myclass'
import MyclassModules from './Components/Etudiant/Myclass/Myclass-modules'
import Support from './Components/Etudiant/Support/Support'
// import SideNav from './Components/Dashboard/sideNav'
import Contact from './Components/Etudiant/contact'
import ModuleOptions from './Components/Etudiant/Myclass/ModuleOptions'
import Annonce from './Components/Etudiant/Myclass/annonce'



function App() {
  return ( 
    <div className="container-fluid">
      <Switch>
         <Route  exact path='/'  component={LoginPage} />
         <Route  path='/homeEtu' component={HomeEtu} />
         <Route  path='/acts' component={Actualites} />
         <Route  path='/Myclass' component={Myclass} />
         <Route  path='/MyclassModules' component={MyclassModules} />
         <Route  path='/ModuleOptions' component={ModuleOptions} />
         <Route  path='/annonce' component={Annonce} />
         <Route  path='/support' component={Support} />
         <Route  path='/contact' component={Contact} />

      </Switch>
    </div>
  );
}

export default App;
