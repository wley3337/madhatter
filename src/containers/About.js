import React from 'react'
import { Route } from 'react-router-dom'
import InANutshell from '../components/InANutshell';
import Contact from '../components/Contact';
import WhatWillKnows from '../components/WhatWillKnows';
import Exploration from '../components/Exploration';


//acts as a controller for the about menu
const About = (props) => {
    const pathDetail = props.match.params.pathDetail 
    return(
        <div>
            <p>About {pathDetail}</p>
            <Route exact path='/about/in-a-nutshell' component={InANutshell}/>
            <Route exact path='/about/contact' component={Contact}/>
            <Route exact path='/about/what-will-knows' component={WhatWillKnows}/>
            <Route exact path='/about/exploration' component={Exploration}/>
        </div>
    )
}

export default About