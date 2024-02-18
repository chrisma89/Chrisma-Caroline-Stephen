import Projects from "../../components/Projects";
import projectsData from "../../projects.json"; // Adjust the path as necessary

const ProjectsGallery = (props) => {
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
        deployed = {project.deployed}>

        </Projects>
      ))
    }
    </>
  )
}

export default ProjectsGallery;