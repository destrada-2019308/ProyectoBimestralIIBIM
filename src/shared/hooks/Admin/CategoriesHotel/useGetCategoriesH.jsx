import { useState } from "react"
import toast from "react-hot-toast"
import { getCategoriesHotelRequest } from "../../../../services/apiAdmin"

export const useGetCategoriesH = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [categorieshotels, setCategories] = useState([])
  
    const getCategories = async () => {
      setIsLoading(true)
      try {
        const response = await getCategoriesHotelRequest()
        setIsLoading(false)
        if (response.error) {
          toast.error(
            response?.err?.response?.data?.msg ||
              response?.err?.data?.msg ||
              "Error getting categories. Try again."
          )
        } else {
          setCategories(response.categorieshotels)
        }
      } catch (error) {
        console.error(error)
        setIsLoading(false)
        toast.error("Error getting categories. Try again.")
      }
    }
  
    return {
      getCategories,
      isLoading,
      categorieshotels,
    }
  }