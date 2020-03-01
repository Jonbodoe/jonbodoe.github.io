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
          <img className="img-fluid rounds shadow" src={require(`../img/${work.mainImg}`)} alt={work.title + ' website image'} />
        </div>
        <div id="intro" className="col-md-5 d-flex">
          <div className="align-self-center px-4">
            <h2 className="font-weight-bold py-md-3 text-dark">{work.topic}</h2>
            <h3 className="text-primary">{work.title}</h3>
            <div className="py-4">
              <div className="boldish text-secondary">Tools :</div>
              <div>
                {work.tools.map((icon, index) => {
                  return <img className="icon" src={icon} alt="web languages" key={index} />
                })}
              </div>
              <div className="py-3">
                <div className="boldish text-secondary">Objective :</div>
                <p>{work.objective}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>

}



