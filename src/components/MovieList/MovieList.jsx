import React from 'react';

const MovieList = (props) => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h1>now playing movies:</h1>
                </div>
                <div className='col-sm-12'>
                    {props.nowPlayingMovies.map((movie) => {
                        return (
                            <div className='col-md-3 col-sm-4' key={movie.id}>
                                <img src={movie.poster_path} alt={movie.title}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieList;