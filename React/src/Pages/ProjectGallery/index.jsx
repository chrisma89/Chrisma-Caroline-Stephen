import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'; // Ensure this import
import Row from 'react-bootstrap/Row'; // Ensure this import
import Col from 'react-bootstrap/Col'; // Ensure this import
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

    
      <Container> 
        <Row>
          {projectsData.map((project) => (
            <Col key={project.id} sm={12} md={6} lg={4}> 
        <Projects
        id ={project.id}
        key ={project.id}
        image ={project.image}
        name = {project.name}
        github={project.github}
        deployed = {project.deployed}
        displayProject = {displayProject}>

        </Projects>
        </Col>))}
      
      </Row> 
        
      </Container>
    
    
    </>
  )
}

export default ProjectsGallery;