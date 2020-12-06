import './App.css';
import {Switch, Route} from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage'
import HomeEtu from './Components/Etudiant/Home'
import Actualites from './Components/Etudiant/Actualite/Actualites'
import Myclass from './Components/Etudiant/Myclass/Myclass'
import MyclassModules from './Components/Etudiant/Myclass/Myclass-modules'
import Support from './Components/Etudiant/Support/Support'
import Contact from './Components/Etudiant/contact'
import ModuleOptions from './Components/Etudiant/Myclass/ModuleOptions'
import Annonce from './Components/Etudiant/Myclass/annonce'
import Departement from './Components/Admin/Departement/Departement'
import professeur from './Components/Professeur/professeur';
import Devoirs from './Components/Etudiant/Myclass/devoirs'
import DevoirContent from './Components/Etudiant/Myclass/DevoirContent'
import Etudiant from './Components/Admin/Etudiant_Admin/Etudiant'
import ProfesseurAdmin from './Components/Admin/Prof_Admin/ProfesseurAdmin'
import ActualiteAdmin from './Components/Admin/Actu_Admin/ActualiteAdmin'


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
         <Route  path='/devoirs' component={Devoirs} />
         <Route  path='/devoirContent' component={DevoirContent} />
         <Route  path='/support' component={Support} />
         <Route  path='/contact' component={Contact} />
         <Route  path='/depart'  component={Departement}/>
         <Route  path='/professeur' component={professeur} />
         <Route path='/AdminEtudiant' component={Etudiant}/>
         <Route path='/AdminProf' component={ProfesseurAdmin}/>
         <Route path='/AdminActu' component={ActualiteAdmin}/>
      </Switch>
    </div>
  );
}

export default App;
