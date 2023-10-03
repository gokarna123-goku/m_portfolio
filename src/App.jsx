import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import SkillExperience from "./components/Skill_Experience/SkillExperience";
import Service from "./components/Service/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="main_section w-full min-h-screen scroll-smooth">
          {/* {!isFixed ? "" : <Header />} */}
          <Header />
          <Home />
          <About />
          <SkillExperience />
          <Service />
          <Portfolio />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
