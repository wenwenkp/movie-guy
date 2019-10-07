import React from 'react';
import movieApi from '../../services/movie_api';

class Movie extends React.Component {

    state = {
        movie: {},
    }

    async componentDidMount() {
        let result = await movieApi.getMovie(this.props.id);
        this.setState({
            movie: result,
        });
        console.log(this.state.movie);
    }

    render() {
        return (
            <div>
                {this.state.movie ?
                    <div>
                        <h1>{this.state.movie.title}</h1>
                        <img src={this.state.movie.poster_path} alt={this.state.movie.title}></img>
                        <p>{this.state.movie.status}</p>
                        <p>{this.state.movie.release_date}</p>
                        <p>{this.state.movie.overview}</p>
                    </div>
                    :
                    <h1>Loading...</h1>
                }
            </div>

        )
    }
}

export default Movie;
