import React from 'react';
import {
    //   BrowserRouter as Router,
      useParams
    } from "react-router-dom";

export default function About() {
    let { id } = useParams();
    console.log({id})
    
    return <section className="container-fluid pt-5 mt-5">
        <div className="row">
            <h2>{id}</h2>
        </div>
    </section>;
}