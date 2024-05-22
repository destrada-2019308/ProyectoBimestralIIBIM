import { useState } from "react"
import toast from "react-hot-toast"
import { getAdittionalsRequest } from "../../../../services/apiAdmin"

export const useGetAdditionals = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [additionals, setAdditionals] = useState([])
  
    const getAdditionals = async () => {
      setIsLoading(true)
      try {
        const response = await getAdittionalsRequest()
        setIsLoading(false)
        if (response.error) {
          toast.error(
            response?.err?.response?.data?.msg ||
              response?.err?.data?.msg ||
              "Error getting additionals. Try again."
          )
        } else {
          setAdditionals(response.additionals)
        }
      } catch (error) {
        console.error(error)
        setIsLoading(false)
        toast.error("Error getting additionals. Try again.")
      }
    }
  
    return {
      getAdditionals,
      isLoading,
      additionals,
    }
  }