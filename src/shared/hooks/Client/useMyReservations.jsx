import { getreserveRequest } from "../../../services/api"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"

export const useMyReservations = () => {
    const [reservations, setReservations] = useState(null)
    const [isFetching, setIsFetching] = useState(false); // Estado para indicar si se están cargando las reservas
  
    const getReservation = async () =>{
      try {
          setIsFetching(true); // Indicar que se está cargando
          const response = await getreserveRequest()
          
          if(response.error){
              toast.error(response?.err?.response?.data?.message)
          } else {
              setReservations(response.data)
          }
      } catch (error) {
          console.log(error)
          toast.error('Error al cargar tus reservas')
      } finally {
          setIsFetching(false); // Indicar que la carga ha finalizado, ya sea con éxito o error
      }
    }

    // Solo para mostrar el mensaje de carga cuando se inicia la carga de reservas
    useEffect(() => {
        setIsFetching(true);
        getReservation().finally(() => setIsFetching(false));
    }, []);
      
    return {
        reservations,
        getReservation,
        isFetching
    }
}