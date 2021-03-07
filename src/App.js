import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { Exam } from './pages/Exam';
import { NewExam } from './pages/NewExam';

function App() {
  return (
    <Router>
      <div className="container">
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Exam" component={Exam}/>
        <Route path="/NewExam" component={NewExam}/>
      </Switch>
    </Router>
  );
}

export default App;
