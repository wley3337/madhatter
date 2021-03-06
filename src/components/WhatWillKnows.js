import React from 'react'

const WhatWillKnows = () =>{
    const whatWillKnows =["JavaScript", "Rails",
        "Ruby", "MapboxGL","CSS Grid", "Git Workflow", "RESTfull API design", "SQL", "OOP", "VectorWorks"]
    return (
        <div className="text about-bg">
            <div>
            <p className="about-title">What Will Knows</p>
            <ul>
            <li>React
                    <ul>
                        <li>Redux</li>
                        <li>Thunk</li>
                        <li>React-Router</li>
                    </ul>
            </li>
                {whatWillKnows.map( (knowledge, index) => <li key={index}>{knowledge}</li> ) }
            </ul>

            </div>
        </div>
    )
}
export default WhatWillKnows