import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
const NavBar = (props) => {

    // show different navbar info per user login status
    let nav = props.user ?
        <>
            <li className="navigation__item">
                <NavLink to='/profile' className="navigation__link" onClick={() => { props.handleButtonClick() }}><span>Profile</span></NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to='' className="navigation__link"><span onClick={() => { props.handleLogout() }}>Log Out</span></NavLink>
            </li>
        </>
        :
        <>
            <li className="navigation__item">
                <NavLink to='/signup' className="navigation__link" onClick={() => { props.handleButtonClick() }}><span>Sign Up</span></NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to='/login' className="navigation__link" onClick={() => { props.handleButtonClick() }}><span>Log In</span></NavLink>
            </li>
        </>;
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"
                onChange={(e) => { props.handleCheckboxChange(e) }} checked={props.isChecked} hidden />
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink to='/' className="navigation__link" onClick={() => { props.handleButtonClick() }}><span >Home</span></NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink to='/movies/top_rated' className="navigation__link" onClick={() => { props.handleButtonClick() }}><span >Top Rated</span></NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink to='/movies/now_playing' className="navigation__link" onClick={() => { props.handleButtonClick() }}><span >Now Playing</span></NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink to='/movies/popular' className="navigation__link" onClick={() => { props.handleButtonClick() }}><span >Popular</span></NavLink>
                    </li>
                    {nav}
                </ul>
            </nav>
            <Link to='/'><img src={logo} alt="logo" className="logo logo--animated"></img></Link>
        </div>
    )
}

export default NavBar;


