
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function ProjectCard({ id, image, name, github, deployed, description,skill }) {
  return (
    <Container className='mt-3'>
      <Row className='justify-content-center'>
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={image} className='img-fluid'/>
            <Card.Body>
              <Card.Title className="text-center">{name}</Card.Title>
              <Card.Text>
                {description}
                {/* {skill} */}
              </Card.Text>
              <div className='d-flex flex-column flex-sm-row justify-content-around'>
                <a href={github} target="_blank"style ={{ backgroundColor : "#2C2C54", color : "white", margin : "5px", padding : "10px", textDecoration : "none",fontFamily: "roboto-medium"}} className="btn my-1">GitHub</a>
                <a href={deployed} target="_blank"style ={{ backgroundColor : "#2C2C54", color : "white", margin : "5px", padding : "10px", textDecoration : "none",fontFamily: "roboto-medium"}} className="btn my-1">Application</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectCard;



// function ProjectCard ({id,image,name, github,deployed, description}) {
//   return (
//     <Container className='container-fluid d-flex flex-row justify-content-center'>
     
//     <Card className ="d-flex justify-content-center align-items-center"style={{ width: '38rem', height : '36rem'}}>
//       <Card.Img variant="top" src={image} className='img-container' style={{width : "100%"}}/>
//       <Card.Body className="content d-flex flex-column justify-content-center align-items-center">
//         <Card.Title style={{fontSize: "30px", padding: "5px", color : "#64002f", textAlign : "center", color : "#2C2C54"}}>{name}</Card.Title>
//         <Card.Text style={{fontSize: "24px", color : "#64002f", textAlign : "center",color : "#2C2C54", fontFamily: "roboto-medium"}}> 
//          {description}
//         </Card.Text>
//         <div className='conatiner-fluid d-flex felx-row'>
//           <a  href={github} target="_blank"style ={{ backgroundColor : "#2C2C54", color : "white", margin : "5px", padding : "10px", textDecoration : "none",fontFamily: "roboto-medium"}} >GITHUB</a>
//         <a  href={deployed} target="_blank"style ={{ backgroundColor : "#2C2C54", color : "white", margin : "5px" ,padding : "10px",textDecoration : "none", fontFamily: "roboto-medium"}} >APPLICATION</a>
//         </div>
        
        
//       </Card.Body>
//     </Card>
//     </Container>
//   );
// }

// export default ProjectCard;

