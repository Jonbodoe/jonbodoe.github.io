// Need to use react-router to link
import React from 'react';

import {
    useParams
  } from "react-router-dom";

export default  function SingleView() {
    let { view } = useParams();
return <React.Fragment>
  <div>hello single</div>
  <div>{view}</div>
  </React.Fragment>

}



