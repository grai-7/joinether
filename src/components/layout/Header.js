import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home">Ether</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#solutions">Solutions</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          </Nav>
          <Button variant="primary">Contact Us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;