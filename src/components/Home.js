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
    <section id="heading" className="container-fluid">
      <div className="row h-100">
        <div className="col-md-7">
        </div>
        <div className="col-md-5 d-flex justify-content-center h-100 ">
          <div className="align-self-center text-white py-5">
            <h1 className="font-weight-bolder">Jonathan Le</h1>
            <h3 className="font-weight-bold">
              &lt; Web Developer & Designer /&gt;
          </h3>
          </div>
        </div>
      </div>
    </section>
    <div class="spacer"></div>
    <section className="container-fluid py-5">
      <h1 className="font-weight-bolder py-5 text-center">Category</h1>
      <div className="row px-5">

        <div className="col-md-4 px-5">
          <div className="category">
          <Link to="/works">
            <div className="p-3">
              <div className="color-bar bg-blue"></div>
              <h3 class="font-weight-bolder pt-4">Web</h3>
              <h5 class="text-dark">Development & Design</h5>
            </div>
            <div id="web" class=""></div>
          </Link>
          </div>
        </div>

        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </section>
  </React.Fragment>;
}
