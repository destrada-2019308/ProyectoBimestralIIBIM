import React, { useState, useEffect } from 'react'
import './EditForm.css'
import cancelBtn from '../../../../src/assets/img/cancelar.png'
import { useUpdateCategoryH } from "../../../shared/hooks/Admin/CategoriesHotel/useUpdateCategoryH";
import { useGetCategoriesH } from '../../../shared/hooks/Admin/CategoriesHotel/useGetCategoriesH';

export const EditForm = ({ categoryhotels, onClose }) => {
  const { updateCategory } = useUpdateCategoryH()
  const { getCategories } = useGetCategoriesH()

  const [formData, setFormData] = useState({
    nameCategoryHotel: categoryhotels.nameCategoryHotel,
    descriptionCategoryHotel: categoryhotels.descriptionCategoryHotel
  })

  useEffect(() => {
    console.log("Category Hotels:", categoryhotels); // Agrega este console.log para verificar los datos
    setFormData({
      nameCategoryHotel: categoryhotels.nameCategoryHotel,
      descriptionCategoryHotel: categoryhotels.descriptionCategoryHotel
    });
    getCategories();
  }, [categoryhotels]);
  

  const handleValueChange = (e, fieldName) => {
    const { value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }

  const handleEdit = (e) => {
    e.preventDefault()
    updateCategory(categoryhotels._id, formData)
  }

  return (
    <div className="edit-task-overlay">
      <div className="edit-task-modal">
        <div className="modal-header">
          <img src={cancelBtn} className="close-btn" onClick={onClose}></img>
        </div>
        <form className="form" onSubmit={handleEdit}>
          <h1 class="display-6">Form to edit category</h1>
          <br></br>
          <label htmlFor="nameCategoryHotel">Name category</label>
          <div class="input-group input-group-sm mb-3">
            <input
              class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="nameCategoryHotel"
              type="text"
              value={formData.nameCategoryHotel}
              required
              onChange={(e) => handleValueChange(e, 'nameCategoryHotel')}
            />
          </div>

          <label htmlFor="descriptionCategoryHotel">Description</label>
          <div class="input-group input-group-sm mb-3">
            <input
              class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="descriptionCategoryHotel"
              type="text"
              required
              value={formData.descriptionCategoryHotel}
              onChange={(e) => handleValueChange(e, 'descriptionCategoryHotel')}
            />
          </div>

          <br></br>
          <button type="submit" class="btn btn-dark">Edit category</button>
        </form>
      </div>
    </div>
  )
}
