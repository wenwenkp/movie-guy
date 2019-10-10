import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../logo.png';

const Home = () => {
    return (
        <header className="header">
            <div className="header__text--box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">MOVIEGUY</span>
                    <span className="heading-primary--sub">where happiness from</span>
                </h1>
                {/* <img to="#" className="logo logo--img logo--animated">lor</img> */}
                <img src={logo} alt="logo" className="logo logo--animated"></img>
            </div>
        </header>
    )
}

export default Home;