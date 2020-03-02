import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  // Link
} from "react-router-dom";

import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
import ScrollToTop from './assets/etc/scrollTop';
// import { Fragment } from 'react';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'



const App = ({ location }) => {
  console.log(location)
  return (
    <div>
      {/* <ScrollToTop/> */}
      <NavBar />
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames='fade'
          >
            <Switch location={location}>
              <Route path={`${process.env.PUBLIC_URL}/works`}>
                <Work />
              </Route>
              <Route path={`${process.env.PUBLIC_URL}/about`}>
                <About />
              </Route>
              <Route path={`${process.env.PUBLIC_URL}/`}>
                <Home />
              </Route>

            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      {/* </Router> */}
    </div>
  );
}

export default withRouter(App);
