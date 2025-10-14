
import React from "react";
import PortfolioHeader   from "./components/PortfolioHeader";
import PortfolioProjects from "./components/PortfolioProjects";
import './App.css'

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <PortfolioHeader />
      <PortfolioProjects />
    </div>
  );
}

export default App;
