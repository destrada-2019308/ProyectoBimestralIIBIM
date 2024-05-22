import { useState } from "react"
import toast from "react-hot-toast"
import { getHotelsRequest } from "../../../../services/apiAdmin"

export const useGetHotels = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [hotels, setHotels] = useState([])

  const getHotels = async () => {
    setIsLoading(true)
    try {
      const response = await getHotelsRequest()
      setIsLoading(false)
      console.log(response)
      if (response.error) {
        toast.error(
          response?.err?.response?.data?.msg ||
          response?.err?.data?.msg ||
          "Error getting hotels. Try again."
        )
      } else {
        setHotels(response.hotels)
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      toast.error("Error getting hotels. Try again.")
    }
  }

  return {
    getHotels,
    isLoading,
    hotels,
  }
}