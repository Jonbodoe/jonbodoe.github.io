import React from 'react';
import {
    //   BrowserRouter as Router,
    useParams
} from "react-router-dom";
import works from './worksInfo';
// import hello from '../../img/adventure.png'
// import works from './worksInfo'
// import works from './worksInfo';

export default function Works() {

    let { type } = useParams();
    let listedWorks = works.map(element => {
        if (element.category === type) {
            return <div className="container py-3 shadow-md" key={element.mainImg}>
                <div className="row">
                    <img className="img-fluid col-sm-8" src={require(`../../img/${element.mainImg}`)} alt={element.mainImg} key={element.mainImg} />
                    <div className="col-sm-4 d-flex align-self-center">
                        <div>
                        <h2 className="font-weight-bold">{element.topic}</h2>
                        <p>some p</p>
                        </div>
                    </div>
                </div>
            </div>
        }
    });
    return <React.Fragment>
        <div>{listedWorks}</div>
    </React.Fragment>
}