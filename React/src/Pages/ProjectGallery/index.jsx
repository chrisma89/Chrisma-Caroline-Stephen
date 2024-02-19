import React, { useState } from 'react';
import Projects from "../../components/Projects";
import projectsData from "../../projects.json"; 

const ProjectsGallery = () => {

 
    // Setting initial state to the projectsdata json array
    const [projects, setProjects] = useState(projectsData);
  
    const displayProject = (id) => {
      // Display only the project that has been clicked
      const newProject = projects.filter((project) => project.id === id);
      // Set friends equal to the new friends array
      setProjects(newProject);
    };


  return(
    <>
    <p>Project Gallery</p>

    {
      projectsData.map((project) => (
        <Projects 
        id ={project.id}
        key ={project.id}
        image ={project.image}
        name = {project.name}
        github={project.github}
        deployed = {project.deployed}
        displayProject = {displayProject}>

        </Projects>
      ))
    }
    </>
  )
}

export default ProjectsGallery;