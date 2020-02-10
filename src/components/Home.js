import React from 'react';
import Footer from "./Footer.js";
import logosImg from "../img/logos.png";
// import logos from "../assets/home/logos";
import categories from "../assets/home/category";
import Work from "./Work.js"
import works from "../assets/works/worksInfo";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function Home() {
  works.forEach(work => console.log(work.mainImg))



  let workCategory = categories.map((category) => {
      return <React.Fragment key={category.title}>
        <Link className="col-md-4" to={`/works/${category.id}`}>
          <div id={category.id} className="category"></div>
          <h4 className="font-weight-bolder p-4 text-center bg-primary text-white">{category.title}</h4>
        </Link>
        <Switch>
          <Route path="/works">
            <Work />
          </Route>
        </Switch>
      </React.Fragment>
    })


  return <React.Fragment>
    <section id="heading" className="container-fluid p-5 shadow">
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
      <div className="row bg-light">
        <div className="col-md-1 bg-primary"></div>
        <div id="self" className="col-md-5 d-flex w-100">
        </div>
        <div className="col-md-5 align-self-center justify-content-center">
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
        <div className="col-md-1"></div>
      </div>
    </section>
    <section id="tech" className="container-fluid shadow">
      <div className="row h-100 bg-dark">
        <div className="col-sm-1"></div>
        <div className="col-sm-4 align-self-center text-white">
          <div className="">
            <h1 className="font-weight-bolder">What I Use</h1>
            <h3 className="font-weight-bolder text-primary">Web Technologies</h3>

            <p className="text-light">
              For web-based digital products, I actively use Bootstrap, JavaScript, React, JQuery, PHP and MySQL to build responsive, dynamic, and efficient applications.
            </p>
          </div>
        </div>
        <div className="col-sm-6 d-flex h-100">
          <img className="img-fluid align-self-center p-5" src={logosImg} alt="logos of react.js, MySQL, php, Javascript" />
        </div>
        {/* {logos} */}
        <div className="col-sm-1"></div>
      </div>
    </section>
    <section className="container-fluid">
      <div className="row ">

      </div>
    </section>

    <section className="container-fluid pb-5">
      <h1 className="text-center font-weight-bolder py-5">Works</h1>
      <div className="row">
        {workCategory}
      </div>
    </section>
    <Footer />
  </React.Fragment>;
}
export default Home
