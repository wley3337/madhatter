import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

const MainMenu = () =>{
    return(
        <div id="main-menu">
            <div className="text main-menu-title-div">Welcome to the home of the Madhatter</div>
            <div className="main-menu-icon">
            </div>

            <Carousel interval={null} indicators={false} >
                <Carousel.Item>
                    <div className="main-about d-block">
                        <Link to="/about/in-a-nutshell" ><img id="about-img" src={"/img/about-hat.png"} alt="about page" /></Link>
                    </div>
                    <p className="main-menu-text">About Will</p>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="main-projects d-block">
                    <Link to="/projects" ><img id="projects-img"src={"/img/tophat.png"} alt="projects page" /></Link>
                    </div>
                        <p className="main-menu-text">Will's Projects</p>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="main-blogs d-block">
                        <Link to="/blogs" >
                        <img id="blogs-img"src={"/img/reporter-hat-with-card.png"} alt="blog page" />
                        </Link>
                    </div>
                    <p className="main-menu-text">Will's Blogs</p>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default MainMenu
