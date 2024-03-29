import React from 'react';
import MovieList from '../MovieList/MovieList';
import movieApi from '../../services/movie_api';

class NowPlaying extends React.Component {

    state = {
        title: 'Now Playing',
        movies: [],
    }

    // fetch now_playing movies data
    async componentDidMount() {
        let movies = await movieApi.getMovies('now_playing');
        this.setState({ movies });
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

export default NowPlaying;