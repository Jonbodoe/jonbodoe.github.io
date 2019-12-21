import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import NavBar from './components/Navbar.js'
import { Fragment } from 'react';


function App() {
  return (
    // <div className="App">
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // </div>
  );
}


function Home() {
  return <React.Fragment>
  <section id="heading" class="container-fluid">
    <div class="row h-100">
      <div class="col-md-7">
      </div>
      <div class="col-md-5 d-flex justify-content-center h-100 ">
        <div class="align-self-center text-white py-5">
          <h1 class="font-weight-bolder">Jonathan Le</h1>
          <h3 class="font-weight-bold">
          &lt; Web Developer & Designer /&gt;
          </h3>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div id="works"> </div>
  </section>
  </React.Fragment>;

}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



export default App;
