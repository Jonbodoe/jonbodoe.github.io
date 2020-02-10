
import React, {
    // useState, useEffect 
} from 'react';
import '../App.css';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    NavLink,
    Link,
} from "react-router-dom";
// import About from "../components/About"
// import Work from "../components/Work"
// import Home from "../components/Home"
// import { render } from '@testing-library/react';
// function logScrollDirection() {
//     var previous = window.scrollY;
//     window.addEventListener('scroll', function(){
//         window.scrollY > previous ? console.log('down') : console.log('up');
//         previous = window.scrollY;
//     });
// }
export default function NavBar() {
    // constructor(props) {
    //     super(props)
    // }
    // let prev = window.scrollY;
    // const [nav, showNav] = useState(false);

    // useEffect(()=> {
    //     // function handleNavChange(change) {

    //     window.addEventListener('scroll', function (e) {
    //         if (prev > e.currentTarget.scrollY) {
    //             // showNav(true)
    //             // console.log(prev);
    //             console.log("scrolling up");


    //         } else if (prev < e.currentTarget.scrollY) {
    //             console.log("scrolling down");
    //             // showNav(true)
    //             // console.log(prev);

    //         }
    //         prev = e.currentTarget.scrollY;
    //     });
    // // }
    // })

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex px-5  py-4 fixed-top shadow-sm ">
            <div className="container">
            <Link className="navbar-brand font-weight-bolder px-3" to="/">Jonathan Le</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto px-5">
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
    )
}
// }



