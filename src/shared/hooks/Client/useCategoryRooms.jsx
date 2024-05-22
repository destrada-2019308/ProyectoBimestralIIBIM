import { useState, useEffect } from "react"
import { getCategoryRoomsRequest } from "../../../services/api"
import toast from "react-hot-toast"

export const useCategoryRooms = () => {
  const [categoryRooms, setCategoryRooms] = useState(null)
  
  
  const getCategoryRooms = async () =>{
    try {
        const response = await getCategoryRoomsRequest()
        
        if(response.error){
            return toast.error(response?.err?.response?.data?.message)
        }
        setCategoryRooms(response.data.category)
    } catch (error) {
        console.log(error)
        return toast.error('Error al cargar las categorias')
    }
  }
    return {
        
        categoryRooms,
        getCategoryRooms,
        isFletching: !categoryRooms

    }
}
