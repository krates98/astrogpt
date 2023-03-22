import React from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./pages/Home";
import TryOurTech from "./pages/TryOurTech";
import WhyAAI from "./pages/WhyAAI";
import TokenDistribution from "./pages/TokenDistribution";
import RoadMap from "./pages/RoadMap";
import Important from "./pages/Important";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <TryOurTech />
      <WhyAAI />
      <TokenDistribution />
      <RoadMap />
      <Important />
      <Footer />
    </div>
  );
}

export default App;
