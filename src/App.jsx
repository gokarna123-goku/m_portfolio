import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <div className="w-full bg-blue-950 min-h-screen">
          <Home />
        </div>
      </Router>
    </>
  );
}

export default App;
