import React from 'react';
import {Redirect} from 'react-router-dom';

const Profile = (props) => {

        return (
            <div>
                {props.user ? 'user checked': <Redirect to='/login' />}
            </div>
        )

}

export default Profile;