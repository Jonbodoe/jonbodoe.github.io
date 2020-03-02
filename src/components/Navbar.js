
import React, {
} from 'react';
import '../App.css';
import {
    NavLink,
    Link,
} from "react-router-dom";
import jonathan from "../img/jonathan.png"
export default function NavBar() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex px-5  py-2 fixed-top shadow-sm">
            <div className="container">
            <Link className="navbar-brand font-weight-bolder px-3" to="/">
                <img className="img-brand" src={jonathan} alt="Jonathan"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto px-5 text-center">
                    <li className="nav-item px-3">
                        <NavLink exact activeClassName="active" to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/works`}>Works</NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink exact activeClassName="active" to={`${process.env.PUBLIC_URL}/about`}>Resume</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>
    )
}




