import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ProblemSolutionSection() {
  const problemSolutions = [
    {
      id: 1,
      problem: 'Manual attendance tracking is time-consuming and error-prone',
      solution: 'Automated digital attendance with biometric or QR code options, saving hours each week',
    },
    {
      id: 2,
      problem: 'Fragmented communication leads to missed information',
      solution: 'Centralized communication platform that ensures all stakeholders stay informed',
    },
    {
      id: 3,
      problem: 'Paper-based record keeping is inefficient and difficult to analyze',
      solution: 'Digital records with powerful analytics and reporting capabilities',
    },
    {
      id: 4,
      problem: 'Managing multiple software tools is complex and costly',
      solution: 'All-in-one integrated platform that eliminates the need for multiple subscriptions',
    },
  ];

  return (
    <section id="solutions" className="py-5 bg-light">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold">Common Challenges, Elegant Solutions</h2>
            <p className="lead">
              We understand the unique problems faced by educational institutions
            </p>
          </Col>
        </Row>
        
        {problemSolutions.map((item, index) => (
          <Row 
            key={item.id} 
            className={`mb-4 align-items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            data-aos="fade-up"
          >
          <Col md={6} className="mb-3 mb-md-0">
            <Card className="border-danger h-100" data-aos="fade-right" data-aos-delay="200">
              <Card.Body>
                <h5 className="text-danger mb-3">The Problem:</h5>
                <p className="lead mb-0">{item.problem}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-success h-100" data-aos="fade-left" data-aos-delay="200">
              <Card.Body>
                <h5 className="text-success mb-3">Our Solution:</h5>
                <p className="lead mb-0">{item.solution}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        ))}
      </Container>
    </section>
  );
}

export default ProblemSolutionSection;