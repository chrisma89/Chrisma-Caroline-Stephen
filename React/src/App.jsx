import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import About from './pages/About';
// import Search from './pages/Search';

import NavBar from './components/navbar';
import HomeCard from './Pages/HomeCard';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './projects.json';
import ProjectsGallery from './Pages/ProjectGallery';
// import Footer from './components/Footer';
// import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
    <Router basename='/Chrisma-Caroline-Stephen'>
      <NavBar/>
      <Routes>
      <Route path ="./home" element={ <HomeCard />} />
        <Route path ="./projects" element={ <ProjectsGallery />} />
        <Route path ="./links" element={ <Links />} />
        <Route path ="" element={ <Contact />} />
         
 
      </Routes>
 
  </Router>
  
  </>
  );
}

export default App;