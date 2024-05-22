import { useState } from "react";
import toast from "react-hot-toast";
import { updateUserRequest } from "../../../../services/apiAdmin";

export const useUpdateUser = () => {
    const [updatedUser, setUpdatedUser] = useState(null)

    const updateUser = async(id, user)=>{
        const response = await updateUserRequest(id, user)
        if(response.error){
            toast.error(
                response?.err?.response?.data?.message ||
                'Error updating user'
            )
        }
        setUpdatedUser(response.data)
        toast.success('User updated successfully')
    }
  return {
    updatedUser,
    isFetching: !updateUser,
    updateUser
  }
}