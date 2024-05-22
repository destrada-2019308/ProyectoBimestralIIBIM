import { useState } from "react";
import toast from "react-hot-toast";
import { updateAdditionalRequest } from "../../../../services/apiAdmin";

export const useUpdateAdditional = () => {
    const [updatedAdditional, setUpdatedAdditional] = useState(null)

    const updateAdditional = async(id, additional)=>{
        const response = await updateAdditionalRequest(id, additional)
        if(response.error){
            toast.error(
                response?.err?.response?.data?.message ||
                'Error updating additional'
            )
        }
        setUpdatedAdditional(response.data)
        toast.success('Additional updated successfully')
    }
  return {
    updatedAdditional,
    isFetching: !updateAdditional,
    updateAdditional
  }
}