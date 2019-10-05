import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieList from '../../components/MovieList/MovieList';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar user={this.state.user} />
          <Switch>
            <Route exact path='/' component={MovieList} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/login' component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
