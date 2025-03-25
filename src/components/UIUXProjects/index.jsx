import { Card, Container, Button } from "react-bootstrap";


function UIUXProjects (){
  return(
    // <div>Test</div>
    <div className= "container-fluid"style={{ backgroundColor : "#2C2C54"}} >
    <Container className='container-fluid d-flex justify-content-center' style={{padding: "20px", backgroundColor : "#474787"}}>
      <Card className ="container-fluid d-flex justify-content-center"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/Frame 1208.svg" />
      <Card.Body className ="container-fluid justify-content-center">
        <Card.Title>Favourites</Card.Title>
        <Card.Text>
          Placeholder for content
        </Card.Text>
        <Button style ={{backgroundColor:"#2C2C54"}}>View Details</Button>
      </Card.Body>
    </Card>
    </Container>
    </div>
  )

}
export default UIUXProjects