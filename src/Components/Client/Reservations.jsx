import styled from "styled-components"

export const Reservations = ({ reservations }) => {
    return (
      <StyledReservation>
      
      <div className="container">
        <h2>Reservations</h2>
        <div className="row">
          <div className="col">
            <strong>User Name</strong>
          </div>
          <div className="col">
            <strong>Hotel Name</strong>
          </div>
          <div className="col">
            <strong>Check-In Date</strong>
          </div>
          <div className="col">
            <strong>Check-Out Date</strong>
          </div>
          <div className="col">
            <strong>Total</strong>
          </div>
          <div className="col">
            <strong>Status</strong>
          </div>
        </div>
        {reservations && reservations.map((reservation, index) => (
          <div className="row" key={index}>
            <div className="col">{reservation.nameUser}</div>
            <div className="col">{reservation.hotelName}</div>
            <div className="col">{reservation.checkIn}</div>
            <div className="col">{reservation.checkOut}</div>
            <div className="col">{reservation.total}</div>
            <div className="col">{reservation.status}</div>
          </div>
        ))}
      </div>
      </StyledReservation>
    );
  };

  const StyledReservation = styled.div`
  position: absolute; 
  top: 5vh;
  left: 0; 
  margin: 0;
  width: calc(100vw - 15px); 
  height: 80%; 
  background: var(--background-gradient);
  overflow-x: auto; /* Para quitar el scroll en x */
`;