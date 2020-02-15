import React from 'react';
import {
  //   BrowserRouter as Router,
  Route,
  Switch,
  Link,
  // useParams,
  useRouteMatch
} from "react-router-dom";
import WorkTitle from "../assets/works/worksTitle"
import categories from "../assets/home/category.js"
import Works from "../assets/works/works"

export default function Work() {
  let { path, url } = useRouteMatch()  
  let categoryLinks = categories.map((category => {
    return <React.Fragment key={category.title}>
        <Link className="col-sm-4 d-flex bg-primary justify-content-center" to={`${url + "/" + category.id}`}>
          <h6 className="align-self-center text-white font-weight-bold">{category.title}</h6>
        </Link>
    </React.Fragment>
  }))
  return <React.Fragment>
    <section className="container-fluid pt-5 bg-black">
      <Switch>
        <Route exact path={path}>
          <div className="text-center py-5">
            <h1 className="font-weight-bolder pt-5 text-white">Choose Category</h1>
          </div>
        </Route>
        <Route path={`${path}/:subId`}>
          <WorkTitle />
        </Route>
      </Switch>
      <div id="topics" className="row">
        {categoryLinks}
      </div>
    </section>
    <Route path={`${path}/:type`}>
      <section>
        <Works/>
      </section>
    </Route>
  </React.Fragment>
}