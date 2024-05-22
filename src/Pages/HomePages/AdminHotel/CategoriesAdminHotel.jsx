import React from 'react'
import { NavbarAdminHotel } from '../../../Components/AdminHotel/NavBarAdminHotel'
import { CrudCategoriesRoom } from '../../../Components/AdminHotel/CategoriesRoom/CrudCategoriesRoom'

export const CategoriesAdminHotel = () => {
  return (
    <>
        <NavbarAdminHotel/>
        <CrudCategoriesRoom/>
    </>
  )
}
