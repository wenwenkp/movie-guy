import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import Popular from '../../components/Popular/Popular';
import TopRated from '../../components/TopRated/TopRated';
import NowPlaying from '../../components/NowPlaying/NowPlaying';
import MovieList from '../../components/MovieList/MovieList';
import Movie from '../../components/Movie/Movie';
import Profile from '../../components/Profile/Profile';
import Home from '../../components/Home/Home';

import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

import userService from '../../utils/userService';
import movieApi from '../../services/movie_api';
import userApi from '../../services/user_api';

class App extends React.Component {
    state = {
      user: userService.getUser(),
      keyword: '',
      searchResult: [],
      myMovies: [],
      // checkbox: false,
      isChecked: false,

    };

  async componentDidMount() {
    if (this.state.user) {
      let result = await userApi.getFavMovie();
      this.setState({
        myMovies: result,
      })
    }
  }

  handleLogout = () => {
    this.handleButtonClick();
    console.log('logout clicked');
    userService.logout();
    console.log('logout!');
    this.setState({ 
      user: null,
      myMovies: [],
    });
  }

  handleSignupOrLogin = async () => {
    let result = await userApi.getFavMovie();
    this.setState({
      user: userService.getUser(),
      myMovies: result,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSearch = async () => {
    let result = await movieApi.searchMovie(this.state.keyword);
    this.setState({
      searchResult: result,
      keyword: '',
    });
  }

  addFavMovie = async (movie) => {
    let result = await userApi.addFavMovie(movie.id, movie.title, movie.poster_path);
    this.setState({
      myMovies: result,
    })
    return null;
  }

  removeFavMovie = async (movieId) => {
    console.log(movieId);
    console.log(typeof movieId);
    let result = await userApi.removeFavMovie(movieId);
    this.setState({
      myMovies: result,
    })
    return null;
  }

  handleButtonClick=()=> {
    console.log("button was pressed!");
    this.toggleIsChecked();
}

handleCheckboxChange = (event) => {
  console.log("checkbox changed!", event);
  this.setState({isChecked: event.target.checked});
}

toggleIsChecked = ()=> {
  console.log("toggling isChecked value!");
  this.setState({isChecked: !this.state.isChecked});
}
  

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar
            isChecked={this.state.isChecked}
            user={this.state.user}
            keyword={this.state.keyword}
            handleLogout={this.handleLogout}
            handleSearch={this.handleSearch}
            handleButtonClick={this.handleButtonClick}
            handleCheckboxChange={this.handleCheckboxChange}
            // handleNavbar={this.handleNavbar}
            handleChange={this.handleChange} />
          <Switch>
            <Route exact path='/' render={() => {
              return (
                <Home />
              )
            }} />
            <Route exact path='/movies/top_rated' render={() => {
              return (<TopRated />)
            }} />
            <Route exact path='/movies/now_playing' render={() => {
              return (<NowPlaying />)
            }} />
            <Route exact path='/movies/popular' render={() => {
              return (<Popular />)
            }} />
            <Route exact path='/search/:keyword' render={() => {
              return (<MovieList movies={this.state.searchResult} />)
            }} />
            <Route exact path='/movie/:id' render={(props) => {
              return (
                <Movie
                  id={props.match.params.id}
                  user={this.state.user}
                  addFavMovie={this.addFavMovie}
                  removeFavMovie={this.removeFavMovie}
                  myMovies={this.state.myMovies}
                />
              )
            }} />

            <Route exact path='/profile' render={() => {
              return (<Profile user={this.state.user} myMovies={this.state.myMovies} />)
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
