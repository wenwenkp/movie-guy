import React from 'react';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';


const NavBar = (props) => {
    let nav = props.user ?
        <>
            <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Log Out</a>
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
                        <a className="nav-link" href="#">Most Popular</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Current Playing</a>
                    </li>
                    {nav}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;