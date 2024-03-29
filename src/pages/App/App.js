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
		isChecked: false,
	};

	// update user fav movies in front end with data from the backend
	async componentDidMount() {
		if (this.state.user) {
			let result = await userApi.getFavMovie();
			this.setState({ myMovies: result });
		}
	}

	// clear user info and user fav movie info in frontend after logout
	handleLogout = () => {
		this.handleButtonClick();
		userService.logout();
		this.setState({
			user: null,
			myMovies: [],
		});
	}

	// once user signup or login will get user favmovie data and user info from back end and update frontend
	handleSignupOrLogin = async () => {
		let result = await userApi.getFavMovie();
		this.setState({
			user: userService.getUser(),
			myMovies: result,
		});
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	// store search result and keyword
	handleSearch = async () => {
		let result = await movieApi.searchMovie(this.state.keyword);
		this.setState({
			searchResult: result,
			keyword: '',
		});
	}

	// function to add fav movie
	addFavMovie = async (movie) => {
		let result = await userApi.addFavMovie(movie.id, movie.title, movie.poster_path);
		this.setState({ myMovies: result });
	}

	// function to remove favmovie
	removeFavMovie = async (movieId) => {
		let result = await userApi.removeFavMovie(movieId);
		this.setState({ myMovies: result });
	}

	// handle click on menu page
	handleButtonClick = () => {
		this.toggleIsChecked();
	}

	// handle open and close for menu page
	handleCheckboxChange = (event) => {
		this.setState({ isChecked: event.target.checked });
	}

	// handle check and uncheck for checkbox(menu)
	toggleIsChecked = () => {
		this.setState({ isChecked: !this.state.isChecked });
	}

	render() {
		return (
			<Router>
				<div className="container">
					<NavBar
						isChecked={this.state.isChecked}
						user={this.state.user}
						handleLogout={this.handleLogout}
						handleButtonClick={this.handleButtonClick}
						handleCheckboxChange={this.handleCheckboxChange}
					/>
					<Switch>
						<Route exact path='/' render={() => {
							return (
								<Home
									handleSearch={this.handleSearch}
									keyword={this.state.keyword}
									handleChange={this.handleChange}
								/>
							)}} 
						/>
						<Route exact path='/movies/top_rated' render={() => {
							return (<TopRated />)}} 
						/>
						<Route exact path='/movies/now_playing' render={() => {
							return (<NowPlaying />)}} 
						/>
						<Route exact path='/movies/popular' render={() => {
							return (<Popular />)}} 
						/>
						<Route exact path='/search/:keyword' render={() => {
							return (<MovieList movies={this.state.searchResult} title={`Search Result`}/>)}} 
						/>
						<Route exact path='/movie/:id' render={(props) => {
							return (
								<Movie
									id={props.match.params.id}
									user={this.state.user}
									addFavMovie={this.addFavMovie}
									removeFavMovie={this.removeFavMovie}
									myMovies={this.state.myMovies}
								/>
							)}} 
						/>
						<Route exact path='/profile' render={() => {
							return (
								<Profile 
									user={this.state.user} 
									myMovies={this.state.myMovies} 
								/>)}} 
						/>
						<Route exact path='/signup' render={({ history }) =>{
							return (
								<SignupPage
									history={history}
									handleSignupOrLogin={this.handleSignupOrLogin}
								/>
							)}}
						/>
						<Route exact path='/login' render={({ history }) =>{
							return (
								<LoginPage
									history={history}
									handleSignupOrLogin={this.handleSignupOrLogin}
								/>
							)}} 
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
