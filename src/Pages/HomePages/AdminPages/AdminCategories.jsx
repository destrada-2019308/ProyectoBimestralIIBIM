import React from 'react'
import { NavbarAdmin } from '../../../Components/Admin/NavbarAdmin'
import { CrudCategoriesH } from '../../../Components/Admin/CategoriesHotelCRUD/CrudCategoriesH'

export const AdminCategories = () => {
  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <h1>CRUD CATEGORIES HOTEL</h1>
      <CrudCategoriesH></CrudCategoriesH>
    </div>
  )
}