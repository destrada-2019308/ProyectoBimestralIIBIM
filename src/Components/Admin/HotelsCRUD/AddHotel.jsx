import React, { useState, useEffect } from "react";
import { useAddHotel } from "../../../shared/hooks/Admin/Hotel/useAddHotel";
import toast from "react-hot-toast";
import './AddHotel.css'
import { useGetCategoriesH } from "../../../shared/hooks/Admin/CategoriesHotel/useGetCategoriesH";

export const AddHotel = ({ switchAuthAndler }) => {
  const { addHotel } = useAddHotel();
  const { getCategories, isLoading, categorieshotels } = useGetCategoriesH()

  useEffect(() => {
    getCategories()
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    city: '',
    address: '',
    phone: '',
    categoryHotel: '',
    imageHotel: '',
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
      imageHotel: file,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.name ||
      !formData.country ||
      !formData.city ||
      !formData.address ||
      !formData.phone ||
      !formData.categoryHotel
    ) {
      toast.error('Porfavor llena todos los campos');
      return;
    }
    await addHotel(
      formData.name,
      formData.country,
      formData.city,
      formData.address,
      formData.phone,
      formData.categoryHotel,
      formData.imageHotel
    );
  }

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      categoryHotel: value,
    }));
  };

  return (
    <div className="add-task-overlay">
      <div className="add-task-modal">
        <form className="form" onSubmit={handleRegister}>
          <h1 className="display-6">Form to add Hotel</h1>
          <br></br>

          <label htmlFor="name">Name hotel</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleValueChange(e, 'name')}
            />
          </div>

          <label htmlFor="country">Country</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="country"
              type="text"
              value={formData.country}
              onChange={(e) => handleValueChange(e, 'country')}
            />
          </div>

          <label htmlFor="city">City</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => handleValueChange(e, 'city')}
            />
          </div>

          <label htmlFor="address">Address</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => handleValueChange(e, 'address')}
            />
          </div>

          <label htmlFor="phone">Phone</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="phone"
              type="number"
              value={formData.phone}
              onChange={(e) => handleValueChange(e, 'phone')}
            />
          </div>

          <label htmlFor="categoryHotel">Catery Hotel</label>
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
                  key={`${categoryHotel._id}`}
                  value={categoryHotel._id}
                >
                  {categoryHotel.nameCategoryHotel}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="imageHotel">Images</label>
          <div className="input-group input-group-sm mb-3">
            <input
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="imageHotel"
              type="file"
              onChange={(e) => handleImageChange(e, 'imageHotel')}
            />
          </div>

          <br></br>
          <button type="submit" className="btn btn-dark">Add hotel</button>
        </form>
      </div>
    </div>
  )
}
