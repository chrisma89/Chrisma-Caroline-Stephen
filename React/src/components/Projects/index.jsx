
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects ({id,image,name, github,deployed, displayProject}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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

