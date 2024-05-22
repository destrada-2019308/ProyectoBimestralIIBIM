import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

export const Rooms = ({ rooms = [], hotels = [] }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [filteredRooms, setFilteredRooms] = useState([]);
  
  const uniqueHotelIds = Array.from(new Set(rooms.map(room => room.hotel._id)));
  const uniqueHotels = hotels.filter(hotel => uniqueHotelIds.includes(hotel._id));



  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
    // Filtrar habitaciones por hotel seleccionado
    const filtered = rooms.filter(room => room.hotel._id === hotel._id);
    setFilteredRooms(filtered);
  };
  
  useEffect(() => {
    // Al cargar el componente, mostrar todas las habitaciones
    setFilteredRooms(rooms);
  }, [rooms]);

  if (!rooms || rooms.length === 0) {
    return <div>No hay cuartos disponibles.</div>;
  }

  return (
    <StyledRoom>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={6}>
            <Dropdown className="w-100">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-100">
                Busqueda por Hoteles
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100">
                {rooms.map(room => (
                  <Dropdown.Item key={room._id} onClick={() => handleHotelSelect(room.hotel)}>
                  {room.hotel.name} {/* Mostrar el nombre del hotel */}
                </Dropdown.Item>
                ))}
              </Dropdown.Menu>

            </Dropdown>
          </Col>
        </Row>
        {selectedHotel && (
          <Row className="justify-content-center mb-4">
            <Col md={6}>
              <h3>{selectedHotel.name}</h3>
            </Col>
          </Row>
        )}
        <Row className="justify-content-center">
          {/* Mostrar solo las habitaciones filtradas por hotel seleccionado */}
          {filteredRooms.map(room => (
            <Col md={4} key={room._id}>
              <RoomCard>
                <Card.Img variant="top" src={room.imagesRoom[0]} alt={`Imagen de ${room.description}`} />
                <Card.Body>
                  <Card.Title>{room.description}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{room.roomType}</Card.Subtitle>
                  <Card.Text>{room.beds} camas</Card.Text>
                  <Card.Text>Precio: ${room.price}</Card.Text>
                  <Card.Text>{room.status === 'AVAILABLE' ? 'Disponible' : 'No disponible'}</Card.Text>
                </Card.Body>
              </RoomCard>
            </Col>
          ))}
        </Row>
      </Container>
    </StyledRoom>
  );
};
const StyledRoom = styled.div`
  position: absolute; 
  top: 5vh;
  left: 0; 
  margin: 0;
  width: calc(100vw - 15px);
  min-height: 100vh; 
  background: var(--background-gradient); 
  padding: 20px;
  overflow: auto;
`;

const RoomCard = styled(Card)`
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;

  img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  .card-body {
    text-align: center;
  }
`;