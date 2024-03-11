import { Button } from "react-bootstrap";



const Skills = () => {

  const skillsbutton = {
    backgroundColor: "#2C2C54",
    fontFamily : "roboto-black-italic",
    color: "#ECECEC",
    paddingLeft: "15px",
    paddingRight: "15px",
    border: "10px solid #AAABB8",
    borderRadius: "10px",
    fontSize : "20px",
    marginRight : "40px"
  }
  return ( 
    <>
    <div  className= "container-fluid d-flex flex-wrap flex-column" style={{backgroundColor :"#AAABB8", padding : "30px"}}>
    <h4 style={{fontFamily : "roboto-black-italic",fontSize : "30px", padding : "30px", marginTop : "10px", textAlign: "center", color: "white"}}>Skills</h4>
    
    <div className="container-fluid d-flex flex-wrap flex-row justify-content-center align-align-center">
    <button style={skillsbutton}>HTML5</button>
    <button style={skillsbutton}>CSS3</button>
    <button style={skillsbutton} >Javascript</button>
    <button style={skillsbutton}>jQuery</button>
    <button style={skillsbutton}>React</button>
    <button style={skillsbutton} >Node.js</button>
    <button style={skillsbutton}>CS R4+</button>
    <button style={skillsbutton}>Canva</button>
    <button style={skillsbutton}>Git</button>
    <button style={skillsbutton}>GitHub</button>
    <button style={skillsbutton}>Excalidraw</button>
    <button style={skillsbutton}>Paint.net</button> 
    <button style={skillsbutton}>Adobe Illustrator</button>
    <button style={skillsbutton}>Microsoft Office</button>
     <button style={skillsbutton}>Software Of Excellence</button>
    </div>
    </div>
    </>
   );
}
 
export default Skills;