import React from 'react'
import ProjectBrief from '../components/ProjectsBrief';
import { projects, inProgressProjects } from '../enumerables/projectsArray'

const Projects = () =>{
    return(
        <div className="project-main text">
            <div className="project-main-working">
                <p>Projects in progress:</p>

                {inProgressProjects.map(project => <ProjectBrief key={project.id} {...project} />)}
                
            </div>
            <div className="project-main-projects">
                <p >My projects:</p>
                {projects.map(project => <ProjectBrief key={project.id} {...project} />)}

            </div>
        </div>
    )
}

export default Projects 