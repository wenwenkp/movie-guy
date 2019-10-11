import React from 'react';
import MovieList from '../MovieList/MovieList';
import movieApi from '../../services/movie_api';

class Popular extends React.Component {

    state = {
        title: 'Popular',
        movies: [],
    }

    async componentDidMount() {
        let movies = await movieApi.getMovies('popular');
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

export default Popular;