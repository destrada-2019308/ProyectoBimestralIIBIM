import React, { useState, useEffect } from 'react';
import './EditForm.css';
import cancelBtn from '../../../src/assets/img/cancelar.png';
import { useUpdateEvent } from '../../shared/hooks/AddiAndEvent/Events/useUpdateEvent.jsx';
import { useGetAdditionals } from '../../shared/hooks/AddiAndEvent/Additionals/useGetAdditionals';
import { useGetHotels } from "../../../src/shared/hooks/Admin/Hotel/useGetHotels";
import { useGetEvents } from '../../shared/hooks/AddiAndEvent/Events/useGetEvents.jsx';
import toast from "react-hot-toast";

export const EditForm = ({ event, onClose }) => {
  const { updateEvent, isFetching } = useUpdateEvent();
  const { getEvents } = useGetEvents();
  const { getAdditionals, additionals } = useGetAdditionals();
  const { getHotels, hotels } = useGetHotels();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState({
    description: event.description,
    date: formatDate(event.date),
    time: event.time,
    event: event.event,
    hotel: event.hotel ? event.hotel._id : '',
    additional: event.additional ? event.additional._id : '',
  });

  useEffect(() => {
    setFormData({
      description: event.description,
      date: formatDate(event.date),
      time: event.time,
      event: event.event,
      hotel: event.hotel ? event.hotel._id : '',
      additional: event.additional ? event.additional._id : '',
    });
    getEvents();
    getHotels();
    getAdditionals();
  }, [event]);

  const handleValueChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

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

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(event._id, formData);
      onClose();
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div className="edit-task-overlay">
      <div className="edit-task-modal">
        <div className="modal-header">
          <img src={cancelBtn} className="close-btn" onClick={onClose} alt="close button" />
        </div>
        <form className="form" onSubmit={handleEdit}>
          <h1 className="display-6">Form to edit event</h1>
          <br />
          <label htmlFor="description">Description</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              id="description"
              type="text"
              value={formData.description}
              required
              onChange={(e) => handleValueChange(e, 'description')}
            />
          </div>

          <label htmlFor="date">Date</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              id="date"
              type="date"
              required
              value={formData.date}
              onChange={(e) => handleValueChange(e, 'date')}
            />
          </div>

          <label htmlFor="time">Time</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
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
                  key={hotel._id}
                  value={hotel._id}
                >
                  {hotel.name}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="additional">Additionals</label>
          <div className="input-group input-group-sm mb-3">
            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
              id="additional"
              value={formData.additional}
              onChange={handleAdditiChange}
            >
              <option value="000000000000">Asigne un additional</option>
              {additionals.map((additional) => (
                <option
                  key={additional._id}
                  value={additional._id}
                >
                  {additional.description}
                </option>
              ))}
            </select>
          </div>
          <br />
          <button type="submit" className="btn btn-dark" disabled={isFetching}>
            {isFetching ? 'Updating...' : 'Edit Event'}
          </button>
        </form>
      </div>
    </div>
  );
};
