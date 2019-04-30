import React from 'react'
import { Route } from 'react-router-dom'
//components
import  AboutSubMenu from '../components/AboutSubMenu';
import InANutshell from '../components/InANutshell';
import Contact from '../components/Contact';
import WhatWillKnows from '../components/WhatWillKnows';
import Exploration from '../components/Exploration';


//acts as a controller for the about menu
const About = ({location}) => {
    return(
        <div className="about-main">
            <Route exact path='/' component={InANutshell}/>
            <Route exact path='/about/in-a-nutshell' component={InANutshell}/>
            <Route exact path='/about/contact' component={Contact}/>
            <Route exact path='/about/what-will-knows' component={WhatWillKnows}/>
            <Route exact path='/about/exploration' component={Exploration}/>

       
            <AboutSubMenu
            link1={linkReturns(location.pathname)[0]}
            link2={linkReturns(location.pathname)[1]}
            link3={linkReturns(location.pathname)[2]}
            />
        </div>
    )
}

const linkReturns = (pathname) =>{
   const route = pathname.split("/")[pathname.split("/").length - 1]
   switch(route){
        case "what-will-knows":
            return ['/about/in-a-nutshell','/about/exploration', '/about/contact' ]
        case "contact":
            return ['/about/in-a-nutshell','/about/exploration', '/about/what-will-knows']
        case "in-a-nutshell":
            return ['/about/what-will-knows','/about/exploration', '/about/contact']
        default:
            return ['/about/in-a-nutshell', '/about/what-will-knows', '/about/contact' ]
   } 
}
export default About