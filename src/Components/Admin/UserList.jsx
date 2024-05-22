import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useGetUsers } from '../../shared/hooks/Admin/Users/useGetUsers'
import editIcon from "../../assets/img/editIcon.png"
import trashIcon from '../../../src/assets/img/eliminar.png'
import { useDeleteUser } from '../../shared/hooks/Admin/Users/useDeleteUser'
import { ConfirmDelete } from './ConfirmDelete'
import { EditForm } from './EditForm'
import { useUpdateRole } from '../../shared/hooks/Admin/Users/useUpdateRole'

export const UserList = () => {
    const { getUsers, isLoading, users } = useGetUsers()
    const [selectedUser, setSelectedUser] = useState(null)
    const { deleteUser } = useDeleteUser()
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const { updateRole } = useUpdateRole()

    useEffect(() => {
        getUsers()
    }, [])

    const getColor = (role) => {
        switch (role) {
            case 'ADMINHOTEL':
                return 'red'
            case 'CLIENT':
                return 'green'
            default:
                return 'black'
        }
    }

    //Configuracion de ventana de confirmacion para eliminar usuario
    const openDelConfirm = (user) => {
        setSelectedUser(user)
        setShowConfirmDelete(true)
        getUsers()
    }

    const confirmDelete = () => {
        if (selectedUser) {
            deleteUser(selectedUser._id)
            getUsers()
            setSelectedUser(null)
            setShowConfirmDelete(false)
        }
    }

    const cancelDelete = () => {
        setSelectedUser(null)
        setShowConfirmDelete(false)
        getUsers()
    }
    //Configuracion de ventana de confirmacion para eliminar usuario

    //Configuracion de form para editar usuario
    const openEditForm = (user) => {
        console.log(user)
        setSelectedUser(user)
        setShowEditForm(true)
        getUsers()
    }

    const closeEditForm = () => {
        setSelectedUser(null)
        setShowEditForm(false)
        getUsers()
    }
    //Configuracion de form para editar usuario

    //Editar role
    const handleCheckboxChange = (user) => {
        updateRole(user.username)
    }

    //Editar role

    return (
        <div className="container">
            {isLoading ? (
                <p>Cargando usuarios...</p>
            ) : (
                <>
                    {showConfirmDelete && <ConfirmDelete onDelete={confirmDelete} onCancel={cancelDelete} />}
                    {showEditForm && <EditForm user={selectedUser} onClose={closeEditForm} />}
                    <table className="table table-hover table-success">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Role</th>
                                <th scope="col">Hotel</th>
                                <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.nameUser}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <select
                                            style={{ color: getColor(user.role) }}
                                            className="form-select form-select-sm bg-transparent"
                                            aria-label="Role select"
                                            value={user.role}
                                            onChange={() => handleCheckboxChange(user)}
                                        >
                                            <option value="" disabled>Seleccione un rol</option>
                                            <option style={{ color: 'green' }} value="CLIENT">CLIENT</option>
                                            <option style={{ color: 'red' }} value="ADMINHOTEL">ADMINHOTEL</option>
                                        </select>
                                    </td>

                                    <td>{user.hotel && user.hotel.name}</td>

                                    <td>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <img
                                                src={editIcon}
                                                alt="Editar"
                                                style={{ cursor: 'pointer', width: '20px', marginRight: '20%' }}
                                                onClick={() => openEditForm(user)}
                                            />
                                            <img
                                                src={trashIcon}
                                                alt="Eliminar"
                                                style={{ cursor: 'pointer', width: '20px' }}
                                                onClick={() => openDelConfirm(user)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}
