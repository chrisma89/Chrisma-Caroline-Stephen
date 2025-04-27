import { Card, Container, Button } from "react-bootstrap";
import UIUXProjectsGallery from "../UIUXProjectgallery";
import UIUXProjectcard from "../UIUXProjectcard";
import uiuxprojectsdata from "../../uiuxprojects.json"


function UIUXProjects({ id, Title, Description, selectuiuxproject,Buttonlabel }) {
  return (
   
      <Container
        className="container-fluid d-flex justify-content-center"
        style={{ padding: "0px"}}
      >
        <Card
          className=""
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" />
          <Card.Body className="justify-content-center">
            <Card.Title>{Title}</Card.Title>
            <Card.Text>{Description}</Card.Text>
            <Button
              style={{ backgroundColor: "#2C2C54" }}
              onClick={() =>
                selectuiuxproject(id)}
            >
              {Buttonlabel}
            </Button>
          </Card.Body>
        </Card>
      </Container>
  
  );
}
export default UIUXProjects;
