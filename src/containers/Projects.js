import React from 'react'
import ProjectBrief from '../components/ProjectsBrief';
import { projects, inProgressProjects } from '../enumerables/projectsArray'

const Projects = () =>{
    return(
        <div className="project-main text">
            <div className="project-main-content">
            {/* <div className="project-main-working"> */}
                <p className="project-sub-heading">Projects in progress</p>
                <div className="in-progress-wrapper">
                    {inProgressProjects.map(project => <ProjectBrief key={project.id} {...project} />)}
                </div>
            {/* </div> */}
            {/* <div className="project-main-projects"> */}
                <p className="project-sub-heading">Compleated projects</p>
                <div className="projects-wrapper">
                    {projects.map(project => <ProjectBrief key={project.id} {...project} />)}
                </div>
            {/* </div> */}

            </div>
        </div>
    )
}

export default Projects 