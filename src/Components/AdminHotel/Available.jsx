import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'; 

export const Available = ({ rooms }) => {
  return (
    <Container>
      <Row>
        {rooms.map(room => (
          <Col md={4} key={room.id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
              <Card.Img variant="top" src={room.imagesRoom[0]} alt={`Imagen de ${room.description}`} />
                <Card.Title>{room.description}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{room.category}</Card.Subtitle>
                <Card.Text>{room.description}</Card.Text>
                <Card.Text>{room.price}</Card.Text>
                {/* Agrega más información de la habitación si es necesario */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};