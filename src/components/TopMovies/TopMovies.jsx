import React from 'react';
import {Link} from 'react-router-dom';

const TopMovies = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h1>Top Rated Movies:</h1>
                </div>
                <div className='col-sm-12'>
                    {props.movies.map((movie) => {
                        if (movie.poster_path !== null) {
                            return (
                                <Link to={`/movie/${movie.id}`} key={movie.id}>
                                    <img src={movie.poster_path} alt={movie.title}></img>
                                </Link>
                            )
                        }else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default TopMovies;