import React, { useState, useEffect } from 'react';
import './EditForm.css';
import cancelBtn from '../../../../src/assets/img/cancelar.png';
import { useUpdateCategoryRoom } from "../../../shared/hooks/AdminHotel/CategoriesRooms/useUpdateCategoryRoom";
import { useGetCategoriesR } from '../../../shared/hooks/AdminHotel/CategoriesRooms/useGetCategoriesR';

export const EditForm = ({ category, onClose }) => {
  const { updateCategory } = useUpdateCategoryRoom();
  const { getCategories } = useGetCategoriesR()

  const [formData, setFormData] = useState({
    nameCategoryRoom: category.nameCategoryRoom || '',
    descriptionCategoryRoom: category.descriptionCategoryRoom || ''
  });

  useEffect(() => {
    setFormData({
      nameCategoryRoom: category.nameCategoryRoom || '',
      descriptionCategoryRoom: category.descriptionCategoryRoom || ''
    });
    getCategories()
  }, [category]);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await updateCategory(category._id, formData);
    onClose(); // Close the form after editing
  };

  return (
    <div className="edit-task-overlay">
      <div className="edit-task-modal">
        <div className="modal-header">
          <img src={cancelBtn} className="close-btn" onClick={onClose} alt="Cancel" />
        </div>
        <form className="form" onSubmit={handleEdit}>
          <h1 className="display-6">Form to edit category</h1>
          <br />
          <label htmlFor="nameCategoryRoom">Name category</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              id="nameCategoryRoom"
              name="nameCategoryRoom"
              type="text"
              value={formData.nameCategoryRoom}
              required
              onChange={handleValueChange}
            />
          </div>

          <label htmlFor="descriptionCategoryRoom">Description</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              id="descriptionCategoryRoom"
              name="descriptionCategoryRoom"
              type="text"
              required
              value={formData.descriptionCategoryRoom}
              onChange={handleValueChange}
            />
          </div>

          <br />
          <button type="submit" className="btn btn-dark">Edit category</button>
        </form>
      </div>
    </div>
  );
};
