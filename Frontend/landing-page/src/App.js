import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import ECartNavbar from "./Components/Common/ECartNavbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Mobile from "./Components/Pages/Mobile";
import Contact from "./Components/Pages/Contact";
import Laptop from "./Components/Pages/Laptop";
import HeadPhones from "./Components/Pages/Headphones";
import SmartWatch from "./Components/Pages/SmartWatch";
import Kids from "./Components/Pages/Kids";
import Electronics from "./Components/Pages/Electronics";
import Ac from "./Components/Pages/Ac";
import ECartFooter from "./Components/Common/ECartFooter";

const App = () => {
  return (
    <Router>
      <div className=" bg-dark-subtle">
        <ECartNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/headphones" element={<HeadPhones />} />
          <Route path="/smart-watch" element={<SmartWatch />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/ac" element={<Ac />} />
        </Routes>
        <ECartFooter />
      </div>
    </Router>
  );
};

export default App;