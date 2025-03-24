import { Card, Container, Button } from "react-bootstrap";


function UIUXProjects (){
  return(
    // <div>Test</div>
    <Container>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/Frame 1208.svg" />
      <Card.Body>
        <Card.Title>Favourites</Card.Title>
        <Card.Text>
          Placeholder for content
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
  )

}
export default UIUXProjects