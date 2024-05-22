import { useEffect } from 'react';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import photo from '../../assets/img/HomeC.png';
import { useSearchRooms } from '../../shared/hooks/Client/useSearchRooms';
import { useReservation } from '../../shared/hooks/Client/useReservation';

export const Home = () => {
  const imagen = photo;

  const {
    search,
    city,
    setCity,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    people,
    setPeople,
    searchroom,
    availableRooms
  } = useSearchRooms();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("City:", city);
    console.log("Check-in:", checkIn);
    console.log("Check-out:", checkOut);
    console.log("People:", people);
    searchroom();
  };

  return (
    <StyledHome>
      <section className='home-main'>
        <div className="imagen-conte">
          <img src={imagen} alt="" className="imagen" />
          <div className="textin">
            <h1>ALGUNAS VECES SOLO</h1>
            <h1>NECESITAS VIAJAR</h1>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <select 
                    id="location" 
                    name="location" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="Peten">Peten</option>
                    <option value="Amatitlan">Amatitlan</option>
                    <option value="Ciudad de Guatemala">Ciudad de Guatemala</option>
                    <option value="Atitlan">Atitlan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="checkin">Check-in Date</label>
                  <input 
                    type="date" 
                    id="checkin" 
                    name="checkin" 
                    value={checkIn} 
                    onChange={(e) => setCheckIn(e.target.value)} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout">Check-out Date</label>
                  <input 
                    type="date" 
                    id="checkout" 
                    name="checkout" 
                    value={checkOut} 
                    onChange={(e) => setCheckOut(e.target.value)} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="people">Number of People</label>
                  <input 
                    type="number" 
                    id="people" 
                    name="people" 
                    value={people} 
                    onChange={(e) => setPeople(parseInt(e.target.value, 10))} 
                    min="1" 
                    required 
                  />
                </div>
                <button type="submit" disabled={search}>
                  {search ? "Searching..." : "Search"}
                </button>
              </form>              
            </div>
            <RoomDivision availableRooms={availableRooms} checkIn={checkIn} checkOut={checkOut} people={people} />
          </div>
        </div>
      </section>
      
    </StyledHome>
  );
}

const RoomDivision = ({ availableRooms, checkIn, checkOut, people }) => {
  const { reserve, loading } = useReservation();

  const handleReserve = async (room) => {
    const reserveData = {
      hotel: room.hotel._id,
      rooms: [room._id],
      checkInDate: checkIn,
      checkOutDate: checkOut,
      numberOfGuests: people,
    };

    console.log("Datos de reserva enviados:", reserveData);

    await reserve(reserveData);
  };

  return (
    <StyledRoomDivision>
      {availableRooms.length > 0 && (
        <div>
          <h2>Available Rooms</h2>
          <ul className="list-unstyled row">
            {availableRooms.map((room) => (
              <li key={room._id} className="col-md-6 mb-3">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img src={room.imagesRoom[0]} alt={`${room.categoryRoom.nameCategoryRoom}`} className="img-fluid rounded" />
                  </div>
                  <div className="col-md-6">
                    <div className="room-info">
                      <h3>{room.hotel.name}</h3>
                      <p>Amenities: {room.amenities}</p>
                      <p>Beds: {room.beds}</p>
                      <p>Price: Q{room.price}</p>
                      <button className="btn btn-primary" onClick={() => handleReserve(room)} disabled={loading}>
                        {loading ? "Reserving..." : "Reserve"}
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </StyledRoomDivision>
  );
};

const StyledHome = styled.div`
  position: absolute;
  top: 5vh;
  left: 0;
  margin: 0;
  width: calc(100vw - 15px);
  height: 80%; 
  background: var(--background-gradient);

  .home-main {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imagen-conte {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;  
    flex-wrap: wrap;
  }

  .textin {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-family: var(--text-font);
    color: var(--first-color);
    margin: 0;
    font-size: 45px;
    font-weight: 800;
  }

  .form-container {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    width: 100%;
    max-width: 820px;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  .form-group {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  label {
    font-family: var(--text-font);
    color: var(--first-color);
    margin-bottom: 0.5rem;
    display: block;
  }

  select,
  input {
    width: 150px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  button {
    background-color: var(--first-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #6ab04c;
  }

  img.imagen {
    width: 100%;
    max-width: 500px;
    height: auto;
    margin-right: 18vh; 
    border-radius: 10px;
  }

  @media (max-width: 1300px) {
    .imagen-conte {
      justify-content: flex-end; 
    }

    img.imagen {
      margin-right: 0; 
    }

    .textin {
      align-items: center; 
    }
  }
`;

const StyledRoomDivision = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 100%;
  max-width: 820px;
  text-align: center;
`;