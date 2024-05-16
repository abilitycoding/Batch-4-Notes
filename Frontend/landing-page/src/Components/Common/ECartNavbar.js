import {
  Container,
  Button,
  Offcanvas,
  Navbar,
  Nav,
  ListGroup,
  Form,
  Col,
  Row
} from "react-bootstrap";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

function ECartNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className=" position-sticky top-0 z-3">
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="d-flex gap-3 align-items-center">
            <HiMenu className="text-white fs-3 d-block d-md-none" onClick={handleShow} />
            <span>E-Cart</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav className="d-flex gap-3">
              <Button variant="light">Login</Button>
              <Button variant="light">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="dark" data-bs-theme="dark" className="p-0 d-none d-md-block">
        <Nav className="px-3">
          <Nav.Link href="/mobiles">Mobiles</Nav.Link>
          <Nav.Link href="/laptop">Laptop</Nav.Link>
          <Nav.Link href="/headphones">Headphones</Nav.Link>
          <Nav.Link href="/smart-watch">Smart Watch</Nav.Link>
          <Nav.Link href="/kids">Kids</Nav.Link>
          <Nav.Link href="/electronics">Electronics</Nav.Link>
          <Nav.Link href="/ac">AC</Nav.Link>
        </Nav>
      </Navbar>
      <Offcanvas
        show={show}
        onHide={handleClose}
        bg="dark"
        data-bs-theme="dark"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <hr />
          <div className="d-flex justify-content-center">
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </div>
          <hr />
          <ListGroup>
            <ListGroup.Item>
              <Nav.Link href="/mobiles">Mobiles</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/laptop">Laptop</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/headphones">Headphones</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/smart-watch">Smart Watch</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/kids">Kids</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/electronics">Electronics</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/ac">AC</Nav.Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ECartNavbar;
