import React from 'react'
import { Link } from 'react-router-dom'

const HomeButton = () =>{

    return(
        <div id="home-icon-div">
            <Link to="/" id="home-link"/>
        </div>
    )
}

export default HomeButton