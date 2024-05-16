import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-bg vh-100">
      <div className="display-4">Welcome to the Home Page</div>
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();

  // For demonstration purposes, let's add a button that navigates to the Contact page.
  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="about-bg vh-100">
      <div className="h3 text-center font-italic">About Us</div>
      <button onClick={handleNavigateToContact}>Go to Contact</button>
    </div>
  );
};

const Contact = () => {
  return <h1>Contact Us</h1>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="sm" className="home-bg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
