import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () =>{
    return(
        <div className="main-menu">
        <Link to="/about/in-a-nutshell" className="main-about"><img src={"/img/about-hat.png"} alt="about page" /></Link>
        <Link to="/projects" className="main-projects"><img src={"/img/tophat.png"} alt="projects page" /></Link>
        <Link to="/blogs" className="main-blogs"><img src={"/img/reporter-hat-with-card.png"} alt="blog page" /></Link>

        </div>
    )
}

export default MainMenu