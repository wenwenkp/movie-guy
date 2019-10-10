import React from 'react';
import { Redirect, Link } from 'react-router-dom';

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
                            <div key={idx}>
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={movie.poster_path} alt={movie.title}></img>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                : <Redirect to='/login' />}
        </div>
    )
}

export default Profile;