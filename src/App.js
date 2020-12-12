import './App.css';
import {Switch, Route} from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage'
import Expire from './Components/Login/SessionExpire'
import Allowed from './Components/Login/Access'
import Approuvee from './Components/Login/Approuve'
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
import ProfesseurAccueil from './Components/Professeur/ProfesseurAccueil'

function App() {
  return ( 
    <div className="container-fluid">
      <Switch>
         <Route  exact path='/'  component={LoginPage} />
         <Route  path='/homeEtu' component={HomeEtu} />
         <Route  path='/acts' component={Actualites} />
         <Route  path='/expire' component={Expire} />
         <Route  path='/approuvee' component={Approuvee} />
         <Route  path='/notallowed' component={Allowed} />
         <Route  path='/Myclass' component={Myclass} />
         <Route  path='/MyclassModules/:id' component={MyclassModules} />
         <Route  path='/ModuleOptions/:id' component={ModuleOptions} />
         <Route  path='/annonce/:id' component={Annonce} />
         <Route  path='/devoirs/:id' component={Devoirs} />
         <Route  path='/devoirContent/:id' component={DevoirContent} />
         <Route  path='/support' component={Support} />
         <Route  path='/contact' component={Contact} />
         <Route  path='/depart'  component={Departement}/>
         <Route  path='/professeur' component={professeur} />
         <Route  path="/professeurHome" component={ProfesseurAccueil} /> 
         <Route path='/AdminEtudiant' component={Etudiant}/>
         <Route path='/AdminProf' component={ProfesseurAdmin}/>
         <Route path='/AdminActu' component={ActualiteAdmin}/>
      </Switch>
    </div>
  );
}

export default App;
