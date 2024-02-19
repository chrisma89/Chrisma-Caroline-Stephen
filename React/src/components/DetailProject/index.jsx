import Projects from '../Projects';
import ProjectsGallery from '../../Pages/ProjectGallery';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';




function DetailProject ({project}) {
  // const [selectedProject, setSelectedProject] = useState(null);
   const { image, name, github, deployed } = project;
    // Setting initial state to the projectsdata json array
    // const [projects, setProjects] = useState(projectsData);
  
    const displayProject = ({project}) => {
      // Display only the project that has been clicked
      const newProject = project.filter((project) => project.id === id);
      // Set friends equal to the new friends array
      setProjects(newProject);
    };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} className='img-container d-flex row'/>
      <Card.Body className='content'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text
        </Card.Text>
        <a href={github} target="_blank"><Button variant="primary">GITHUB</Button></a>
        <a href={deployed} target="_blank"><Button variant="primary">APPLICATION</Button></a>
        <Button id={id} onClick={() => displayProject(id)} className="btn-primary">
        View Project
      </Button>
      </Card.Body>
    </Card>
  );
}

export default DetailProject;
