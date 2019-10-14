import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';

const Profile = (props) => {

    return (
        <div>
            {props.user ?
                <div>
                    <p>username: {props.user.username}</p>
                    <p>email: {props.user.email}</p>
                    <hr></hr>
                    {props.myMovies.map((movie, idx) => {
                        return (
                            <NavLink to={`/movie/${movie.movieId}`} key={idx}>
                                <img src={movie.imgUrl} alt={movie.title}></img>
                            </NavLink>
                        )
                    })}
                </div>
            : <Redirect to='/login' />}
        </div>
    )
}

export default Profile;