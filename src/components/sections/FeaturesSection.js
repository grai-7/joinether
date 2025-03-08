import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Attendance Management',
      description: 'Track student and staff attendance with automated reports and notifications to parents.',
      icon: '📊' // Placeholder icon
    },
    {
      id: 2,
      title: 'Gradebook & Assessment',
      description: 'Record and analyze academic performance with customizable grading systems.',
      icon: '📝'
    },
    {
      id: 3,
      title: 'Communication Portal',
      description: 'Connect teachers, students, and parents through integrated messaging and announcements.',
      icon: '💬'
    },
    {
      id: 4,
      title: 'Financial Management',
      description: 'Handle fee collection, expense tracking, and generate financial reports effortlessly.',
      icon: '💰'
    },
    {
      id: 5,
      title: 'Timetable Scheduling',
      description: 'Create and manage class schedules with conflict detection and resource allocation.',
      icon: '🗓️'
    },
    {
      id: 6,
      title: 'Learning Management',
      description: 'Distribute assignments, share resources, and facilitate online learning in one place.',
      icon: '📚'
    }
  ];

  return (
    <section id="features" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold">Powerful Features for Modern Education</h2>
            <p className="lead">Everything you need to run your educational institution efficiently</p>
          </Col>
        </Row>
        <Row>
          {features.map(feature => (
            <Col md={6} lg={4} key={feature.id} className="mb-4">
              <Card className="h-100 shadow-sm" data-aos="fade-up" data-aos-delay={feature.id * 100}>
                <Card.Body className="d-flex flex-column">
                  <div className="display-4 mb-3 text-primary">{feature.icon}</div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeaturesSection;