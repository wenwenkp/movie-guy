import React from 'react';
import MovieList from '../MovieList/MovieList';
import movieApi from '../../services/movie_api';

class TopRated extends React.Component {

    state = {
        title: 'Top Rated',
        movies: [],
    }

    // fetch top_rated movies data
    async componentDidMount() {
        let movies = await movieApi.getMovies('top_rated');
        this.setState({
            movies,
        });
    }
    render() {
        return (
            <div>
                {this.state.movies ?
                    <MovieList movies={this.state.movies} title={this.state.title} />
                    : 'Loading...'}
            </div>
        )
    }
}

export default TopRated;