import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupForm from '../../components/SignupForm/SignupForm';
import MovieList from '../../components/MovieList/MovieList';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route exact path='/signup' component={SignupForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
