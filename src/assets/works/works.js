import React from 'react';
import {
    //   BrowserRouter as Router,
    useParams
  } from "react-router-dom";
// import works from './worksInfo'
// import works from './worksInfo';

export default function Works() {
    let { type } = useParams();
    
    // console.log(works)
    return <React.Fragment>
        <div>hello</div>
        <div>{type}</div>
    </React.Fragment>
}