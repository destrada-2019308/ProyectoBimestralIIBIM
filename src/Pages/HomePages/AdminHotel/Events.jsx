import React from 'react'
import { CrudEvents } from '../../../Components/Events/CrudEvents'
import { NavbarAdminHotel } from '../../../Components/AdminHotel/NavBarAdminHotel'

export const Events = () => {
  return (
    <div>
      <NavbarAdminHotel></NavbarAdminHotel>
        CRUD EVENTS
        <CrudEvents></CrudEvents>
    </div>
  )
}
