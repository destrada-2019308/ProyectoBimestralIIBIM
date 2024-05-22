
import { useEffect, useState } from "react";
import toast from "react-hot-toast"
import { updateUser, getUsersID } from '../../../services/apiUser.js'


export const useEdit = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [userData, setUserData] = useState(null);
  const [updateUsers, setUpdateUser] = useState(null)

  const edit = async(nameUser, surname, username, email, phone, imagesUser)=>{
    setIsEdit(true)
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
  
    // Obtener los datos del usuario
    const userData = await fetchUserData();
    if(surname === ''){
      surname = userData.findUsers.surname
      console.log('holiwis')
      console.log(surname.data)
    }if(nameUser ===''){
      console.log('name user null')
      nameUser = userData.findUsers.nameUser
    }if(username === ''){
      username = userData.findUsers.username
    }if(email === ''){
      email = userData.findUsers.email
    }if(phone === ''){
      phone = userData.findUsers.phone
    }if(imagesUser === ''){
      imagesUser = userData.findUsers.imagesUser
    }
    const user = {
      nameUser, 
      surname,
      username,
      email, 
      phone,
      imagesUser
    }
    
  
    const response = await updateUser(user);
    setIsEdit(false);
    setUpdateUser(response.data)
   // console.log(response)
  
    if (response.error) {
      return toast.error(
        response?.e?.response?.data ||
        'Error al intentar Editar Perfil. ¡Inténtalo más tarde!'
      );
    }
    return toast.success(response?.e?.response?.data ||'Usuario Actualizado');
  }


  return {
    edit, 
    isEdit, 
    updateUsers
  }
}
