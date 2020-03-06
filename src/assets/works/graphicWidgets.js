import React from 'react';
import works from '../works/worksInfo'

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
                                        <div className="col-md-7">
                                            <img className="img-fluid" src={require(`../../img/${element.mainImg}`)} alt={`Img of ${element.title}`} />
                                        </div>
                                        <div className="col-md-5">
                                            {element.title}
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