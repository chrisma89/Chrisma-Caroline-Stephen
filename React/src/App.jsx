import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import HomeCard from './Pages/HomeCard';
import './projects.json';
import ProjectsGallery from './Pages/ProjectGallery';
import Contact from "./Pages/Contact"
import Links from './Pages/LInks';
import Details from './Pages/Details';


function App() {
  return (
    <Router basename={`/Chrisma-Caroline-Stephen`}>
      
      <div>
        <NavBar /> 
        <Routes>
          <Route path="./" element={<HomeCard />} />
          <Route path="./projects" element={<ProjectsGallery />} />
          <Route path="./projectdetails" element={<Details  />} />
          <Route path="./links" element={<Links />} />
          <Route path="./contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;