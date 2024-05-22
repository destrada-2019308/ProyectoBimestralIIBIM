import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CrudAditionals.css'
import editIcon from "../../../assets/img/editIcon.png"
import trashIcon from "../../../assets/img/eliminar.png"
import { useGetAdditionals } from '../../../shared/hooks/AddiAndEvent/Additionals/useGetAdditionals'
import { AddAdditionals } from './AddAdditionals'
import { useDeleteAdditional } from '../../../shared/hooks/AddiAndEvent/Additionals/useDeleteAdditional'
import { ConfirmDelete } from './ConfirmDelete'
import { EditForm } from "./EditForm";

export const CrudAdittionals = () => {
    const { getAdditionals, isLoading, additionals } = useGetAdditionals()
    const [selectedAdditional, setSelectetAdditional] = useState(null)
    const { deleteAdditional } = useDeleteAdditional()
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    useEffect(() => {
        getAdditionals()
    }, [])

    const openDelConfirm = (additional) => {
        setSelectetAdditional(additional)
        setShowConfirmDelete(true)
    }

    const confirmDelete = () => {
        if (selectedAdditional) {
            deleteAdditional(selectedAdditional._id)
            setSelectetAdditional(null)
            setShowConfirmDelete(false)
            getAdditionals()
        }
    }

    const cancelDelete = () => {
        setSelectetAdditional(null)
        setShowConfirmDelete(false)
    }

    const openEditForm = (additional) => {
        setSelectetAdditional(additional)
        setShowEditForm(true)
        getAdditionals()
    }

    const closeEditForm = () => {
        setSelectetAdditional(null)
        setShowEditForm(false)
        getAdditionals()
    }

    return (
        <div className="container">
            <div className="cont">
                <AddAdditionals></AddAdditionals>
                <br></br>
                <div className="scroll-table">
                    {isLoading ? (
                        <p>Cargando additionals...</p>
                    ) : (
                        <>
                            {showConfirmDelete && <ConfirmDelete onDelete={confirmDelete} onCancel={cancelDelete} />}
                            {showEditForm && <EditForm additional={selectedAdditional} onClose={closeEditForm} />}    
                            <table className="table table-hover table-success">
                                <thead>
                                    <tr>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {additionals.map((additional, index) => (
                                        <tr key={index}>
                                            <td>{additional.description}</td>
                                            <td>{additional.price}</td>
                                            <td>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <img
                                                        src={editIcon}
                                                        alt="Editar"
                                                        style={{ cursor: 'pointer', width: '20px', marginRight: '20%' }}
                                                        onClick={() => openEditForm(additional)}
                                                    />
                                                    <img
                                                        src={trashIcon}
                                                        alt="Eliminar"
                                                        style={{ cursor: 'pointer', width: '20px' }}
                                                        onClick={() => openDelConfirm(additional)}
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
            </div>
        </div>
    )
}
