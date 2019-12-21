
import React from 'react';
import '../App.css';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex p-4 fixed-top shadow-sm">
            <a class="navbar-brand font-weight-bolder" href="#">Jonathan Le</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item px-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item px-3">
                        <Link to="/about">About</Link>
                    </li>
                    <li class="nav-item px-3">
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

