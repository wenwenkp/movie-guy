import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';

const Profile = (props) => {

    return (
        <div>
            {props.user ?
                <div>
                    <div className="row">
                        <p>username: {props.user.username}</p>
                        <p>email: {props.user.email}</p>
                    </div>
                    <hr></hr>
                    <div>
                        <div className="profile">
                            {props.myMovies.map((movie, idx) => {
                                return (
                                    <NavLink to={`/movie/${movie.id}`} key={idx}>
                                        <img src={movie.poster_path} alt={movie.title} className={`profile__img`}></img>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
                : <Redirect to='/login' />}
        </div>
    )
}

export default Profile;