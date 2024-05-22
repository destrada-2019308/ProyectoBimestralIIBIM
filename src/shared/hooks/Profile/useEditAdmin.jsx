import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateUser, getUsersID } from '../../../services/apiUser.js';

export const useEditAdmin = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [updateUsers, setUpdateUser] = useState(null);

  const edit = async (nameUser,
     surname, 
     username, 
     email, 
     phone, 
     imagesUser) => {
    setIsEdit(true);
    try {
      // Obtener los datos del usuario
      const fetchUserData = async () => {
        try {
          const response = await getUsersID();
          if (!response.error) {
            return response.data; // Devuelve los datos del usuario obtenidos
          } else {
            console.error('Error al obtener los datos del usuario:', response.err);
            return null;
          }
        } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);
          return null;
        }
      };

      const userData = await fetchUserData();
      const updatedSurname = surname === '' ?
        userData.findUsers.surname : surname;
      const updatedNameUser = nameUser === '' ?
        userData.findUsers.nameUser : nameUser;
      const updatedUsername = username === '' ?
        userData.findUsers.username : username;
      const updatedEmail = email === '' ?
        userData.findUsers.email : email;
      const updatedPhone = phone === '' ?
        userData.findUsers.phone : phone;

      // Actualiza otros campos de la misma manera...

      const formData = new FormData();
      formData.append('nameUser', updatedNameUser);
      formData.append('surname', updatedSurname);
      formData.append('username', updatedUsername);
      formData.append('email', updatedEmail);
      formData.append('phone', updatedPhone);
      if (imagesUser) {
        formData.append('imagesUser', imagesUser.get('imagesUser'));
      }
      const response = await updateUser(formData);
      setIsEdit(false);
      setUpdateUser(response.data);

      if (response.error) {
        return toast.error(
          response?.e?.response?.data ||
          'Error al intentar Editar Perfil. ¡Inténtalo más tarde!'
        );
      }

      return toast.success(response?.e?.response?.data || 'Usuario Actualizado');
    } catch (error) {
      console.error('Error al intentar Editar Perfil:', error);
      setIsEdit(false);
      return toast.error('Error al intentar Editar Perfil. ¡Inténtalo más tarde!');
    }
  };

  return {
    edit,
    isEdit,
    updateUsers
  };
};
