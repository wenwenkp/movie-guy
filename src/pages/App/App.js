import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import MovieList from '../../components/MovieList/MovieList';
import Movie from '../../components/Movie/Movie';
import Search from '../../components/Search/Search';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import userService from '../../utils/userService';
import movieApi from '../../services/movie_api';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      topRatedMovies: [],
      nowPlayingMovies: [],
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    let top_rated = await movieApi.getMovies('top_rated');
    let now_playing = await movieApi.getMovies('now_playing');
    this.setState({
      topRatedMovies: top_rated,
      nowPlayingMovies: now_playing
    });
  }

  handleLogout = () => {
    userService.logout();
    console.log('user log out!')
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    console.log('handlesinguporlogin');
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
          <Switch>
            <Route exact path='/' render={() => {
              return <div>
                home page
              </div>
            }} />
            <Route exact path='/movies/now_playing' render={() => {
              return (<MovieList movies={this.state.nowPlayingMovies} />)
            }} />
            <Route exact path='/movies/top_rated' render={() => {
              return (<MovieList movies={this.state.topRatedMovies} />)
            }} />
            <Route exact path='/movie/:id' render={(props) => {
              return (<Movie id={props.match.params.id} />)
            }} />
            <Route exact path='/search/:input' render={(props) => {
              return (<Search input={props.match.params.input} />)
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
