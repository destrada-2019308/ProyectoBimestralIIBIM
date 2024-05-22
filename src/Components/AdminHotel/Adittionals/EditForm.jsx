import React, { useState, useEffect } from 'react'
import './EditForm.css'
import cancelBtn from '../../../../src/assets/img/cancelar.png'
import { useUpdateAdditional } from '../../../shared/hooks/AddiAndEvent/Additionals/useUpdateAdditional'
import { useGetAdditionals } from '../../../shared/hooks/AddiAndEvent/Additionals/useGetAdditionals'

export const EditForm = ({ additional, onClose }) => {
  const { updateAdditional } = useUpdateAdditional()
  const { getAdditionals } = useGetAdditionals()

  const [formData, setFormData] = useState({
    description: additional.description,
    price: additional.price
  })

  useEffect(() => {
    setFormData({
      description: additional.description,
      price: additional.price
    });
    getAdditionals();
  }, [additional]);


  const handleValueChange = (e, fieldName) => {
    const { value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }

  const handleEdit = (e) => {
    e.preventDefault()
    updateAdditional(additional._id, formData)
  }

  return (
    <div className="edit-task-overlay">
      <div className="edit-task-modal">
        <div className="modal-header">
          <img src={cancelBtn} className="close-btn" onClick={onClose}></img>
        </div>
        <form className="form" onSubmit={handleEdit}>
          <h1 class="display-6">Form to edit additional</h1>
          <br></br>
          <label htmlFor="description">Description</label>
          <div class="input-group input-group-sm mb-3">
            <input
              class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="description"
              type="text"
              value={formData.description}
              required
              onChange={(e) => handleValueChange(e, 'description')}
            />
          </div>

          <label htmlFor="price">Price</label>
          <div class="input-group input-group-sm mb-3">
            <input
              class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="price"
              type="number"
              required
              value={formData.price}
              onChange={(e) => handleValueChange(e, 'price')}
            />
          </div>

          <br></br>
          <button type="submit" class="btn btn-dark">Edit additional</button>
        </form>
      </div>
    </div>
  )
}
