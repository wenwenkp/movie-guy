import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <header className="home">
            <div className="home__text--box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">MOVIEGUY</span>
                    <span className="heading-primary--sub">Discover your movies</span>
                </h1>
                <form className="search search--animated" >
                    <input
                        className="search__box"
                        type="search"
                        placeholder="&nbsp;&nbsp;from here..."
                        aria-label="Search"
                        value={props.keyword}
                        onChange={(e) => props.handleChange(e)}
                        name="keyword"
                    />
                    <Link to={`/search/${props.keyword}`}>
                        <button onClick={(e) => { props.handleSearch(e) }} type="submit" hidden>
                        </button>
                    </Link>
                </form>
            </div>
        </header>
    )
}

export default Home;

