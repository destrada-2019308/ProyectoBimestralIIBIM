import React, { useState, useEffect } from 'react'
import '../Admin/EditForm.css'
import cancelBtn from '../../../src/assets/img/cancelar.png'
import { useUpdateUser } from '../../shared/hooks/Admin/Users/useUpdateUser.jsx'
import { useGetUsers } from '../../shared/hooks/Admin/Users/useGetUsers.jsx'
import { useGetHotels } from '../../shared/hooks/Admin/Hotel/useGetHotels.jsx'

export const EditForm = ({ user, onClose }) => {
  const { updateUser } = useUpdateUser()
  const { getUsers } = useGetUsers()
  const { getHotels, isLoading, hotels } = useGetHotels()

  const [formData, setFormData] = useState({
    nameUser: user.nameUser,
    surname: user.surname,
    username: user.username,
    email: user.email,
    phone: user.phone,
    hotel: user.hotel,
    imagesUser: user.imagesUser
  })

  useEffect(() => {
    setFormData({
      nameUser: user.nameUser,
      surname: user.surname,
      username: user.username,
      email: user.email,
      phone: user.phone,
      hotel: user.hotel ? user.hotel._id : '',
      imagesUser: user.imagesUser
    }),
      getUsers()
    getHotels()
  }, [user])

  const handleValueChange = (e, fieldName) => {
    const { value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }

  const handleHotelChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      hotel: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault()
    updateUser(user._id, formData)
  }

  return (
    <div className="edit-task-overlay">
      <div className="edit-task-modal">
        <div className="modal-header">
          <img src={cancelBtn} className="close-btn" onClick={onClose}></img>
        </div>
        <form className="form" onSubmit={handleEdit}>
          <h1 class="display-6">Form to edit user</h1>
          <br></br>
          <label htmlFor="nameUser">Name user</label>
          <div class="input-group input-group-sm mb-3">
            <input
              class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="nameUser"
              type="text"
              value={formData.nameUser}
              required
              onChange={(e) => handleValueChange(e, 'nameUser')}
            />
          </div>

          <label htmlFor="surname">Surname</label>
          <div class="input-group input-group-sm mb-3">
            <input
              class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="surname"
              type="text"
              required
              value={formData.surname}
              onChange={(e) => handleValueChange(e, 'surname')}
            />
          </div>


          <label htmlFor="username">Username</label>
          <div class="input-group input-group-sm mb-3">
            <input
              class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => handleValueChange(e, 'username')}
            />
          </div>


          <label htmlFor="email">Email</label>
          <div class="input-group input-group-sm mb-3">
            <input
              class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="email"
              type="text"
              value={formData.email}
              onChange={(e) => handleValueChange(e, 'email')}
            />
          </div>


          <label htmlFor="phone">Phone</label>
          <div class="input-group input-group-sm mb-3">
            <input
              class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              id="phone"
              type="text"
              value={formData.phone}
              onChange={(e) => handleValueChange(e, 'phone')}
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
                  key={`${hotel._id}`}
                  value={hotel._id}
                >
                  {hotel.name} - {hotel.address}
                </option>
              ))}
            </select>
          </div>
          <br></br>
          <button type="submit" class="btn btn-dark">Edit User</button>
        </form>
      </div>
    </div>
  )
}
