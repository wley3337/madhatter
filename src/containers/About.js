import React from 'react'
import { Route } from 'react-router-dom'
//components
import  AboutSubMenu from '../components/AboutSubMenu';
import InANutshell from '../components/InANutshell';
import Contact from '../components/Contact';
import WhatWillKnows from '../components/WhatWillKnows';
import Exploration from '../components/Exploration';


//acts as a controller for the about menu
const About = (props) => {
    const pathDetail = props.match.params.pathDetail 
    return(
        <div className="about-main">
            <Route exact path='/about/in-a-nutshell' component={InANutshell}/>
            <Route exact path='/about/contact' component={Contact}/>
            <Route exact path='/about/what-will-knows' component={WhatWillKnows}/>
            <Route exact path='/about/exploration' component={Exploration}/>
            <AboutSubMenu
            link1='contact'
            link2='exploration'
            link3='whatWillKnows'
            />
        </div>
    )
}

export default About