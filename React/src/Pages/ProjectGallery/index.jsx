import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projects from "../../components/Projects";
import projectsData from "../../projects.json";
import ProjectCard from '../../components/ProjectCard';
// import DetailProject from '../../components/DetailProject';

const ProjectsGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const selectProject = (projectId) => {
        const chosenProject = projectsData.find(project => project.id === projectId);
        setSelectedProject(chosenProject);
    };

    return (
        <div style={{background : '--red'}}>
            <h3 style={{fontSize: "25px", color : "#64002f",  padding: "25px",background :  "rgb(238, 238, 238)" }}>Project Gallery</h3>
            <Container className='container-fluid'>
                {selectedProject ? (
                    
                    <>
                        <ProjectCard project={selectedProject} id={selectedProject.id}
                                    image={selectedProject.image}
                                    name={selectedProject.name}
                                    github={selectedProject.github}
                                    deployed={selectedProject.deployed} />
                        <button onClick={() => setSelectedProject(null)}>Back to Gallery</button>
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
