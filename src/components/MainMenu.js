import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import aboutHat from './carousel-images/about-hat.png'
import blogHat from './carousel-images/reporter-hat-with-card.png'
import projectHat from './carousel-images/tophat.png'

const MainMenu = () =>{
    return(
        <div id="main-menu">
            <div className="text main-menu-title-div">Welcome to the home of the Madhatter</div>
            {/* <div className="main-menu-icon">
            </div> */}

            <Carousel interval={null} indicators={false} >
                <Carousel.Item>
                    <Link to="/about/in-a-nutshell" >
                        <div className="main-about d-block">
                            <img id="about-img" src={aboutHat} alt="about page" />
                        </div>
                        <p className="main-menu-text">About Will</p>
                    </Link>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to="/projects" >
                        <div className="main-projects d-block">
                            <img id="projects-img"src={projectHat} alt="projects page" />
                        </div>
                        <p className="main-menu-text">Will's Projects</p>
                    </Link>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to="/blogs" >
                        <div className="main-blogs d-block">
                            <img id="blogs-img"src={blogHat} alt="blog page" />
                        </div>
                        <p className="main-menu-text">Will's Blogs</p>
                    </Link>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default MainMenu
