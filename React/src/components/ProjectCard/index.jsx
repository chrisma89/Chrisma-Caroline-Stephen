import { auto } from '@popperjs/core';
import ProjectsGallery from '../../Pages/ProjectGallery';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "./style.css"
// import DetailProject from '../DetailProject';

function ProjectCard ({id,image,name, github,deployed}) {
  return (
    <div className='d-flex flex-column justify-content-center'>
      {/* <h3 className= "projectbackgrnd" style={{fontSize: "25px", color : "white"}}>{name}</h3> */}
    <Card className ="d-flex justify-content-center align-items-center"style={{ width: '40rem', height : '30rem'}}>
      <Card.Img variant="top" src={image} className='img-container' style={{width : "100%"}}/>
      <Card.Body className="content d-flex flex-column justify-content-center align-items-center">
        <Card.Title style={{fontSize: "35px", padding: "10px", color : "#64002f", textAlign : "center"}}>{name}</Card.Title>
        <Card.Text>
         Project Description
        </Card.Text>
        <a  href={github} target="_blank"style ={{ backgroundColor : "#64002f", color : "white", margin : "5px", padding : "7px"}} >GITHUB</a>
        <a  href={github} target="_blank"style ={{ backgroundColor : "#64002f", color : "white", margin : "5px" ,padding : "7px"}} >APPLICATION</a>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectCard;

