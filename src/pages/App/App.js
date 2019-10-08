import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import MovieList from '../../components/MovieList/MovieList';
// import TopMovies from '../../components/TopMovies/TopMovies';
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
      movies: [],
      nowPlayingMovies: [],
      // topRatedMovies: [],
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  // async componentDidMount() {
  //   // let nowPlayingMovies = await movieApi.getNowPlaying();
  //   // let topRatedMovies = await movieApi.getTopRated();
  //   this.setState({
  //     nowPlayingMovies: nowPlayingMovies,
  //     // topRatedMovies: topRatedMovies
  //   });
  //   console.log(this.state.nowPlayingMovies);
  // }

  handleLogout = () => {
    userService.logout();
    console.log('user log out!')
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    console.log('handlesinguporlogin');
    this.setState({user: userService.getUser()});
  }

  handleList = async (type) => {
    console.log(type);
    let movies = await movieApi.getMovies(type);
    this.setState({
      // nowPlayingMovies: nowPlayingMovies,
      movies: movies
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar user={this.state.user} handleLogout={this.handleLogout} handleList={this.handleList}/>
          <Switch>
            {/* movies now playing */}
            <Route exact path='/' render={() => {
              // return (<MovieList movies={this.state.nowPlayingMovies} />)
              return <div>
                home page
              </div>
            }} />
            {/* top rated movies */}
            <Route exact path='/movies' render={() => {
              return (<MovieList movies={this.state.movies} />)
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
