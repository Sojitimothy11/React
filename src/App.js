import "./App.css";

import { Route, Routes } from "react-router-dom";

import About from "./component/about";
import Home from "./component/home";
import Navbar from "./component/navbar";
import Portfolio from "./component/portfolio";
import Services from "./component/services";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
