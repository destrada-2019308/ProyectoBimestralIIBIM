import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2656',
    timeout: 1000
})
apiClient.interceptors.request.use(
    (config)=>{
        const userDetails = localStorage.getItem('token')
        if(userDetails){
            const token = JSON.parse(userDetails)
            config.headers.Authorization = `${token}`
            console.log(token)
        }
        return config
    },
    (err)=> Promise.reject(err)
)



 /* apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')
        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => Promise.reject(err)
)*/

// //////////////////////////////////////////////////// //
// ///////////  Métodos Post UwU ///////////////////// //
// //////////////////////////////////////////////////// //

//Método Login para el usuario -> HACER UN HOOK
export const loginRequest = async(user)=>{
    try {
        return await apiClient.post('/user/login', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const registerRequest = async(user)=>{
    try {
        return await apiClient.post('/user/register', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const getRoomsRequest = async()=>{
    try{
        return await apiClient.get('/room/getAvailableRooms')
    }catch (err) {
        error: true,
        err
    }
}

export const getHotelsRequest = async()=>{
    try {
        return await apiClient.get('/hotel/getHotels')
    } catch (error) {
        error: true,
        err
    }
}

export const getCategoryRoomsRequest = async()=>{
    try {
        return await apiClient.get('/categoryRoom/getCategory')
    } catch (error) {
        error: true,
        err
    }
}

//Consulta para la busqueda
export const searchRequest = async(information)=>{
    try {        
        return await apiClient.post('/room/searchRooms', information)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//Consulta para la reserva de hoteles 
export const reserveRequest = async(reserve)=>{
    try {        
        return await apiClient.post('/reservation/add', reserve)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//Para ver las reservas
export const getreserveRequest = async()=>{
    try {        
        return await apiClient.get('/reservation/getReservationMyUser')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const getRoomsByHotel = async (hotelId) => {
    try {
        const response = await axios.get(`/RoomsByIdHotel/${hotelId}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las habitaciones:', error);
        throw error;
    }
};