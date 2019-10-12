import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';

const Home = (props) => {
    return (
        <header className="header">
            <div className="header__text--box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">MOVIEGUY</span>
                    <span className="heading-primary--sub">Discover your movies</span>
                </h1>
                <form className="search search--animated" >
                    <input className="search__box" type="search" placeholder="&nbsp;&nbsp;from here..." aria-label="Search" value={props.keyword} onChange={(e) => props.handleChange(e)} name="keyword" />
                     <Link to={`/search/${props.keyword}`}><button onClick={(e) => { props.handleSearch(e) }} className="btn btn-outline-success my-2 my-sm-0" type="submit" hidden>Search</button></Link>
                </form>
            </div>
        </header>
    )
}

export default Home;

