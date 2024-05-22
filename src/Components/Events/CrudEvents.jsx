import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CrudEvents.css'
import editIcon from '../../../src/assets/img/editIcon.png'
import trashIcon from '../../../src/assets/img/eliminar.png'
import { useGetEvents } from '../../shared/hooks/AddiAndEvent/Events/useGetEvents'
import { AddEvent } from './AddEvent'
import { ConfirmDelete } from './ConfirmDelete'
import { useDeleteEvent } from '../../shared/hooks/AddiAndEvent/Events/useDeleteEvent'
import { EditForm } from "./EditForm";

export const CrudEvents = () => {
    const { getEvents, isLoading, events } = useGetEvents()
    const [selectedEvent, setSelectedEvent] = useState(null)
    const { deleteEvent } = useDeleteEvent()
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    useEffect(() => {
        getEvents()
    }, [])
    
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const isoDate = date.toISOString().split('T')[0]
        const isoDateParts = isoDate.split('-')
        return `${isoDateParts[0]}-${isoDateParts[1]}-${isoDateParts[2]}`
    }

    const openDelConfirm = (event) => {
        setSelectedEvent(event)
        setShowConfirmDelete(true)
    }

    const confirmDelete = () => {
        if (selectedEvent) {
            deleteEvent(selectedEvent._id)
            setSelectedEvent(null)
            setShowConfirmDelete(false)
            getEvents()
        }
    }

    const cancelDelete = () => {
        setSelectedEvent(null)
        setShowConfirmDelete(false)
    }

    const openEditForm = (event) => {
        setSelectedEvent(event)
        setShowEditForm(true)
        getEvents()
    }

    const closeEditForm = () => {
        setSelectedEvent(null)
        setShowEditForm(false)
        getEvents()
    }

    return (
        <div className="container">
            <div className="cont">
                <AddEvent></AddEvent>
                <br></br>
                <div className="scroll-table">
                    {isLoading ? (
                        <p>Cargando events...</p>
                    ) : (
                        <>
                            {showConfirmDelete && <ConfirmDelete onDelete={confirmDelete} onCancel={cancelDelete} />}
                            {showEditForm && <EditForm event={selectedEvent} onClose={closeEditForm} />}
                            
                            <table className="table table-hover table-success">
                                <thead>
                                    <tr>
                                        <th scope="col">Description</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Hotel</th>
                                        <th scope="col">Additional</th>
                                        <th scope="col">Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map((event, index) => (
                                        <tr key={index}>
                                            <td>{event.description}</td>
                                            <td>{formatDate(event.date)}</td>
                                            <td>{event.time}</td>
                                            <td>{event.hotel && event.hotel.name}</td>
                                            <td>{event.additional && event.additional.description}</td>
                                            <td>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <img
                                                        src={editIcon}
                                                        alt="Editar"
                                                        style={{ cursor: 'pointer', width: '20px', marginRight: '20%' }}
                                                        onClick={() => openEditForm(event)}
                                                    />
                                                    <img
                                                        src={trashIcon}
                                                        alt="Eliminar"
                                                        style={{ cursor: 'pointer', width: '20px' }}
                                                        onClick={() => openDelConfirm(event)}
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

