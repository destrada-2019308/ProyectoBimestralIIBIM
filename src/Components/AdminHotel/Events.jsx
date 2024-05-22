import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export const Events = ({ events }) => {
 
  return (
    <Container>
      <Row>
        {events.map(event => (
          <Col md={4} key={event._id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
              <Card.Title>{event.hotel && event.hotel.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                
                <Card.Subtitle className="mb-2 text-muted">{event.additional && event.additional.description}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                <Card.Text>{new Date(event.date).toLocaleDateString()}</Card.Text>
                <Card.Text>{event.time}</Card.Text>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
