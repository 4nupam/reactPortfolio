import react from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import Nav from './nav/Nav.js';
import About from './about/About.js'
import Skill from './skill/skill.js';
import Contact from './contact/Contact.js';
import Project from './Project/Project.js';
import Background from './background/Background.js'
import PlayerStats from './playerStats/PlayerStats';

const App = () => {
  return (
    <>
      <Router>

        <Nav />
        <Background />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/skills" element={<Skill />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

        </Routes>
        <PlayerStats/>
      </Router>
    </>
  );
}

export default App;
