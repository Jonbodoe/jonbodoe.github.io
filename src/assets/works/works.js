import React from 'react';
// import works from './worksInfo';
import Footer from '../../components/Footer';
// import hello from '../../img/adventure.png'
// import works from './worksInfo'
// import works from './worksInfo';
import WebWidgets from './webWidgets'
import {
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import SingleView from '../../components/singleView';
import Illustration from '../works/illustrationWidgets'
import GraphicWidget from '../works/graphicWidgets'

export default function Works() {
    let {type} = useParams()
    console.log(type)
    return <React.Fragment>
        {/* <WebWidgets/> */}
        {/* <Router> */}
        <Switch>
            <Route exact path="/works/illustration" render={ () => <Illustration/>}/> 
            <Route exact path="/works/web" render={ () => <WebWidgets/>}/>
            <Route exact path="/works/graphics" render={ () => <GraphicWidget/>}/>  
            <Route path="/works/web/:view" render={ () => <SingleView/>}/>
            {/* <Route exact path={`/work/${type}`} render={ () => <WebWidgets/>}/>
            <Route exact path={`/work/${type}/:view`} render={ () => <SingleView/>}/>  */}
        </Switch>
        <Footer />
        {/* </Router> */}
    </React.Fragment>
    // Need to use react router to toggle between links of which section to use, for the more specific verison use "useparams"
    // example: https://codesandbox.io/s/vvoqvk78?from-embed
    // similar to the roster.js linking.
}