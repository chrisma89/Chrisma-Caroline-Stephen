import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import UIUXProjects from "../UIUXProjects";
import uiuxprojectsdata from "../../uiuxprojects.json"
import UIUXProjectcard from "../UIUXProjectcard";

const UIUXProjectsGallery = () =>{

const [selecteduiuxproject, setSelecteduiuxproject] = useState(null)


const selectuiuxproject = (id) => {
  const chosenuiuxproject = uiuxprojectsdata.find(
    uiuxproject => uiuxproject.id === id
  );
  setSelecteduiuxproject(chosenuiuxproject);
};


return (
  <>
  <div className= "container-fluid d-flex"style={{ backgroundColor : "#2C2C54"}} >
  <Container style={{padding: "20px", backgroundColor : "#474787"}}>
{selecteduiuxproject ?
(<>
 <div className="container-fluid d-flex flex-column align-items-center">
<UIUXProjectcard className ="col mb-2" uiuxproject ={selecteduiuxproject}
  id = {selecteduiuxproject.id}
  Title={selecteduiuxproject.Title}
  Description ={selecteduiuxproject.Description}
    Image ={selecteduiuxproject.image}
/>


<div className ="btn" style ={{ backgroundColor : "#ECECEC", color : "#474787", margin : "10px", padding : "10px", fontFamily : "roboto-medium", fontSize : "20px"}} onClick={() => setSelecteduiuxproject(null)}>BACK TO GALLERY</div>
</div>



</>)
:
(
  <Row>
{uiuxprojectsdata.map((id) => (
                            <Col key={id.id} sm={12} md={6} lg={4}>
                                <UIUXProjects
                                    id={id.id}
                                    Description={id.Description}
                                    // skill={project.skill}
                                    Image={id.Image}
                                    Buttonlabel={id.Buttonlabel}
                                    selectuiuxproject={() =>selectuiuxproject(id.id)}
                                />
                            </Col>
                        ))}
                    </Row>
 
)

}
  </Container>
  </div>
  </>
)
}

export default UIUXProjectsGallery