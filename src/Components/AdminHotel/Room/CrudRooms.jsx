import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CrudCategoriesRoom.css';
import { useGetRooms } from "../../../shared/hooks/AdminHotel/CrudRooms/useGetRooms";
import { useDeleteRoom } from '../../../shared/hooks/AdminHotel/CrudRooms/useDeleteRoom';
import { ConfirmDelete } from './ConfirmDelete';
import { EditForm } from "./EditForm";
import { AddRoom } from "./AddRoom";
import editIcon from '../../../assets/img/editIcon.png'; 
import trashIcon from '../../../assets/img/eliminar.png'; 


export const CrudRooms = () => {
  const { getRooms, isLoading, rooms, setRooms } = useGetRooms();

  const { deleteRoom } = useDeleteRoom();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    getRooms();
  }, []);

  useEffect(() => {
    console.log("Rooms:", rooms);
  }, [rooms]);

  const openDelConfirm = (room) => {
    setSelectedRoom(room);
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    if (selectedRoom) {
      deleteRoom(selectedRoom._id);
      setSelectedRoom(null);
      setShowConfirmDelete(false);
      getRooms();
    }
  };

  const cancelDelete = () => {
    setSelectedRoom(null);
    setShowConfirmDelete(false);
  };

  const openEditForm = (room) => {
    setSelectedRoom(room);
    setShowEditForm(true);
  };

  const closeEditForm = () => {
    setSelectedRoom(null);
    setShowEditForm(false);
  };

  const handleAddRoom = (newRoom) => {
    setRooms(prevRooms => [...prevRooms, newRoom]);
  };

  return (
    <div className="container">
      <div className="cont">
        <AddRoom />
        <br />
        <div className="scroll-table">
          {isLoading ? (
            <p>Cargando habitaciones...</p>
          ) : (
            <>
              {showConfirmDelete && <ConfirmDelete onDelete={confirmDelete} onCancel={cancelDelete} />}
              {showEditForm && <EditForm room={selectedRoom} onClose={closeEditForm} onUpdate={updateRoom} />}
              <table className="table table-hover table-success">
                <thead>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>

                    <th scope="col">Hotel</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Option</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room, index) => (
                    <tr key={index}>
                      <td>{room.description}</td>
                      <td>{room.price}</td>
                      <td>{room.hotel && room.hotel.name}</td>
                      <td>{room.categoryRoom && room.categoryRoom.name}</td>
                      <td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <img
                            src={editIcon}
                            alt="Editar"
                            style={{ cursor: 'pointer', width: '20px', marginRight: '20%' }}
                            onClick={() => openEditForm(room)}
                          />
                          <img
                            src={trashIcon}
                            alt="Eliminar"
                            style={{ cursor: 'pointer', width: '20px' }}
                            onClick={() => openDelConfirm(room)}
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
  );
};