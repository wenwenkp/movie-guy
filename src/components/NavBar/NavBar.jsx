import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// class NavBar extends React.Component {
const NavBar = (props) => {
    // state = {
    //     isChecked: false,
    // }

    // exampleRef = React.createRef();

    // handleNavbar = () => {
    //     console.log('check');
        // console.log(this.exampleRef.current);
        // this.exampleRef.current.
        // console.log(this.exampleRef.current);
        // this.setState({
        //   checkbox: false
        // })
    //   }

    //   handleCheckboxChange = (event) => {
    //     console.log("checkbox changed!", event);
    //     this.setState({isChecked: event.target.checked});
    // }

    // toggleIsChecked = ()=> {
    //     console.log("toggling isChecked value!");
    //     this.setState({isChecked: !this.state.isChecked});
    // }

    // handleButtonClick=(event)=> {
    //     console.log("button was pressed!", event);
    //     this.toggleIsChecked();
    // }


    // render(){

    let nav = props.user ?
        <>
            <li className="navigation__item">
                <NavLink to='/profile' className="navigation__link" onClick={()=>{props.handleButtonClick()}}><span>Profile</span></NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to='' className="navigation__link"><span onClick={()=>{props.handleLogout()}}>Log Out</span></NavLink>
            </li>
        </>
        :
        <>
            <li className="navigation__item">
                <NavLink to='/signup' className="navigation__link" onClick={()=>{props.handleButtonClick()}}><span>Sign Up</span></NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to='/login' className="navigation__link" onClick={()=>{props.handleButtonClick()}}><span>Log In</span></NavLink>
            </li>
        </>;
    return (
<div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle"
    onChange={(e)=>{props.handleCheckboxChange(e)}} checked={props.isChecked} hidden/>
     {/* checked={this.state.isChecked} onChange={this.handleCheckboxChange}/> */}
    <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
        <ul className="navigation__list">
            <li className="navigation__item">
                <NavLink to='/' className="navigation__link" onClick={()=>{props.handleButtonClick()}}><span >Home</span></NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to='/movies/top_rated' className="navigation__link" onClick={()=>{props.handleButtonClick()}}><span >Top Rated</span></NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to='/movies/now_playing' className="navigation__link" onClick={()=>{props.handleButtonClick()}}><span >Now Playing</span></NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to='/movies/popular' className="navigation__link" onClick={()=>{props.handleButtonClick()}}><span >Popular</span></NavLink>
            </li>
            {nav}
        </ul>
    </nav>
</div>





        // <nav className="navbar navbar-expand-lg navbar-light">
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <Link to='/'><span className="navbar-brand">MovieGuy</span></Link>
        //     <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        //         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        //             <li className="nav-item">
        //                 <Link to='/movies/top_rated'><span className="nav-link">Top Rated</span></Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/movies/now_playing'><span className="nav-link">Now Playing</span></Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/movies/popular'><span className="nav-link">Popular</span></Link>
        //             </li>
        //             {nav}
        //         </ul>
        //         {/* <form className="form-inline my-2 my-lg-0" >
        //             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={props.keyword} onChange={(e) => props.handleChange(e)} name="keyword" />
        //             <Link to={`/search/${props.keyword}`}><button onClick={(e) => { props.handleSearch(e) }} className="btn btn-outline-success my-2 my-sm-0" type="submit" hidden>Search</button></Link>
        //         </form> */}
        //     </div>
        // </nav>
    )
}
// }

export default NavBar;


