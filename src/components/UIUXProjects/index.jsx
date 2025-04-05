import { Card, Container, Button } from "react-bootstrap";
import uiuxdata from "../../uiuxprojects.json";

function UIUXProjects({ Title, Description, setuiuxproject }) {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#2C2C54" }}>
      <Container
        className="container-fluid d-flex justify-content-center"
        style={{ padding: "20px", backgroundColor: "#474787" }}
      >
        <Card
          className="container-fluid d-flex justify-content-center"
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" />
          <Card.Body className="container-fluid justify-content-center">
            <Card.Title>{Title}</Card.Title>
            <Card.Text>{Description}</Card.Text>
            <Button
              style={{ backgroundColor: "#2C2C54" }}
              onClick={() => {
                setuiuxproject(id);
              }}
            >
              Find out more
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default UIUXProjects;
