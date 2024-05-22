import { Container, Row, Col, Card } from 'react-bootstrap'; // Asegúrate de importar Container, Row, Col y Card de react-bootstrap
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRoom } from "../../shared/hooks/Client/useRoom"


export const Hotels = ({ hotels = [] }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const { rooms, getRooms, isFetching } = useRoom();

  const handleCardClick = (hotel) => {
    setSelectedHotel(hotel);
  };


  const handleCloseOverlay = () => {
    setSelectedHotel(null);
  };

  useEffect(() => {
    getRooms(); // Llama a la función getRooms cuando se monta el componente
  }, []);

  return (
    <StyledHotel>
      <Row style={{ width: '100vw' }}>
        {hotels.map(hotel => (
          <Col md={3} key={hotel.id}>
            <RoomCard onClick={() => handleCardClick(hotel)}>
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={6} className="image-column">
                    <Card.Img
                      crossOrigin="anonymous"
                      src={`http://localhost:2656${hotel.imagesHotel[0]}`}
                      alt={hotel.name}
                    />
                  </Col>
                  <Col md={6} className="info-column">
                    <Card.Title>{hotel.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{hotel.city}</Card.Subtitle>
                    <Card.Text>{hotel.address}</Card.Text>
                    <Card.Text>{hotel.phone}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </RoomCard>
          </Col>
        ))}
      </Row>
      {selectedHotel && (
        <Overlay onClick={handleCloseOverlay}>
          <OverlayContent onClick={(e) => e.stopPropagation()}>
            <ImageContainer>
              <Card.Img
                crossOrigin="anonymous"
                src={`http://localhost:2656${selectedHotel.imagesHotel[0]}`}
                alt={`Imagen de ${selectedHotel.name}`}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </ImageContainer>
            <InfoContainer>
              <Card.Title>{selectedHotel.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{selectedHotel.city}</Card.Subtitle>
              <Card.Text>{selectedHotel.address}</Card.Text>
              <Card.Text>{selectedHotel.phone}</Card.Text>
              <RoomSection>
                <h3>Cuartos</h3>
                {isFetching ? (
                  <p>Cargando cuartos...</p>
                ) : rooms ? (
                  <Container>
                    <Row>
                      {rooms.map(room => (
                        <Col md={6} key={room.id}>
                          <Card style={{ marginBottom: '20px' }}>
                            <Card.Img variant="top" src={room.imagesRoom} alt={room.imagesRoom} />
                            <Card.Body>
                              <Card.Title>{room.description}</Card.Title>
                              <Card.Text>{room.price}</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Container>
                ) : (
                  <p>No hay cuartos disponibles</p>
                )}
              </RoomSection>
            </InfoContainer>
          </OverlayContent>
        </Overlay>
      )}
    </StyledHotel>
  );
};

const StyledHotel = styled.div`
  position: absolute; 
  top: 5vh;
  left: 0; 
  margin: 0;
  width: calc(100vw - 20px); 
  min-height: 100vh; 
  background: var(--background-gradient);
  overflow-x: auto; /* Para quitar el scroll en x */
`;

const RoomCard = styled(Card)`
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const OverlayContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 70vw;
  max-width: 1200px;
  display: flex;
  flex-direction: row; /* Cambiamos a row para alinear en fila */
  align-items: flex-start;
`;

const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px; /* Espacio entre imagen y la información */
flex: 1;

`;

const InfoContainer = styled.div`
  flex: 1;
  text-align: center; /* Alineamos el texto a la izquierda */
`;

const RoomSection = styled.div`
  margin-top: 20px;
`;
