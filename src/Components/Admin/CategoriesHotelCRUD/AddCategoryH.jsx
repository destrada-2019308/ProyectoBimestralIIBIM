import React, { useState } from "react";
import { useAddCategoryH } from '../../../shared/hooks/Admin/CategoriesHotel/useAddCategoryH';
import toast from "react-hot-toast";
import './AddCategoryH.css'

export const AddCategoryH = ({ switchAuthAndler }) => {
  const { addCategoryH } = useAddCategoryH();

  const [formData, setFormData] = useState({
    nameCategoryHotel: '',
    descriptionCategoryHotel: ''
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
    if (!formData.nameCategoryHotel || !formData.descriptionCategoryHotel) {
      toast.error('Porfavor llena todos los campos');
      return;
    }
    await addCategoryH(formData.nameCategoryHotel, formData.descriptionCategoryHotel);
  }

  return (
    <div className="add-task-overlay">
      <div className="add-task-modal">
        <form className="form" onSubmit={handleRegister}>
          <h1 className="display-6">Form to add category</h1>
          <br></br>
          <label htmlFor="nameCategoryHotel">Name category</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="nameCategoryHotel"
              type="text"
              value={formData.nameCategoryHotel}
              onChange={(e) => handleValueChange(e, 'nameCategoryHotel')}
            />
          </div>

          <label htmlFor="descriptionCategoryHotel">Description</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="descriptionCategoryHotel"
              type="text"
              value={formData.descriptionCategoryHotel}
              onChange={(e) => handleValueChange(e, 'descriptionCategoryHotel')}
            />
          </div>

          <br></br>
          <button type="submit" className="btn btn-dark">Add category</button>
        </form>
      </div>
    </div>
  )
}
