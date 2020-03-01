// Need to use react-router to link
import React from 'react';

import {
  useParams
} from "react-router-dom";
import works from "../assets/works/worksInfo"

export default function SingleView() {
  let { view } = useParams();
  let infos = works.filter((work) => {
    return work.url === view
  })
  let work = infos[0]
  return <React.Fragment>
    <section className="container-fluid no-padding p-sm-5">
      <div className="row py-5">
        <div className="col-md-7">
          <img className="img-fluid rounds no-padding shadow" src={require(`../img/${work.mainImg}`)} alt={work.title + ' website image'} />
        </div>
        <div id="intro" className="col-md-5 d-flex">
          <div className="align-self-center px-4">
            <h2 className="font-weight-bold text-dark">{work.topic}</h2>
            <h3 className="text-primary">{work.title}</h3>
            <div className="py-4">
              <div className="pt-2">
                <div className="boldish text-secondary">Objective :</div>
                <p>{work.objective}</p>
              </div>
              <div className="boldish text-secondary">Tools :</div>
              <div>
                {work.tools.map((icon, index) => {
                  return <img className="icon" src={icon} alt="web languages" key={index} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="px-sm-3 py-5">
        <div className="row bg-white p-sm-5 rounds shadow">
          <div className="col-md-5 boldish d-flex justify-content-center">
            <div className="align-self-center">
              <h3 className="text-secondary">Step: 1</h3>
              <h3 className="boldish text-primary">Concept</h3>
            </div>
          </div>
          <div className="col-md-7 text-dark">
            <p className="py-3">{work.process}</p>
          </div>
        </div>
      </section>
    </section>
  </React.Fragment>

}



