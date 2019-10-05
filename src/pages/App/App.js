import React from 'react';
// import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';


function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path='/signup' component={SignupForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
