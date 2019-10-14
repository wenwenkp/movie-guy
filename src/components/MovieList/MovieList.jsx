import React from 'react';
import { Link } from 'react-router-dom';

// name for each image move animation
let animationArray = ['imageMoveInTop', 'imageMoveInBottom', 'imageMoveInLeft', 'imageMoveInRight']

const MovieList = (props) => {
    return (
        <div>
            {props.movies ?
                <div className='list'>
                    <div className="list__text--box">
                        <h1 className="list-primary">{props.title}</h1>
                        {props.movies.map((movie) => {
                            if (movie.poster_path !== null) {
                                let time = Math.random() * 5;
                                let num = Math.floor(Math.random() * Math.floor(4))
                                let name = animationArray[num];
                                let imgStyle = { animation: `${name} ${time}s` };
                                return (
                                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                                        <img
                                            src={movie.poster_path}
                                            alt={movie.title}
                                            className="img img--animated"
                                            style={imgStyle}
                                        >
                                        </img>
                                    </Link>
                                )
                            } else {
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