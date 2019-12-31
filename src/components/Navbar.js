
import React from 'react';
import '../App.css';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    NavLink,
} from "react-router-dom";

// function logScrollDirection() {
//     var previous = window.scrollY;
//     window.addEventListener('scroll', function(){
//         window.scrollY > previous ? console.log('down') : console.log('up');
//         previous = window.scrollY;
//     });
// }

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex p-4 fixed-top shadow-sm w-50">
            <Link className="navbar-brand font-weight-bolder px-3" to="/">Jonathan Le</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto px-5">
                    <li className="nav-item px-3">
                        <NavLink exact activeClassName="active" to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink exact activeClassName="active" to={`${process.env.PUBLIC_URL}/works`}>Works</NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink exact activeClassName="active" to={`${process.env.PUBLIC_URL}/about`}>About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;


