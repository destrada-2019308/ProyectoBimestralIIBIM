import React from 'react'
import { NavbarAdmin } from '../../../Components/Admin/NavbarAdmin'
import { UserList } from '../../../Components/Admin/UserList'

export const AdminUsers = () => {
  return (
    <div>
        <NavbarAdmin></NavbarAdmin>
        <h1>Control de usuarios</h1>
        <UserList />
    </div>
  )
}