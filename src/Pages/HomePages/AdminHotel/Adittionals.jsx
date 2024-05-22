import React from 'react'
import { CrudAdittionals } from "../../../Components/AdminHotel/Adittionals/CrudAdittionals"
import { NavbarAdminHotel } from '../../../Components/AdminHotel/NavBarAdminHotel'

export const Adittionals = () => {
  return (
    <div>
      <NavbarAdminHotel></NavbarAdminHotel>
      <h1 style={{ color: 'black' }}>
        Crud adittionals
      </h1>
      <CrudAdittionals></CrudAdittionals>
    </div>
  )
}
