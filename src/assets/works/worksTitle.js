import React from 'react';
import {
  //   BrowserRouter as Router,
  useParams
} from "react-router-dom";
import categories from '../home/category'
// import Works from './works.js';

export default function WorkTitle() {
  let { subId } = useParams();
  let title = categories.map(element => {
    return <React.Fragment key={element.id}>
      {subId === element.id ? element.title : ''}
    </React.Fragment>
  });
  return <React.Fragment>
    <div className="text-center py-5 header-topic">
      <h1 className="font-weight-bolder pt-5 text-dark">{subId.toUpperCase()}</h1>
      <h3 className="text-secondary">{title}</h3>
    </div>
    {/* <section>
      <Works />
    </section> */}
  </React.Fragment>


}