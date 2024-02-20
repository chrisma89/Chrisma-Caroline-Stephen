import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projects from "../Projects";
import projectsData from "../../projects.json";
import ProjectCard from '../ProjectCard';


const ProjectsGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const selectProject = (projectId) => {
        const chosenProject = projectsData.find(project => project.id === projectId);
        setSelectedProject(chosenProject);
    };

    return (
        <div className='projectbackgrnd'>
         
            <Container className='container-fluid homecard'>
                {selectedProject ? (
                    
                    <>   <div className="d-flex flex-column align-items-center">
                        <ProjectCard className ="col mb-2" project={selectedProject} id={selectedProject.id}
                                    image={selectedProject.image}
                                    name={selectedProject.name}
                                    github={selectedProject.github}
                                    description={selectedProject.description}
                                    deployed={selectedProject.deployed} />
                       
                        </div>
                    </>
                ) : (
                    <Row>   
                        
                        {projectsData.map((project) => (
                            <Col key={project.id} sm={12} md={6} lg={4}>
                                <Projects
                                    id={project.id}
                                    image={project.image}
                                    name={project.name}
                                    github={project.github}
                                    deployed={project.deployed}
                                    selectProject={() => selectProject(project.id)}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default ProjectsGallery;
