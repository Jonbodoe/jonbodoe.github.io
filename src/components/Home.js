import React from 'react';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // NavLink,
} from "react-router-dom";

export default function Home() {
  return <React.Fragment>
    <section id="heading" className="container-fluid p-5">
      <div className="row h-100">
        <div className="col-md-7">
        </div>
        <div className="col-md-5 d-flex justify-content-center h-100 ">
          <div className="align-self-center text-white py-5">
            <h1 className="font-weight-bolder">Jonathan Le</h1>
            <h3 className="font-weight-bold text-light">
              &lt; Web Developer & Designer /&gt;
          </h3>
          </div>
        </div>
      </div>
    </section>
    {/* <div className="spacer"><h1 className="font-weight-bolder">ABOUT</h1></div> */}
    <section className="container-fluid">
      <div className="row ">
        <div className="col-md-1 bg-primary"></div>
        <div id="self" className="col-md-4 d-flex w-100 justify-content-center"></div>
        <div className="col-md-6 align-self-center">
          <div className="py-4">
            <h1 className="font-weight-bolder px-md-5">About Me</h1>
            <h3 className="font-weight-bolder px-md-5 text-primary">Hey There!</h3>
            <p className="px-md-5">
              I like to bike around the city of Philadelphia taking photos.
              On my free time I either illustrate or trying to learn more about
              web development. I am currently a Junior at Thomas Jefferson
              Univeristy studying Web Development and Design.
          </p>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </section>
    <section className="container-fluid">
      <div className="row">
        <div className="category col-md-4">
          <Link to="/works">
            <div className="p-3">
              <div className="color-bar bg-blue"></div>
              <h3 className="font-weight-bolder pt-4">Web</h3>
              <h5 className="text-dark">Development & Design</h5>
            </div>
            <div id="web" className=""></div>
          </Link>
        </div>

        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </section>
  </React.Fragment>;
}
