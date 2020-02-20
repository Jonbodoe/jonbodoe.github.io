import React from 'react';
import Footer from "./Footer.js";
import logosImg from "../img/logos.png";
// import logos from "../assets/home/logos";
// import categories from "../assets/home/category";
// import Work from "./Work.js"
// import works from "../assets/works/worksInfo";
// import jonLogo from "../img/jon-1.png"
// import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
//   withRouter,
// } from "react-router-dom";
import workCategory from "../assets/home/workCategories"


const Home = () => {
  // console.log(location)
  // works.forEach(work => console.log(work.mainImg))

  return <React.Fragment>
    <div className="page">
      <section id="heading" className="container-fluid p-5 shadow-md">
        <div className="row h-100">
          <div className="col-md-8">
          </div>
          <div className="col-md-4 d-flex justify-content-center h-100 ">
            <div className="align-self-center text-white py-5">
              <h1 className="font-weight-bolder border-bottom-white">Jonathan Le</h1>
              <h3 className="text-light">
                &lt; Web Developer & Designer /&gt;
            </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="spacer"><h1 className="font-weight-bolder">ABOUT</h1></div> */}
      <section className="container">
        <div className="row">
          {/* <div className="col-md-1 bg-white"></div> */}
          <div id="self" className="col-md-6 shadow-md">
            {/* <img className="img-jon box-shadow-orange" src={jonLogo} alt="logo of myself"/> */}
          </div>
          <div className="col-md-6 align-self-center justify-content-center h-100">
            <div className="py-4">
              <h1 className="font-weight-bolder px-md-5">About Me</h1>
              <h3 className="font-weight-bolder px-md-5 text-primary">Hey There!</h3>
              <p className="px-md-5">
                I am currently a Junior at Thomas Jefferson
                Univeristy studying Web Development and Design.
                On my free time I keep myself occupied by either
                illustrating or learning more about web development.
          </p>
            </div>
          </div>
          {/* <div className="col-md-1 bg-white"></div> */}
        </div>
      </section>
      <section id="tech" className="container-fluid">
        <div className="row h-100 bg-primary">
          <div className="col-sm-1"></div>
          <div className="col-sm-4 align-self-center">
            <div className="p-sm-4">
              <h1 className="font-weight-bolder text-white">Tools I Use</h1>
              <h3 className="font-weight-bolder text-dark">Web Languages & Frameworks</h3>
              <p className="text-light">
                For web-based digital products, I actively use Bootstrap, JavaScript, React, JQuery, PHP and MySQL to build responsive and dynamic applications.
            </p>
            </div>
          </div>
          <div className="col-sm-6 d-flex h-100 p-sm-5">
            <img className="img-fluid align-self-center p-sm-5" src={logosImg} alt="logos of react.js, MySQL, php, Javascript" />
          </div>
          {/* {logos} */}
          <div className="col-sm-1 "></div>
        </div>
      </section>
      <section className="container-fluid py-5 bg-white">
        <div className="py-5">
          <h1 className="text-center font-weight-bolder">Works</h1>
          <h3 className="text-primary text-center font-weight-bold">school works to personal projects</h3>
        </div>
        <div className="row pb-4">
          {workCategory}
        </div>
      </section>
      <Footer />
    </div>
  </React.Fragment>;
}
export default Home;