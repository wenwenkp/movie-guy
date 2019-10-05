import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import MovieList from '../../components/MovieList/MovieList';
import Movie from '../../components/Movie/Movie';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import userService from '../../utils/userService';
import movieApi from '../../services/movie_api';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      nowPlayingMovies: [],
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    let nowPlayingMovies = await movieApi.getNowPlaying();
    this.setState({
      nowPlayingMovies: nowPlayingMovies,
    });
    console.log(this.state.nowPlayingMovies);
  }

  handleLogout = () => {
    userService.logout();
    console.log('user log out!')
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    console.log('handlesinguporlogin');
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
          <Switch>
            <Route exact path='/' render={() => {
              return (<MovieList nowPlayingMovies={this.state.nowPlayingMovies} />)
            }} />
            <Route exact path='/movie/:id' render={(props) => {
              return (<Movie id={props.match.params.id} />)
            }} />
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route exact path='/login' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
