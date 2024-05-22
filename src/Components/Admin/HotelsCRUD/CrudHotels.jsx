import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './CrudHotels.css'
import { useGetHotels } from "../../../shared/hooks/Admin/Hotel/useGetHotels";
import editIcon from '../../../../src/assets/img/editIcon.png'
import trashIcon from '../../../../src/assets/img/eliminar.png'
import { AddHotel } from "./AddHotel";
import { useDeleteHotel } from "../../../shared/hooks/Admin/Hotel/useDeleteHotel";
import { ConfirmDelete } from "../ConfirmDelete";
import { EditForm } from "./EditForm";

export const CrudHotels = () => {
    const { getHotels, isLoading, hotels } = useGetHotels()
    const [selectedHotel, setSelectedHotel] = useState(null)
    const { deleteHotel } = useDeleteHotel()
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    useEffect(() => {
        getHotels()
    }, [])

    const openDelConfirm = (hotel) => {
        setSelectedHotel(hotel)
        setShowConfirmDelete(true)
    }

    const confirmDelete = () => {
        if (selectedHotel) {
            deleteHotel(selectedHotel._id)
            setSelectedHotel(null)
            setShowConfirmDelete(false)
            getHotels()
        }
    }

    const cancelDelete = () => {
        setSelectedHotel(null)
        setShowConfirmDelete(false)
    }

    const openEditForm = (hotel) => {
        setSelectedHotel(hotel)
        setShowEditForm(true)
        getHotels()
    }

    const closeEditForm = () => {
        setSelectedHotel(null)
        setShowEditForm(false)
        getHotels()
    }

    return (
        <div>
            <br></br>
            {isLoading ? (
                <p>Cargando categorias...</p>
            ) : (
                <>
                    {showConfirmDelete && <ConfirmDelete onDelete={confirmDelete} onCancel={cancelDelete} />}
                    {showEditForm && <EditForm hotel={selectedHotel} onClose={closeEditForm} />}

                    <AddHotel></AddHotel>
                    <div className="cont-cards">
                        {hotels.map((hotel) => (
                            <div key={hotel._id}>
                                <div class="bg">
                                </div>
                                <div class="nft">

                                    <div class='main'>
                                        {hotel.imagesHotel && hotel.imagesHotel.length > 0 && hotel.imagesHotel[0] && (
                                            <div class="tokenImage">
                                                <img
                                                    crossOrigin="anonymous"
                                                    src={`http://localhost:2656${hotel.imagesHotel[0]}`}
                                                    alt={hotel.name}
                                                    class="hotel-image"
                                                />
                                            </div>
                                        )}
                                        <br></br>
                                        <h2>{hotel.name}</h2>
                                        <p class='description'>{hotel.country}</p>
                                        <p class='description'>{hotel.city}</p>
                                        <div class='tokenInfo'>
                                            <div class="category-phone">
                                                <ins>🛋️</ins>
                                                <p>{hotel.categoryHotel?.nameCategoryHotel}</p>
                                            </div>
                                            <div class="category-phone">
                                                <ins>📱</ins>
                                                <p>{hotel.phone}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class='creator'>
                                            <p>{hotel.address}</p>
                                        </div>
                                        <div>
                                            <img
                                                src={editIcon}
                                                alt="Editar"
                                                style={{ cursor: 'pointer', width: '20px', marginRight: '20%' }}
                                            onClick={() => openEditForm(hotel)}
                                            />
                                            <img
                                                src={trashIcon}
                                                alt="Eliminar"
                                                style={{ cursor: 'pointer', width: '20px' }}
                                                onClick={() => openDelConfirm(hotel)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </>
            )}

        </div>


    )

}
