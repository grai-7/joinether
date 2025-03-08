import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Ether</h5>
            <p>All-in-one school SaaS solution for modern educational institutions.</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#features" className="text-light">Features</a></li>
              <li><a href="#solutions" className="text-light">Solutions</a></li>
              <li><a href="#testimonials" className="text-light">Testimonials</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: gaurav@joinether.in</p>
            <p>Phone: (+91) 9741888598</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center mb-0">© {new Date().getFullYear()} Ether. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;