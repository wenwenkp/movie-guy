import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    return (
        <div>
            {props.movies ?
            <div className='list'>
                <div className="list__text--box">
                    <h1 className="list-primary">{props.title}</h1>
                    {/* <div className='images-box'> */}
                    {props.movies.map((movie) => {
                    if (movie.poster_path !== null) {
                        let time = Math.random()*5;
                        console.log(time);
                        let imgStyle = {
                            animationDuration: time + 's'
                        };
                    return (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <img src={movie.poster_path} alt={movie.title} 
                        className="img img--black img--animated"
                        //  style={{`animation: ${time} + em`}}
                        style={imgStyle}
                          >

                        </img>
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