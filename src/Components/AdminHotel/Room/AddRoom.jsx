import React, { useState, useEffect } from "react";
import { useAddRoom } from './../../../shared/hooks/AdminHotel/CrudRooms/useAddRoom';
import { useGetCategoriesR } from "../../../shared/hooks/AdminHotel/CategoriesRooms/useGetCategoriesR";
import toast from "react-hot-toast";
import './AddRoom.css';

export const AddRoom = ({ switchAuthAndler }) => {
  const { addRoom } = useAddRoom();
  const { getCategories, isLoading, categoriesRooms } = useGetCategoriesR()

  useEffect(() => {
    getCategories()
  }, [])

  const [formData, setFormData] = useState({
    description: '',
      beds: '',
      amountOfPeople: '',
      amenities: '',
      price: '',
      hotel: '',
      status: 'AVAILABLE',
      categoryRoom: '',
      imagesRoom: ''
  });

  const handleValueChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      imagesRoom: file,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.description ||
      !formData.beds ||
      !formData.amountOfPeople ||
      !formData.amenities ||
      !formData.price 
    ) {
      toast.error('Porfavor llena todos los campos');
      return;
    }
    await addRoom(
      formData.description,
      formData.beds,
      formData.amountOfPeople,
      formData.amenities,
      formData.price,
      formData.status,
      formData.hotel,
      formData.categoryRoom,
      formData.imagesRoom
    );
  }
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      categoryRoom: value,
    }));
  };

  return (
    <div className="add-task-overlay">
      <div className="add-task-modal">
        <form className="form" onSubmit={handleRegister}>
          <h1 className="display-6">Form to add Room</h1>
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
      
          <label htmlFor="beds">beds</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="beds"
              type="number"
              value={formData.beds}
              onChange={(e) => handleValueChange(e, 'beds')}
            />
          </div>
     
          <label htmlFor="amountOfPeople">amountOfPeople</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="amountOfPeople"
              type="number"
              value={formData.amountOfPeople}
              onChange={(e) => handleValueChange(e, 'amountOfPeople')}
            />
          </div>
      
          <label htmlFor="address">amenities</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="amenities"
              type="text"
              value={formData.amenities}
              onChange={(e) => handleValueChange(e, 'amenities')}
            />
          </div>
      
          <label htmlFor="price">price</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => handleValueChange(e, 'price')}
            />
          </div>
          
          <label htmlFor="categoryRoom">Catery Room</label>
          <div className="input-group input-group-sm mb-3">
            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
              id="categoryRoom"
              value={formData.categoryRoom}
              onChange={handleCategoryChange}
            >
              <option value="000000000000">Asigne un categoryRoom</option>
              {categoriesRooms.map((categoryRoom) => (
                <option
                  key={`${categoryRoom._id}`}
                  value={categoryRoom._id}
                >
                  {categoryRoom.nameCategoryRoom}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor="hotel">hotel</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="hotel"
              type="text"
              value={formData.hotel}
              onChange={(e) => handleValueChange(e, 'hotel')}
            />
          </div>
          <label htmlFor="imagesRoom">imagesRoom</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="imagesRoom"
              type="text"
              value={formData.imagesRoom}
              onChange={(e) => handleValueChange(e, 'imagesRoom')}
            />
          </div>

          <br></br>
          <button type="submit" className="btn btn-dark">Add hotel</button>
        </form>
      </div>
    </div>
  )
}
