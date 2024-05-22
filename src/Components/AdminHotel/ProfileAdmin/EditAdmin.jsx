import React, { useState } from 'react';
import styled from "styled-components";
import cambiaInfo from "../../../assets/img/ProfileEdit.png";
import { useUserDetailsAdmin } from '../../../shared/hooks/AdminHotel/ProfileAdmin/useUserDetailsAdmin';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEdit } from '../../../shared/hooks/AdminHotel/ProfileAdmin/useEdit';
import { DeleteAdmin } from './DeleteAdmin';
import { useDeleteAdmin } from '../../../shared/hooks/AdminHotel/ProfileAdmin/useDeleteAdmin';
import { useNavigate } from 'react-router-dom';

export const EditAdmin = () => {
  // Invocar useUserDetails para obtener los detalles del usuario
  const navigate = useNavigate();
  const { username } = useUserDetailsAdmin();
  const { nameUser } = useUserDetailsAdmin();
  const {edit, isEdit} = useEdit()
  const {deleteUserClient} = useDeleteAdmin()
  // Obtener la información del usuario del almacenamiento local
  const storedUser = JSON.parse(localStorage.getItem('adminhotel'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(
    {
      nameUser: {
        value: ''
      },
      surname: {
        value: ''
      },
      username: {
        value: ''
      },
      email: {
        value: ''
      },
      phone: {
        value: ''
      },
      imagesUser: {
        value: ''
      }
    }

  )
  const handleValueChange = (e, fieldName) => {
    const  value  = e.target
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Abre el modal al hacer clic en el botón de eliminación
  };
  const handleConfirmDelete = (password) => {
    deleteUserClient(password, navigate); // Llama a la función de eliminación del usuario
    setIsModalOpen(false); // Cierra el modal después de la eliminación
  };

  const handleEditTask = (e) => {
    e.preventDefault()
  // Llama a la función edit con los valores extraídos
  edit(formData.nameUser.value,
     formData.surname.value, 
     formData.username.value, 
     formData.email.value, 
     formData.phone.value, 
     formData.imagesUser.value
    )
    console.log(formData)
    console.log(formData.nameUser.value)
    setFormData({
      nameUser: { value: '' },
      surname: { value: '' },
      username: { value: '' },
      email: { value: '' },
      phone: { value: '' },
      imagesUser: { value: '' }
    });
  }
  return (
    <StyledEdit>
      <div className="main-content">
        <div className="hello-user">
          <img src={cambiaInfo} width={"70px"} alt="Editar perfil" />
          {/* Mostrar el nombre de usuario obtenido de useUserDetails */}
          <h1>Bienvenido {nameUser}</h1>
        </div>
        <div className="info-user">
          <form onSubmit={handleEditTask}>
            <div className="mb-3">
              <label htmlFor="nameUser" className="form-label">Name User</label>
              <input
                type="text"
                className="form-control"
                id="nameUser"
                value={formData.nameUser.value}
                onChange={(e) => handleValueChange(e, 'nameUser')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="surname" className="form-label">Surname</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                value={formData.surname.value}
                onChange={(e) => handleValueChange(e, 'surname')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={formData.username.value}
                onChange={(e) => handleValueChange(e, 'username')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email.value}
                onChange={(e) => handleValueChange(e, 'email')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={formData.phone.value}
                onChange={(e) => handleValueChange(e, 'phone')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imagesUser" className="form-label">Image Route</label>
              <input
                type="text"
                className="form-control"
                id="imagesUser"
                value={formData.imagesUser.value}
                onChange={(e) => handleValueChange(e, 'imagesUser')}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="btn btn-dark btn-sm">Update</button>
              <button type="submit" className="btn btn-dark btn-sm" onClick={handleDelete}>Delete</button>
            </div>
          </form>
        {/* Modal para confirmar la eliminación */}
        {isModalOpen && (
            <DeleteAdmin onDelete={handleConfirmDelete} onCancel={() => setIsModalOpen(false)} />
          )}
        </div>
      </div>
    </StyledEdit>
  );
};

const StyledEdit = styled.div`
position: absolute; 
top: 5vh;
left: 0; 
margin: 0;
width: calc(100vw - 15px); 
height: 80%;  
background: var(--background-gradient); 

h1 {
  color: var(--first-color);
}
p {
  color: var(--first-color);
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem; /* Ajusta la separación vertical entre los botones */
}

/* Estilo adicional para los botones */
.button-container button {
  flex: 1; /* Los botones se expanden para llenar el espacio disponible */
  max-width: 100px; /* Establece el ancho máximo de los botones */
  padding: 0px 0px 10px;
  margin-left: 0.5rem;
}
`;