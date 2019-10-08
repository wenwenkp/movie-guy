import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    state = {
        search: ''
    }

    // handleChange = (e) => {
    //     // this.props.updateMessage('');
    //     this.setState({
    //     //     // Using ES2015 Computed Property Names
    //         [e.target.name]: e.target.value
    //     });
    // }

    handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     await userService.signup(this.state);
        //     // Let <App> know a user has signed up!
        //     this.props.handleSignupOrLogin();
        //     // Successfully signed up - show GamePage
        //     this.props.history.push('/');
        // } catch (err) {
        //     // Invalid user data (probably duplicate email)
        //     this.props.updateMessage(err.message);
        // }
    }

    render() {
        let nav = this.props.user ?
            <>
                <li className="nav-item">
                    <Link to='/profile'><span className="nav-link">Profile</span></Link>
                </li>
                <li className="nav-item">
                    <Link to=''><span className="nav-link" onClick={this.props.handleLogout}>Log Out</span></Link>
                </li>
            </>
            :
            <>
                <li className="nav-item">
                    <Link to='/signup'><span className="nav-link">Sign Up</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/login'><span className="nav-link">Log In</span></Link>
                </li>
            </>;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/'><span className="navbar-brand">MovieGuy</span></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to='/movies/top_rated'><span className="nav-link">Top Rated</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/movies/now_playing'><span className="nav-link">Now Playing</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/movies/popular'><span className="nav-link">Popular</span></Link>
                        </li>
                        {nav}
                    </ul>
                    <form className="form-inline my-2 my-lg-0" >
                        
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.props.keyword} onChange={(e)=>this.props.handleChange(e)} name="keyword" />
                        <Link to={`/search/${this.state.search}`}><span className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</span></Link>
                    </form>
                </div>
            </nav>
        )
    }
}

export default NavBar;