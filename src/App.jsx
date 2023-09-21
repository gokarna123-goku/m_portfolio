import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <div className="main_section w-full min-h-screen">
          <Home />
        </div>
      </Router>
    </>
  );
}

export default App;
