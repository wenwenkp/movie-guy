import React from 'react';
import {Redirect} from 'react-router-dom';

    const Profile = (props) => {
      
        return (
            <div>
                {props.user ? 
                <div>
                    <p>username: {props.user.username}</p>
                    <p>email: {props.user.email}</p>
                    <hr></hr>

                    {props.user.favMovie.map((movie, idx)=>{
                        return (
                            <div key={idx}>
                                <img src={movie.poster_path} alt={movie.title}></img>
                            </div>
                        )
                    })}
                </div>
                : <Redirect to='/login' />}
            </div>
        )
}

export default Profile;