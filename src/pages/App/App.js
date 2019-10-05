import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieList from '../../components/MovieList/MovieList';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route exact path='/signup' component={SignupPage} />
          <Route exact path='/login' component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
