import { getHotelsRequest } from "../../../services/api"
import { useState } from "react"
import toast from "react-hot-toast"

export const useHotels = () => {
    const [hotels, setHotels] = useState(null)
  
  
    const getHotels = async () =>{
      try {
          const response = await getHotelsRequest()
          
          if(response.error){
              return toast.error(response?.err?.response?.data?.message)
          }
          setHotels(response.data.hotels)
      } catch (error) {
          console.log(error)
          return toast.error('Error al cargar hoteles')
      }
    }
      return {
          
          hotels,
          getHotels,
          isFetching: !hotels
  
      }
  }
