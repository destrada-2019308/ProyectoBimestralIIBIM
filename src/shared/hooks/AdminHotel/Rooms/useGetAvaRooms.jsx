import { useState } from "react";
import toast from "react-hot-toast";
import { getRoomsAvailableRequest } from '../../../../services/apiAdminHotel'

export const useGetAvaRooms = () => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ rooms, setRooms ] = useState([])

    const getAvaRooms = async() => {
        setIsLoading(true)
        try {
            const res = await getRoomsAvailableRequest()
            setIsLoading(false)
            if(res.error){
                toast.error(
                    res?.err?.res?.data?.msg ||
                        res?.err?.data?.msg ||
                        "Error obteniendo las habitaciones disponibles"
                )
            } else {
                setRooms(res.rooms)
            }
        } catch (err) {
            console.error(err);
            setIsLoading(false)
            toast.error("Error obteniendo datos")
        }
    }
  
    return {
        getAvaRooms,
        isLoading,
        rooms
    }
}
