// Need to use react-router to link
import React from 'react';

import {
  useParams
} from "react-router-dom";
import works from "../../assets/works/worksInfo"

export default function WebView() {
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
            <h2 className="font-weight-bold text-dark">{work.topic}</h2>
            <h3 className="text-primary">{work.title}</h3>
            <div className="text-secondary">{work.date}</div>
            <div className="py-4">
              <div className="pt-2">
                <div className="boldish text-secondary">Objective :</div>
                <p>{work.objective}</p>
              </div>
              <div className="boldish text-secondary pb-1">Tools Used:</div>
              <div>
                {work.tools.map((icon, index) => {
                  return <img className="icon-lg" src={icon} alt="web languages" key={index} />
                })}
              </div><br />
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <section className="py-5">
        <div className="row p-sm-5">
          <div className="col-md-5 boldish d-flex justify-content-center px-sm-5">
            <div className="align-self-center">
              <h3 className="font-weight-bold text-primary">Background</h3>
              <h3 className="text-secondary">Planning & Ideating</h3>
              <p className="py-3">
                {work.process}
              </p>
            </div>
          </div>
          <div className="col-md-7 text-dark">
            <img className="img-fluid rounds shadow-md" src={require(`../../img/${work.secondaryImg}`)} alt={work.title + ' website image of home screen before login'} />
            {/* <p className="py-3">{work.result}</p> */}
          </div>
        </div>
      </section>
      <div className="spacer"></div>
      <section className="px-sm-3 py-5">
        <div className="row">
          <div className="col-md-7 no-padding">
            <img className="img-fluid rounds shadow-md" src={require(`../../img/${work.ternaryImg}`)} alt={work.title + ' website image of google maps'} />
          </div>
          <div className="col-md-5 boldish d-flex justify-content-center">
            <div className="align-self-center p-sm-5">
              <div className="py-4">
                <h3 className="font-weight-bold text-primary">Process</h3>
                <h3 className="text-secondary">Development & Design</h3>
              </div>
              <div>
                <p>
                  {work.development}<br /><br />
                  {work.design}<br /><br />
                  {work.wireframes ? 'To view the designed wireframes click ' : ''}
                  {work.wireframes ? <a href={work.wireframesLink} target="_blank" rel="noopener noreferrer">here</a> : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <div className="spacer"></div>
    <section className="container-fluid py-5 my-5">
      <div className="row">
        <div className="col-md-4 boldish d-flex justify-content-center">
          <div className="align-self-center p-sm-5 bg-white rounds shadow-md w-100">
            <div className="py-4">
              {/* <h3 className="font-weight-bold text-primary"></h3> */}
              <h3 className="font-weight-bolder product text-primary">Product</h3>
              <h3 className="text-secondary boldish">See how it works!</h3>
              <div className="text-dark">
                <div>Github Repository <a className="" href={work.githubRepo ? work.githubLink : ''} target="_blank" rel="noopener noreferrer">Link</a></div>
                <div>{work.topic} Website <a className="" href={work.website ? work.website : ''} target="_blank" rel="noopener noreferrer">Link</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 boldish p-4">
          <img className="img-fluid rounds shadow-md" src={require(`../../img/${work.resultImg}`)} alt={work.title + ' website final product'} />
        </div>
      </div>
    </section>
  </React.Fragment>

}