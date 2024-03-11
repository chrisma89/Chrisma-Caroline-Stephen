const About = () => {
  
  return (
    <>
    <div
  className="container-fluid d-flex justify-content-between about" // This spreads out the child elements.
  style={{ height: "auto", padding: "20px" }}
>
  <div className="d-flex justify-content-center" style={{ padding: "20px", flexGrow: 1 }}>
    <div className="flex-column align-items-center">
      <div className="charm-regular">Hello, I'm Chrisma.</div>
      <div className="charm-regular">I'm a Web Developer with a background in dentistry.</div>
      <div className="charm-regular">Explore my projects & get in touch.</div>
    </div>
  </div>
  <div 
    className="d-flex flex-row align-items-end justify-content-end" 
    style={{ padding: "20px", flexGrow: 0 }} // Adjust flexGrow as needed
  >
    <div className="roboto-regular-italic">Design ||</div>
    <div className="roboto-regular-italic">Create ||</div>
    <div className="roboto-regular-italic">Deliver</div>
  </div>
</div>


    </>
  );
};

export default About;
