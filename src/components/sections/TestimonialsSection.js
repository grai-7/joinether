import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Principal, Westside High School',
      content: 'Ether has transformed how we manage our school operations. What used to take hours now takes minutes, and our staff can focus more on teaching rather than administrative tasks.',
      avatar: '👩‍💼' // Placeholder
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'IT Director, Oakridge Academy',
      content: 'The seamless integration between all modules is impressive. We\'ve eliminated data silos and now have a single source of truth for all our school information.',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Teacher, Pinecrest Elementary',
      content: 'The gradebook and assessment tools make my life so much easier. Parents appreciate the transparency, and students benefit from the quick feedback loop.',
      avatar: '👩‍🏫'
    }
  ];

  return (
    <section id="testimonials" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold">What Our Users Say</h2>
            <p className="lead">Educational institutions trust Ether to streamline their operations</p>
          </Col>
        </Row>
        <Row>
          {testimonials.map(testimonial => (
            <Col md={4} key={testimonial.id} className="mb-4">
              <Card className="h-100 shadow" data-aos="zoom-in" data-aos-delay={testimonial.id * 100}>
                <Card.Body className="d-flex flex-column">
                  <div className="display-4 mb-3 text-center">{testimonial.avatar}</div>
                  <Card.Text className="flex-grow-1 font-italic">"{testimonial.content}"</Card.Text>
                  <div className="mt-3">
                    <p className="fw-bold mb-0">{testimonial.name}</p>
                    <p className="text-muted small">{testimonial.role}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialsSection;