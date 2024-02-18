// add all 6 projects
// import projects
// import 
// import project from './projects.json';
// import ProjectGallery from '../../Pages/ProjectGallery';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects ({id, key,name, github,deployed}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="{github}"><Button variant="primary">GITHUB</Button></a>
        <a href="{deployed}"><Button variant="primary">APPLICATION</Button></a>
      </Card.Body>
    </Card>
  );
}

export default Projects;

