import React from 'react';
import {
  //   BrowserRouter as Router,
  Route,
  Switch,
  Link,
  // useParams,
  // useRouteMatch,
  withRouter
} from "react-router-dom";
import WorkTitle from "../assets/works/worksTitle"
import categories from "../assets/home/category.js"
import Works from "../assets/works/works"

function Work() {
  // let { path, url } = useRouteMatch()
  let categoryLinks = categories.map((category => {
    return <React.Fragment key={category.title}>
      <Link className={"col-sm-4 d-flex justify-content-center py-3 " + category.color} to={`/works/${category.id}`}>
        <h6 className="align-self-center text-white">{category.title}</h6>
      </Link>
    </React.Fragment>
  }))
  return <React.Fragment>
    <section className="container-fluid pt-5 page">
      <Switch>
        <Route exact path='/works'>
          <div className="text-center py-5">
            <h1 className="font-weight-bolder pt-5 text-dark">Choose Category</h1>
          </div>
        </Route>
        <Route path='/works/:subId'>
          <WorkTitle />
        </Route>
      </Switch>
      <div id="topics" className="row">
        {categoryLinks}
      </div>
      <Route path='/works/:type'>
        <section>
          <Works/>
        </section>
      </Route>
    </section>
  </React.Fragment>
}

export default withRouter(Work)