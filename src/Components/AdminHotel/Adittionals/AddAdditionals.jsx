import React, { useState } from "react";
import { useAddAdditional } from '../../../shared/hooks/AddiAndEvent/Additionals/useAddAdditional'
import toast from "react-hot-toast";
import './AddAdditionals.css'

export const AddAdditionals = ({ switchAuthAndler }) => {
  const { addAdditional } = useAddAdditional();

  const [formData, setFormData] = useState({
    description: '',
    price: ''
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
    if (!formData.description || !formData.price) {
      toast.error('Porfavor llena todos los campos');
      return;
    }
    await addAdditional(formData.description, formData.price);
  }

  return (
    <div className="add-task-overlay">
      <div className="add-task-modal">
        <form className="form" onSubmit={handleRegister}>
          <h1 className="display-6">Form to add additional</h1>
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

          <label htmlFor="price">Price</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => handleValueChange(e, 'price')}
            />
          </div>

          <br></br>
          <button type="submit" className="btn btn-dark">Add additional</button>
        </form>
      </div>
    </div>
  )
}
