import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-4 fw-bold">The All-in-One Solution for Modern Schools</h1>
            <p className="lead my-4">
              Streamline operations, enhance communication, and improve learning outcomes with our comprehensive school management platform.
            </p>
            <div className="d-flex gap-3">
              <Button variant="primary" size="lg">Get Started</Button>
              <Button variant="outline-secondary" size="lg">Learn More</Button>
            </div>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0 text-center">
            <div className="bg-secondary p-5 rounded" style={{ height: '350px' }}>
              {/* Placeholder for hero image */}
              <p className="text-white">Hero Image Placeholder</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;