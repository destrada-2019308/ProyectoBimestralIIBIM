import React from 'react'
import { NavbarAdmin } from '../../../Components/Admin/NavbarAdmin'
import { EditUserAdmin } from '../../../Components/Admin/User/EditUserAdmin'

export const AdminProfile = () => {
  return (
    <div>
        <NavbarAdmin></NavbarAdmin>
        <EditUserAdmin></EditUserAdmin>
    </div>
  )
}