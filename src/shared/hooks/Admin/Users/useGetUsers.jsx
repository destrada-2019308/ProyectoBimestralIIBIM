import { useState } from "react"
import toast from "react-hot-toast"
import { getAllUsersRequest } from "../../../../services/apiAdmin"

export const useGetUsers = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])
  
    const getUsers = async () => {
      setIsLoading(true)
      try {
        const response = await getAllUsersRequest()
        setIsLoading(false)
        if (response.error) {
          toast.error(
            response?.err?.response?.data?.msg ||
              response?.err?.data?.msg ||
              "Error getting users. Try again."
          )
        } else {
          setUsers(response.users)
        }
      } catch (error) {
        console.error(error)
        setIsLoading(false)
        toast.error("Error getting users. Try again.")
      }
    }
  
    return {
      getUsers,
      isLoading,
      users,
    }
  }