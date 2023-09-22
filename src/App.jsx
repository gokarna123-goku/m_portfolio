import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbar = {
    transition: "0.5s ease-out",
  };

  if (isFixed) {
    navbar.position = "nav_fixed";
    navbar.top = 0;
  }

  //
  return (
    <>
      <Router>
        <div className="main_section w-full min-h-screen">
          {!isFixed ? "" : <Header />}
          {/* <Header /> */}
          <Home />
          <About />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
