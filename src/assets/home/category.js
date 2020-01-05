import React from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // NavLink,
  } from "react-router-dom";

const categories = [
    {
        title: 'Web Development & Design', 
        id: 'web',
    },
    {
        title: 'Graphic Design',
        id: 'graphics',
    },
    {
        title: 'Illustration',
        id: 'illustration',
    }
].map((category)=>{
    return <Link className="col-md-4" to={`/works#${category.id}`}>
          <div id={category.id} className="category"></div>
          <h4 className="font-weight-bolder p-4 text-center bg-primary text-white">{category.title}</h4>
        </Link>
})

export default categories