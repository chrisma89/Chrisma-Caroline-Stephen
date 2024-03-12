import { Button } from "react-bootstrap";

const Skills = () => {
  const skillsbutton = {
    backgroundColor: "#2C2C54",
    fontFamily: "roboto-black-italic",
    color: "#ECECEC",
    paddingLeft: "10px",
    paddingRight: "10px",
    margin: "20px",
    border: "1px solid #AAABB8",
    borderRadius: "10px",
    fontSize: "23px",
    // marginRight: "40px",
  };
  return (
    <>
      <div
        className="container-fluid d-flex flex-wrap flex-column"
        style={{ backgroundColor: "f0f0f0", padding: "30px" }}
      >
        <h4
          style={{
            fontFamily: "roboto-black-italic",
            fontSize: "25px",
            padding: "20px",
            marginTop: "10px",
            textAlign: "center",
            color: "#2C2C54",
          }}
        >
          Skills
        </h4>

        <div className="container-fluid d-flex flex-wrap flex-row justify-content-center align-align-center">
          <button style={skillsbutton}>Git</button>
          <button style={skillsbutton}>TDD</button>
          <button style={skillsbutton}>OOP</button>
          <button style={skillsbutton}>CSS3</button>
          <button style={skillsbutton}>React</button>
          <button style={skillsbutton}>HTML5</button>
          <button style={skillsbutton}>Canva</button>
          <button style={skillsbutton}>CS R4+</button>
          <button style={skillsbutton}>GitHub</button>
          <button style={skillsbutton}>jQuery</button>
          <button style={skillsbutton}>Node.js</button>
          <button style={skillsbutton}>Paint.net</button>
          <button style={skillsbutton}>Bootstrap</button>
          <button style={skillsbutton}>Javascript</button>
          <button style={skillsbutton}>Excalidraw</button>
          <button style={skillsbutton}>Microsoft Office</button>
          <button style={skillsbutton}>Adobe Illustrator</button>
          <button style={skillsbutton}>Software Of Excellence</button>
        </div>
      </div>
    </>
  );
};

export default Skills;
