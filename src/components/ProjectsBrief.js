import React from 'react'

const ProjectBrief = ({title, description, githubLink, techUsed})=>{
    return(
        <div className="project-brief-div">
            <div className="project-header">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-brief-title">
                {title}
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-header-link">
                    <div className="project-github"></div>
                </a>

            </div>
            <p className="project-brief-desc">{description}</p>
            <p className="project-brief-tech"><strong>Tech used:</strong>  {techUsed}</p>

        </div>
    )
}

export default ProjectBrief