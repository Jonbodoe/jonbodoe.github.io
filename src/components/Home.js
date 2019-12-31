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
        <div id="self" className="col-md-4 d-flex w-100"></div>
        <div className="col-md-5 align-self-center justify-content-center">
          <div className="py-4">
            <h1 className="font-weight-bolder px-md-5">About Me</h1>
            <h3 className="font-weight-bolder px-md-5 text-primary">Hey There!</h3>
            <p className="px-md-5">
              I am currently a Junior at Thomas Jefferson
              Univeristy studying Web Development and Design.
              On my free time I either illustrate or trying
              to learn more about web development.
          </p>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </section>
    <section id="tech" className="container-fluid">
      <div className="row h-100 bg-black">
        <div className="col-sm-4 align-self-center text-white">
          <div className="p-md-5">
            <h1 className="font-weight-bolder">Web Technologies</h1>
            <p>
               For web-based digital products, I actively use HTML, CSS, JavaScript, React, PHP and or MySQL to build responsive, dynamic, and efficient user interfaces.
            </p>
          </div>
        </div>
        <div className="col-sm-2 bg-black py-5 d-flex h-100 justify-content-center">
          <div className="align-self-center text-primary">
            <i className="fab fa-react fa-6x"></i>
            <h6 className="py-3 text-center font-weight-bolder">React.Js</h6>
          </div>
        </div>
        <div className="col-sm-2 bg-black py-5 d-flex justify-content-center">
          <div className="align-self-center text-primary">
            <i class="fas fa-database fa-6x"></i>
            <h6 className="py-3 text-center font-weight-bolder">MySQL</h6>
          </div>
        </div>
        <div className="col-sm-2 bg-black py-5 d-flex justify-content-center">
          <div className="align-self-center text-primary">
            <i class="fab fa-php fa-6x"></i>
            <h6 className="py-3 text-center font-weight-bolder">PHP</h6>
          </div>
        </div>
        <div className="col-sm-2 bg-black py-5 d-flex justify-content-center">
          <div className="align-self-center text-primary">
            <i class="fab fa-js fa-6x"></i>
            <h6 className="py-3 text-center font-weight-bolder">JavaScript</h6>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid">
      <div className="row ">

      </div>
    </section>

    <section className="container-fluid">
      <div className="row">
        <Link id="web" className="category col-md-4" to="/works">
        </Link>

        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </section>
  </React.Fragment>;
}
