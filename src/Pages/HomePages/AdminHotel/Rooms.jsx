import React from 'react'
import { NavbarAdminHotel } from '../../../Components/AdminHotel/NavBarAdminHotel'
import { CrudRooms } from '../../../Components/AdminHotel/Room/CrudRooms'

export const Rooms = () => {
  return (
    <> 
        <NavbarAdminHotel/>
        <CrudRooms/>
    </>
  )
}
