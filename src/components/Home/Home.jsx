import React from 'react';

const Home = () => {
    return (
        <div className="header">
            <div className="logo-box">
                <img src="img/logo-white.png" alt="Logo" className="logo" />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">OUTDOORS</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>
            </div>
        </div>
    )
}

export default Home;