import React, { useState, useEffect } from 'react';
import './EditForm.css';
import cancelBtn from '../../../../src/assets/img/cancelar.png';
import { useUpdateHotel } from '../../../shared/hooks/Admin/Hotel/useUpdateHotel.jsx';
import { useGetHotels } from '../../../shared/hooks/Admin/Hotel/useGetHotels.jsx';
import { useGetCategoriesH } from "../../../shared/hooks/Admin/CategoriesHotel/useGetCategoriesH";

export const EditForm = ({ hotel, onClose }) => {
  const { updateHotel, isLoading } = useUpdateHotel();
  const { getHotels } = useGetHotels();
  const { getCategories, categorieshotels } = useGetCategoriesH();

  const [formData, setFormData] = useState({
    name: hotel.name,
    country: hotel.country,
    city: hotel.city,
    address: hotel.address,
    phone: hotel.phone,
    categoryHotel: hotel.categoryHotel ? hotel.categoryHotel._id : '',
    imageHotel: null
  });

  useEffect(() => {
    setFormData({
      name: hotel.name,
      country: hotel.country,
      city: hotel.city,
      address: hotel.address,
      phone: hotel.phone,
      categoryHotel: hotel.categoryHotel ? hotel.categoryHotel._id : '',
      imageHotel: null
    });
    getHotels();
    getCategories();
  }, [hotel]);

  const handleValueChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      categoryHotel: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      imageHotel: file,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateHotel(hotel._id, formData);
  };

  return (
    <div className="edit-task-overlay">
      <div className="edit-task-modal">
        <div className="modal-header">
          <img src={cancelBtn} className="close-btn" onClick={onClose} alt="close button"/>
        </div>
        <form className="form" onSubmit={handleEdit}>
          <h1 className="display-6">Form to edit hotel</h1>
          <br />
          <label htmlFor="name">Name hotel</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              id="name"
              type="text"
              value={formData.name}
              required
              onChange={(e) => handleValueChange(e, 'name')}
            />
          </div>

          <label htmlFor="country">Country</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              id="country"
              type="text"
              required
              value={formData.country}
              onChange={(e) => handleValueChange(e, 'country')}
            />
          </div>

          <label htmlFor="city">City</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => handleValueChange(e, 'city')}
            />
          </div>

          <label htmlFor="address">Address</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => handleValueChange(e, 'address')}
            />
          </div>

          <label htmlFor="phone">Phone</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              id="phone"
              type="number"
              value={formData.phone}
              onChange={(e) => handleValueChange(e, 'phone')}
            />
          </div>

          <label htmlFor="categoryHotel">Category hotel</label>
          <div className="input-group input-group-sm mb-3">
            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
              id="categoryHotel"
              value={formData.categoryHotel}
              onChange={handleCategoryChange}
            >
              <option value="000000000000">Asigne una categoria</option>
              {categorieshotels.map((categoryHotel) => (
                <option
                  key={categoryHotel._id}
                  value={categoryHotel._id}
                >
                  {categoryHotel.nameCategoryHotel}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="imageHotel" className="form-label">Image Route</label>
            <input
              type="file"
              className="form-control"
              id="imageHotel"
              onChange={handleImageChange}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-dark" disabled={isLoading}>
            {isLoading ? 'Updating...' : 'Edit Hotel'}
          </button>
        </form>
      </div>
    </div>
  );
}
