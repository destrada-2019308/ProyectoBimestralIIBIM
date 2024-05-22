import React from 'react'
import { NavbarAdmin } from '../../../Components/Admin/NavbarAdmin'
import { CrudHotels } from '../../../Components/Admin/HotelsCRUD/CrudHotels'
import { AddHotel } from '../../../Components/Admin/HotelsCRUD/AddHotel'

export const AdminHotels = () => {
  return (
    <div>
      <br></br>
      <NavbarAdmin></NavbarAdmin>
      <CrudHotels></CrudHotels>
    </div>
  )
}
