import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import MovieList from '../../components/MovieList/MovieList';
import Movie from '../../components/Movie/Movie';
import Profile from '../../components/Profile/Profile';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

import userService from '../../utils/userService';
import movieApi from '../../services/movie_api';
import userApi from '../../services/user_api';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      topRatedMovies: [],
      nowPlayingMovies: [],
      popularMovies: [],
      user: userService.getUser(),
      keyword: '',
      searchResult: [],
    };
  }

  async componentDidMount() {
    let top_rated = await movieApi.getMovies('top_rated');
    let now_playing = await movieApi.getMovies('now_playing');
    let popular = await movieApi.getMovies('popular');

    this.setState({
      topRatedMovies: top_rated,
      nowPlayingMovies: now_playing,
      popularMovies: popular,
      test: this.getUser()
    });
  }

  getUser(){
    if(this.state.user){
      return this.state.user;
    }else{
      return null;
    }
  }

  popularMovies = async () => {
    let popular = await movieApi.getMovies('popular');
    this.setState({
      popularMovies: popular
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

  handleChange = (e) => {
    // this.props.updateMessage('');
    this.setState({
      //     // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSearch = async (e) => {
    // e.preventDefault();

    console.log(this.state.keyword)
    let result = await movieApi.searchMovie(this.state.keyword);

    console.log(result);
    // this.props.history.push(`/search/${this.state.keyword}`);
    this.setState({
      searchResult: result,
      keyword: '',
    });
    // return <Redirect to='/search' />
  }

  addFavMovie = async (movie) => {
    console.log('thi is id: ', movie);
    let updatedUser = await userApi.addFavMovie(movie);
    console.log(updatedUser);
    this.setState({
      user: updatedUser,
    });
  }

  removeFavMovie = async (movie) => {
    console.log('thi is id: ', movie);
    let updatedUser = await userApi.removeFavMovie(movie);
    console.log(updatedUser);
    this.setState({
      user: updatedUser,
    });
  }

    // const updatedPuppy = await puppyAPI.update(updatedPupData);
    // const newPuppiesArray = this.state.puppies.map(p => 
    //   p._id === updatedPuppy._id ? updatedPuppy : p
    // );
    // this.setState(
    //   {puppies: newPuppiesArray},
    //   // Using cb to wait for state to update before rerouting
    //   () => this.props.history.push('/')
    // );

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar
            user={this.state.user}
            keyword={this.state.keyword}
            handleLogout={this.handleLogout}
            handleSearch={this.handleSearch}
            handleChange={this.handleChange} />
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
            <Route exact path='/movies/popular' render={() => {
              return (<MovieList movies={this.state.popularMovies} />)
            }} />
            <Route exact path='/search/:keyword' render={(props) => {
              return (<MovieList movies={this.state.searchResult} />)
            }} />
            <Route exact path='/movie/:id' render={(props) => {
              return (<Movie id={props.match.params.id} user={this.state.user} addFavMovie={this.addFavMovie} removeFavMovie={this.removeFavMovie}/>)
            }} />

            <Route exact path='/profile' render={() => {
              return (<Profile user={this.state.user} />)
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
