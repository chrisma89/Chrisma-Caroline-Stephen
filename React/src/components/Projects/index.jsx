
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"
// import DetailProject from '../DetailProject';

function Projects ({id,image,name, github,deployed, displayProject}) {
  return (
    <Card style={{ width: '18rem', height : '26rem' }}>
      <Card.Img variant="top" src={image} className='img-container'/>
      <Card.Body className='content'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Project Description
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

export default Projects;

