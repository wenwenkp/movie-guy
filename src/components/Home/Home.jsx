import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';

const Home = (props) => {
    return (
        <header className="header">
            <div className="header__text--box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">MOVIEGUY</span>
                    <span className="heading-primary--sub">where happiness from</span>
                </h1>
                <form className="logo--animated" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={props.keyword} onChange={(e) => props.handleChange(e)} name="keyword" />
                     <Link to={`/search/${props.keyword}`}><button onClick={(e) => { props.handleSearch(e) }} className="btn btn-outline-success my-2 my-sm-0" type="submit" hidden>Search</button></Link>
                </form>
                <Link to='/movies/now_playing'><img src={logo} alt="logo" className="logo logo--black logo--animated"></img></Link>

            </div>
        </header>
    )
}

export default Home;

