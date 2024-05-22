import { useState } from "react"
import toast from "react-hot-toast"
import { getRoomsRequest } from "../../../services/api"

export const useRoom = () => {
  const [rooms, setRooms] = useState(null)
  
  
  const getRooms = async () =>{
    try {
        const response = await getRoomsRequest()
        
        if(response.error){
            return toast.error(response?.err?.response?.data?.message)
        }
        setRooms(response.data.availableRooms)
    } catch (error) {
        console.log(error)
        return toast.error('Error al cargar cuartos')
    }
  }
    return {
        
        rooms,
        getRooms,
        isFetching: !rooms

    }
}
