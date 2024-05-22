import React, { useState, useEffect } from "react";
import { useAddEvent } from "../../shared/hooks/AddiAndEvent/Events/useAddEvent";
import toast from "react-hot-toast";
import '../Events/AddEvent.css'
import { useGetAdditionals } from '../../shared/hooks/AddiAndEvent/Additionals/useGetAdditionals'
import { useGetHotels } from "../../../src/shared/hooks/Admin/Hotel/useGetHotels";

export const AddEvent = ({ switchAuthAndler }) => {
  const { addEvent } = useAddEvent();
  const { getAdditionals, additionals } = useGetAdditionals()
  const { getHotels, hotels } = useGetHotels()

  useEffect(() => {
    getAdditionals()
    getHotels()
  }, [])

  const [formData, setFormData] = useState({
    description: '',
    date: '',
    time: '',
    hotel: '',
    additional: ''
  });

  const handleValueChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !formData.description ||
      !formData.date ||
      !formData.time ||
      !formData.hotel ||
      !formData.additional) {
      toast.error('Porfavor llena todos los campos');
      return;
    }
    await addEvent(
      formData.description,
      formData.date,
      formData.time,
      formData.hotel,
      formData.additional
    );
  }

  const handleHotelChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      hotel: value,
    }));
  };

  const handleAdditiChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      additional: value,
    }));
  };

  return (
    <div className="add-task-overlay">
      <div className="add-task-modal">
        <form className="form" onSubmit={handleRegister}>
          <h1 className="display-6">Form to add Event</h1>
          <br></br>
          <label htmlFor="description">Description</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="description"
              type="text"
              value={formData.description}
              onChange={(e) => handleValueChange(e, 'description')}
            />
          </div>

          <label htmlFor="date">Date</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleValueChange(e, 'date')}
            />
          </div>

          <label htmlFor="time">Time</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="time"
              type="time"
              value={formData.time}
              onChange={(e) => handleValueChange(e, 'time')}
            />
          </div>

          <label htmlFor="hotel">Hotel</label>
          <div className="input-group input-group-sm mb-3">
            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
              id="hotel"
              value={formData.hotel}
              onChange={handleHotelChange}
            >
              <option value="000000000000">Asigne un hotel</option>
              {hotels.map((hotel) => (
                <option
                  key={`${hotel._id}`}
                  value={hotel._id}
                >
                  {hotel.name}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="additional">Additional</label>
          <div className="input-group input-group-sm mb-3">
            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
              id="additional"
              value={formData.additional}
              onChange={handleAdditiChange}
            >
              <option value="000000000000">Asigne una additional</option>
              {additionals.map((additional) => (
                <option
                  key={`${additional._id}`}
                  value={additional._id}
                >
                  {additional.description}
                </option>
              ))}
            </select>
          </div>

          <br></br>
          <button type="submit" className="btn btn-dark">Add Event</button>
        </form>
      </div>
    </div>
  )
}
