import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
