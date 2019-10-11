import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';

const Home = () => {
    return (
        <header className="header">
            <div className="header__text--box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">MOVIEGUY</span>
                    <span className="heading-primary--sub">where happiness from</span>
                </h1>
                <Link to='/movies/now_playing'><img src={logo} alt="logo" className="logo logo--black logo--animated"></img></Link>
            </div>
        </header>
    )
}

export default Home;

