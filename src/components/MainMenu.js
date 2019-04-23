import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

const MainMenu = () =>{
    return(
        <div id="main-menu">

            <Carousel interval={null} indicators={false}>
                <Carousel.Item>
                    <div className="main-about d-block">
                        <Link to="/about/in-a-nutshell" ><img id="about-img" src={"/img/about-hat.png"} alt="about page" /></Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="main-projects d-block">

                    <Link to="/projects" ><img id="projects-img"src={"/img/tophat.png"} alt="projects page" /></Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="main-blogs d-block">
                        <Link to="/blogs" >
                        <img id="blogs-img"src={"/img/reporter-hat-with-card.png"} alt="blog page" />
                        </Link>

                    </div>

                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default MainMenu
