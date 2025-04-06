import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Container } from "react-bootstrap";
import UIUXProjects from "../UIUXProjects";
import uiuxprojectsdata from "../../uiuxprojects.json"
import UIUXProjectcard from "../UIUXProjectcard";

const UIUXProjectsGallery = () =>{

const [selecteduiuxproject, setSelecteduiuxproject] = useState(null)


const selectuiuxproject = (uiuxprojectid) => {
  const chosenuiuxproject = uiuxprojectsdata.find(
    (uiuxproject) => uiuxproject.id === uiuxprojectid
  );
  setSelecteduiuxproject(chosenuiuxproject);
};


return (
  <>
  <Container className='container-fluid' style={{padding: "20px", backgroundColor : "#474787"}}>
{selecteduiuxproject ?
(<>
<UIUXProjectcard
  id = {selecteduiuxproject.id}
  Title={selecteduiuxproject.Title}
  Description ={selecteduiuxproject.Description}
    Image ={selecteduiuxproject.image}>
      <div>{id}</div>
<div>{Title}</div>
<div>{Description}</div>
<div>{Image}</div>
{/* // */}
<div className ="btn" style ={{ backgroundColor : "#ECECEC", color : "#474787", margin : "10px", padding : "10px", fontFamily : "roboto-medium", fontSize : "20px"}} onClick={() => setSelecteduiuxproject(null)}>BACK TO GALLERY</div>

</UIUXProjectcard>

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
                                    selectuiuxproject={() =>selectuiuxproject(id)}
                                />
                            </Col>
                        ))}
                    </Row>
 
)

}
  </Container>
  </>
)
}

export default UIUXProjectsGallery