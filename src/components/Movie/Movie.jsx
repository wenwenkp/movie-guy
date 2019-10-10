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

        return (
            <div>
                {this.state.movie ?
                    <div>
                        <h1>{this.state.movie.title}</h1>
                        <img src={this.state.movie.poster_path} alt={this.state.movie.title}></img>
                        <p>tagline: {this.state.movie.tagline}</p>
                        <p>status: {this.state.movie.status}</p>
                        <p>release date: {this.state.movie.release_date}</p>
                        <p>budget: {this.state.movie.budget}</p>
                        {languages ? 
                        <ul>Languages: 
                            {languages.map((language, idx)=>{
                                return <li key={idx}>{language.name}</li>
                            })}
                        </ul>
                        : ''
                        }
                        {genres ? 
                        <ul>genres: 
                            {genres.map((genre, idx)=>{
                                return <li key={idx}>{genre.name}</li>
                            })}
                        </ul>
                        : ''
                        }
                        {companies ? 
                        <ul>Companies: 
                            {companies.map((company, idx)=>{
                                return <li key={idx}>{company.name}</li>
                            })}
                        </ul>
                        : ''
                        }
                        <p>overview: {this.state.movie.overview}</p>
                        {this.props.user ? <button onClick={()=>{this.props.addFavMovie(this.state.movie)}}>Add to Favourite</button> : null}
                        {this.props.user ? <button onClick={()=>{this.props.removeFavMovie(this.state.movie)}}>Unsave</button> : null}
                    </div>
                    :
                    <h1>Loading...</h1>
                }
            </div>

        )
    }
}

export default Movie;
