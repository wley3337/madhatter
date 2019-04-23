import React from 'react'
import ProjectBrief from '../components/ProjectsBrief';
import { projects, inProgressProjects } from '../enumerables/projectsArray'

const Projects = () =>{
    return(
        <div className="projects-main text">
            <p className="project-main-working">Projects I am currently working on</p>
            {inProgressProjects.map(project => <ProjectBrief key={project.id} {...project} />)}
            <p className="project-main-projects">My projects:</p>
            {projects.map(project => <ProjectBrief key={project.id} {...project} />)}
        </div>
    )
}

export default Projects 