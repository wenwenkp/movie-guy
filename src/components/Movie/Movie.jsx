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

    }

    render() {
        let languages = this.state.movie.spoken_languages;
        let genres = this.state.movie.genres;
        let companies = this.state.movie.production_companies;
        let option = false;
        if (this.state.movie) {
            for (let i = 0; i < this.props.myMovies.length; i++) {
                if (this.props.myMovies[i].movieId === this.state.movie.id) {
                    option = true;
                }
            }
        }

        return (
            <div>
                {this.state.movie ?
                    <>
                        <div className="row detail--title">
                            <h1>{this.state.movie.title}</h1>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={this.state.movie.poster_path} alt={this.state.movie.title}></img>
                                {this.props.user ?
                                    <div className="heart--box">
                                        {option ?
                                            <button onClick={() => { this.props.removeFavMovie(this.state.movie.id) }}>
                                                <div className="heart heart--active"></div>
                                            </button>
                                            :
                                            <button onClick={() => { this.props.addFavMovie(this.state.movie) }}>
                                                <div className="heart heart--inactive"></div>
                                            </button>}
                                    </div>
                                    : null
                                }
                            </div>

                            <div className="col detail--content">
                                <div>
                                    <h2>tagline: </h2>
                                    <span>{this.state.movie.tagline}</span>
                                </div>
                                <div>
                                    <h2>status: </h2>
                                    <span>{this.state.movie.status}</span>
                                </div>
                                <div>
                                    <h2>release date: </h2>
                                    <span>{this.state.movie.release_date}</span>
                                </div>
                                <div>
                                    <h2>budget: </h2>
                                    <span>{this.state.movie.budget}</span>
                                </div>

                                {languages ?
                                    <ul><h2>Languages:</h2>
                                        {languages.map((language, idx) => {
                                            return <li key={idx}>{language.name}</li>
                                        })}
                                    </ul>
                                    : ''
                                }
                                {genres ?
                                    <ul><h2>genres:</h2>
                                        {genres.map((genre, idx) => {
                                            return <li key={idx}>{genre.name}</li>
                                        })}
                                    </ul>
                                    : ''
                                }
                                {companies ?
                                    <ul><h2>Companies:</h2>
                                        {companies.map((company, idx) => {
                                            return <li key={idx}>{company.name}</li>
                                        })}
                                    </ul>
                                    : ''
                                }
                                <h2>overview: </h2>
                                <p>{this.state.movie.overview}</p>
                            </div>
                        </div>
                    </>
                    : ''
                }
            </div>
        )
    }
}

export default Movie;
