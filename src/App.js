import './App.css';
import {Switch, Route} from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage'

function App() {

  return ( 
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
