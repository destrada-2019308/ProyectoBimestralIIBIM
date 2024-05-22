import { useState } from "react";
import toast from "react-hot-toast";
import { updateCategoryRoomRequest } from "../../../../services/apiAdmin";

export const useUpdateCategoryRoom = () => {
    const [updatedCategory, setUpdatedCategory] = useState(null)

    const updateCategory = async(id, categoryRooms)=>{
        const response = await updateCategoryRoomRequest(id, categoryRooms)
        if(response.error){
            toast.error(
                response?.err?.response?.data?.message ||
                'Error updating category'
            )
        }
        setUpdatedCategory(response.data)
        toast.success('Category updated successfully')
    }
  return {
    updatedCategory,
    isFetching: !updateCategory,
    updateCategory
  }
}