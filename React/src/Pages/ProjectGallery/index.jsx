import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projects from "../../components/Projects";
import projectsData from "../../projects.json";
// import DetailProject from '../../components/DetailProject';

const ProjectsGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const selectProject = (projectId) => {
        const chosenProject = projectsData.find(project => project.id === projectId);
        setSelectedProject(chosenProject);
    };

    return (
        <>
            <p>Project Gallery</p>
            <Container>
                {selectedProject ? (
                    <>
                        <Projects project={selectedProject} />
                        <button onClick={() => setSelectedProject(null)}>Back to list</button>
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
        </>
    );
}

export default ProjectsGallery;
