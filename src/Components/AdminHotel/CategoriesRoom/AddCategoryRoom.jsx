import React, { useState } from "react";
import { useAddCategoryRoom } from '../../../shared/hooks/AdminHotel/CategoriesRooms/useAddCategoryRoom'
import toast from "react-hot-toast";
import './AddCategoryRoom.css'

export const AddCategoryRoom = ({ switchAuthAndler }) => {
  const { addCategoryRoom } = useAddCategoryRoom();

  const [formData, setFormData] = useState({
    nameCategoryRoom: '',
    descriptionCategoryRoom: ''
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
    if (!formData.nameCategoryRoom || !formData.descriptionCategoryRoom) {
      toast.error('Porfavor llena todos los campos');
      return;
    }
    await addCategoryRoom(formData.nameCategoryRoom, formData.descriptionCategoryRoom);
  }

  return (
    <div className="add-task-overlay">
      <div className="add-task-modal">
        <form className="form" onSubmit={handleRegister}>
          <h1 className="display-6">Form to add category</h1>
          <br></br>
          <label htmlFor="nameCategoryRoom">Name category</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="nameCategoryRoom"
              type="text"
              value={formData.nameCategoryRoom}
              onChange={(e) => handleValueChange(e, 'nameCategoryRoom')}
            />
          </div>

          <label htmlFor="descriptionCategoryRoom">Description</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="descriptionCategoryRoom"
              type="text"
              value={formData.descriptionCategoryRoom}
              onChange={(e) => handleValueChange(e, 'descriptionCategoryRoom')}
            />
          </div>

          <br></br>
          <button type="submit" className="btn btn-dark">Add category</button>
        </form>
      </div>
    </div>
  )
}
