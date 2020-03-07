import React from 'react';
import works from '../works/worksInfo'
import {
    Link,
} from "react-router-dom";

export default function GraphicWidget() {

    return <section className="py-5">
        <div className="container py-3" >
            {
                works.map(element => {
                    return element.category === "graphics" ?
                        <React.Fragment>
                            <div className="pb-5">
                                <div className="container shadow widget no-padding">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <img className="img-fluid" src={require(`../../img/${element.mainImg}`)} alt={`Img of ${element.title}`} />
                                        </div>
                                        <div className="col-md-4 align-self-center px-sm-4">
                                            <h2 className="font-weight-bolder text-dark">{element.title}</h2>
                                            <h3 className="boldish text-primary">{element.topic}</h3>
                                            <p className="text-secondary boldish">{element.level}</p>
                                            <p>{element.description}</p>
                                            <div className="py-3 d-flex justify-content-center">
                                                <Link to={`/works/${element.category}/${element.url}`}>
                                                    <button type="button" className="btn button bg-orange text-center shadow-sm text-white">More Details ></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                        :
                        '';
                })
            }
        </div>
    </section>
}