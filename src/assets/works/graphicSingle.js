// Need to use react-router to link
import React from 'react';

import {
  useParams
} from "react-router-dom";
import works from "../../assets/works/worksInfo"
// import {
//   //   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   // useParams,
//   // useRouteMatch,
//   // withRouter
// } from "react-router-dom";
// import PDFviewer from "../../components/Viewer"

export default function GraphicsView() {
  let { view } = useParams();
  let infos = works.filter((work) => {
    return work.url === view
  })
  let work = infos[0]


  return <React.Fragment>
    <div className="spacer"></div>
    <section className="no-padding px-sm-5">
      <div className="row">
        <div className="col-md-7">
          <img className="img-fluid rounds no-padding shadow-md" src={require(`../../img/${work.mainImg}`)} alt={work.title + ' website image'} />
        </div>
        <div id="intro" className="col-md-5 d-flex">
          <div className="align-self-center px-4">
            <h2 className="font-weight-bold text-dark">{work.title}</h2>
            <h3 className="text-primary">{work.topic}</h3>
            <div className="text-secondary">{work.level}</div>
            <div className="py-4">
              <div className="pt-2">
                <div className="boldish text-secondary">Objective :</div>
                {work.description}
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <section className="py-5">
        <div className="row p-sm-5">
          <div className="col-md-4 boldish d-flex justify-content-center px-sm-5">
            <div className="align-self-start">
              <h3 className="font-weight-bold text-primary">Background</h3>
              <h3 className="text-secondary">Concept & Ideating</h3>
              <p className="py-3">
                {work.concept}
              </p>
            </div>
          </div>
          <div className="col-md-8 text-dark">
            {
              work.listImg.map((img) => {
                return <div className="pb-5 d-flex justify-content-center" key={img}>
                  <img className={work.horizontalImgs? "img-majority rounds shadow-md" : "img-fluid rounds shadow-md"} src={require(`../../img/${img}`)} alt={`list of ${work.title}`} />
                </div>
              })
            }
            {
              work.secondaryImg? 
              // <div className="pt-5">
                <img className="img-majority rounds shadow-md" src={require(`../../img/${work.secondaryImg}`)} alt={`large version ${work.title}`}/> 
              // </div>
              
              : ''
            }
          </div>
        </div>
      </section>
    </section>
    {/* <section className="container-fluid py-5 my-5">
      <div className="row">
        <div className="col-md-6 boldish d-flex justify-content-center">
          <div className="align-self-center p-sm-5 bg-white rounds shadow-md w-100">
            <div className="py-4">
              <h3 className="font-weight-bolder product text-primary">Product</h3>
              <h3 className="text-secondary boldish">View in PDF!</h3>
              <div className="text-dark">

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 boldish p-4">
          <Link to={`/works/graphics/${view}/viewer`}>Link</Link>
        </div>
      </div>
    </section> */}
  </React.Fragment>

}