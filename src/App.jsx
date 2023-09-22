import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <div className="main_section w-full min-h-screen">
          {/* <Header /> */}
          <Home />
        </div>
      </Router>
    </>
  );
}

export default App;
