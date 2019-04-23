import React from 'react'
import { Link } from 'react-router-dom'


const AboutSubMenu = ({link1, link2, link3}) =>{
    return(
        <div>
            <div className="about-submenu-1">
                {link1 === '/about/in-a-nutshell' ? 
                    <Link to='/about/in-a-nutshell'>
                    <div className="in-a-nutshell-bg">Will In A Nutshell</div>
                    </Link>
                : 
                    <Link to='/about/what-will-knows'>
                    <div className="what-will-knows-bg">What Will Knows</div>
                    </Link> 
                }
            </div>

            <div className="about-submenu-2">
                {link2 === '/about/exploration' ? 
                    <Link to='/about/exploration'>
                        <div className="exploration-bg">Exploration</div>
                    </Link>
                : 
                    <Link to='/about/what-will-knows'>
                        <div className="what-will-knows-bg">What Will Knows</div>
                    </Link> 
                }
            </div>
            <div className="about-submenu-3">
                {link3 === '/about/contact' ? 
                    <Link to='/about/contact'>
                        <div className="contact-bg">Contact</div>
                    </Link>
                : 
                    <Link to='/about/what-will-knows'>
                        <div className="what-will-knows-bg">What Will Knows</div>
                    </Link> 
                }
            </div>
            
            SubMenu</div>
    )
}

export default AboutSubMenu