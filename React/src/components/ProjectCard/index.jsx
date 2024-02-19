import { auto } from '@popperjs/core';
import ProjectsGallery from '../../Pages/ProjectGallery';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "./style.css"
// import DetailProject from '../DetailProject';

function ProjectCard ({id,image,name, github,deployed}) {
  return (
    <div className='d-flex justify-content-center'>
    <Card className ="d-flex justify-content-center col"style={{ width: '25rem', height : '50rem'}}>
      <Card.Img variant="top" src={image} className='img-container' style={{width : auto}}/>
      <Card.Body className="content d-flex flex-column justify-content-center align-items-center">
        <Card.Title style={{fontSize: "20px", padding: "10px", color : "black", textAlign : "center"}}>{name}</Card.Title>
        <Card.Text>
         Project Description
        </Card.Text>
        <a href={github} target="_blank"style ={{color : "#59B4C3", margin : "5px"}} >GITHUB</a>
        <a href={deployed} target="_blank" style ={{color : "#59B4C3", margin : "5px"}} >APPLICATION</a>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectCard;

