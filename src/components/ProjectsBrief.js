import React from 'react'

const ProjectBrief = ({title, description, githubLink, techUsed})=>{
    return(
        <div className="project-brief-div">
            <div className="project-header">
                <p className="project-brief-title">{title}</p>
                
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <div className="project-github"></div>
                </a>

            </div>
            <p className="project-brief-desc">{description}</p>
            <p className="project-brief-tech">Tech used: {techUsed}</p>

        </div>
    )
}

export default ProjectBrief