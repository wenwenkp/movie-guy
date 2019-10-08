import React from 'react';
import {Redirect} from 'react-router-dom';
import movieApi from '../../services/movie_api';

class Profile extends React.Component {

    state = {
      favMovie: [],
    }

    async componentDidMount(){
        if(this.props.user){
            if(this.props.user.favMovie.length !== 0){
                let favMovie = await movieApi.getFavMovies(this.props.user.favMovie);
                console.log(favMovie);
                this.setState({
                    favMovie: favMovie,
                });
            }
        }
      }
      
    render(){
        return (
            <div>
                {this.props.user ? 
                <div>
                    <p>username: {this.props.user.username}</p>
                    <p>email: {this.props.user.email}</p>
                    <p>description: {this.props.user.description}</p>
                    <p>comments: {this.props.user.comments.length}</p>
                    <button>Edit</button>
                    <hr></hr>

                    {this.props.user.favMovie.map((movie, idx)=>{
                        return <div key={idx}>{movie}</div>
                    })}
                </div>
                : <Redirect to='/login' />}
            </div>
        )
    }
}

export default Profile;