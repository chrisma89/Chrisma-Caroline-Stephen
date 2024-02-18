// import Projects from "../../components/Projects";
// import './projects.json';

const ProjectsGallery = () => {
  return(
    <>
    <p>Project Gallery</p>

    {
      projectsData.map((project) => (
        <Projects 
        id ={project.id}
        key ={project.key}
        name = {project.name}
        github={project.github}
        deployed = {project.deployed}>

        </Projects>
      ))
    }
    </>
  )
}

export default ProjectsGallery;