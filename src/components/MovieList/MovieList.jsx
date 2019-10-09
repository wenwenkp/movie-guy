import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    console.log('movielist');
    return (
        <div className='container'>
            {props.movies ?
            <div className='row'>
                <div className='col-sm-12'>
                    <h1>{props.title}</h1>
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
            : <div>'Loading...'</div>}
        </div>
    )
}

export default MovieList;