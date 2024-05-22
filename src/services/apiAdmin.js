import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2656',
    timeout: 5000
})
apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('token')
        if (userDetails) {
            const token = JSON.parse(userDetails)
            config.headers.Authorization = `${token}`
            console.log(token)
        }
        return config
    },
    (err) => Promise.reject(err)
)

//--------------------------------------------------------Consultas del administrador para CRUD USUARIO
export const getAllUsersRequest = async () => {
    try {
        const res = await apiClient.get('user/getUsers')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const deleteUserRequest = async (id) => {
    try {
        return await apiClient.delete(`user/deleteUserID/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateUserRequest = async (id, user) => {
    try {
        return await apiClient.put(`user/updateUserId/${id}`, user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateRoleUserRequest = async (username, user) => {
    try {
        return await apiClient.put(`user/updateRole/${username}`, user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}


//--------------------------------------------------------Consultas del administrador para CRUD CATEGORIES HOTEL
export const addCategoryHRequest = async (data) => {
    try {
        return await apiClient.post('categoryHotel/addCategory', data);
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};

export const getCategoriesHotelRequest = async () => {
    try {
        const res = await apiClient.get('categoryHotel/getCategory')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const deleteCtegorieHRequest = async (id) => {
    try {
        return await apiClient.delete(`categoryHotel/deleteCategory/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateCategoryRequest = async (id, categoryhotels) => {
    try {
        return await apiClient.put(`categoryHotel/updateCategory/${id}`, categoryhotels)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}


//------------------------ Hotels
export const addHotelRequest = async (data) => {
    try {
        return await apiClient.post('hotel/addHotel', data);
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};

export const getHotelsRequest = async()=>{
    try {
        //return await apiClient.get('/hotel/getHotels')
        const res = await apiClient.get('hotel/getHotels')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const deleteHotelRequest = async (id) => {
    try {
        return await apiClient.delete(`hotel/deleteHotel/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateHotelRequest = async (id, hotel) => {
    try {
        return await apiClient.put(`hotel/updateHotel/${id}`, hotel)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

/* RUTAS ADITTIONALS AND EVENTS */
export const getAdittionalsRequest = async()=>{
    try {
        const res = await apiClient.get('additionals/getAdditionals')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const addAdditionalRequest = async (data) => {
    try {
        return await apiClient.post('additionals/add', data);
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};

export const deleteAdditionalRequest = async (id) => {
    try {
        return await apiClient.delete(`additionals/delete/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateAdditionalRequest = async (id, additional) => {
    try {
        return await apiClient.put(`additionals/update/${id}`, additional)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

/* EVENTS */
export const getEventsRequest = async()=>{
    try {
        //return await apiClient.get('/hotel/getHotels')
        const res = await apiClient.get('event/find')
        return res.data
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const addEventRequest = async (data) => {
    try {
        return await apiClient.post('event/add', data);
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};

export const deleteEventRequest = async (id) => {
    try {
        return await apiClient.delete(`event/delete/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateEventRequest = async (id, event) => {
    try {
        return await apiClient.put(`event/update/${id}`, event)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

/* Crud de categories */

export const addCategoryRoomRequest = async (data) => {
    try {
        return await apiClient.post('/categoryRoom/addCategory', data);
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};

export const getCategorysRoomsRequest = async () => {
    try {
      const res = await apiClient.get('/categoryRoom/getCategory');
      console.log("Response from API:", res.data);
      return res.data; // Asegúrate de que `res.data` contiene los datos en el formato esperado
    } catch (err) {
      console.error("Error fetching categories:", err);
      return {
        error: true,
        err
      };
    }
  };

export const deleteCategoryRoomRequest = async (id) => {
    try {
        return await apiClient.delete(`/categoryRoom/deleteCategory/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateCategoryRoomRequest = async (id, categoryRooms) => {
    try {
        return await apiClient.put(`/categoryRoom/updateCategory/${id}`, categoryRooms)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

// Evento por hotel
export const getEventHotelRequest = async () => {
    try {
      const response = await apiClient.get('/event/find');
      console.log("Response from API:", response.data); // Log para verificar la respuesta
      return response.data; // Suponiendo que `response.data` contiene los datos directamente
    } catch (err) {
      console.error("Error fetching events:", err);
      return {
        error: true,
        err
      };
    }
  };

  //Rooms

  // Agregar una habitación
export const addRoomRequest = async (data) => {
    try {
      const response = await apiClient.post('/room/addRoom', data);
      return response.data;
    } catch (error) {
      console.error('Error adding room:', error);
      throw error;
    }
  };
  
  // Actualizar una habitación
  export const updateRoom = async (roomId, formData, config) => {
    try {
      const response = await apiClient.put(`/room/updateRoom/${roomId}`, formData, config);
      return response.data;
    } catch (error) {
      console.error('Error updating room:', error);
      throw error;
    }
  };
  
  // Eliminar una habitación
  export const deleteRoom = async (roomId, config) => {
    try {
      const response = await apiClient.delete(`/room/deleteRoom/${roomId}`, config);
      return response.data;
    } catch (error) {
      console.error('Error deleting room:', error);
      throw error;
    }
  };
  
  // Obtener todas las habitaciones disponibles
  export const getAvailableRooms = async () => {
    try {
      const response = await apiClient.get('/room/getAvailableRooms');
      return response.data;
    } catch (error) {
      console.error('Error getting available rooms:', error);
      throw error;
    }
  };