import React from 'react'

const ProjectBrief = ({title, description, githubLink, techUsed})=>{
    return(
        <div className="project-brief-div">
            <p className="project-brief-title">{title}</p>
            <p className="project-brief-desc">{description}</p>
            <p className="project-brief-tech">Tech used: {techUsed}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img alt="github link" src={'./img/chesserOctocat.png'}  className="project-brief-gh"/>
            </a>

        </div>
    )
}

export default ProjectBrief