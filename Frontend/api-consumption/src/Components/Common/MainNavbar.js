import { Container, Nav, Navbar, Button } from "react-bootstrap";

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
          </Nav>
          <Nav className="d-flex gap-3">
            <Button variant="light">Login</Button>
            <Button variant="light">SignUp</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
