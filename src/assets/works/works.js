import React from 'react';
import {
    //   BrowserRouter as Router,
    useParams
} from "react-router-dom";
import works from './worksInfo';
import Footer from '../../components/Footer';
// import hello from '../../img/adventure.png'
// import works from './worksInfo'
// import works from './worksInfo';

export default function Works() {
    // function mappedIcons(icons) {
    //     element.tools.map((icon, index)=> {
    //         return <img src={icon} alt="web languages" key={index}/>
    //     })
    // }

    let { type } = useParams();
    let listedWorks = works.map(element => {
        if (element.category === type) {
            return <div className="container my-5 shadow-md widget bg-white" key={element.mainImg}>
                <div className="row">
                    <img className="img-fluid col-sm-8" src={require(`../../img/${element.mainImg}`)} alt={element.mainImg} key={element.mainImg} />
                    <div className="col-sm-4 d-flex align-self-center px-sm-4">
                        <div>
                            <h2 className="font-weight-bold">{element.topic}</h2>
                            <h6 className="boldish text-primary">{element.title}</h6>
                            <p>{element.objective}</p>
                            <div className="boldish text-secondary">Tools:</div>
                            {
                                element.tools.map((icon, index)=> {
                                    return <img className="icon" src={icon} alt="web languages" key={index}/>
                                })
                            }
                            <div className="pt-4">
                                <div className="button bg-orange text-center shadow-sm text-white">More Details ></div>
                            </div>
                            {/* Router to distinct link.*/}
                        </div>
                    </div>
                </div>
            </div>
        }
    })
    return <React.Fragment>
        <section className="py-3">
            {listedWorks}
        </section>
        <Footer/>
    </React.Fragment>
}