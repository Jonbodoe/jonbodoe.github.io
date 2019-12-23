import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
// import { Fragment } from 'react';


function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
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
      </div>
    </Router>
  );
}

export default App;
