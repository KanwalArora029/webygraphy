import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages Here
import Home from "./pages/Home";
import Contact from "./elements/contact/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Portfolio from "./elements/portfolio/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import Services from "./pages/Services";

// Import Css Here
import "./assets/scss/style.scss";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
