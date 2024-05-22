import { useState } from "react";
import toast from "react-hot-toast";
import { updateCategoryRequest } from "../../../../services/apiAdmin";

export const useUpdateCategoryH = () => {
    const [updatedCategory, setUpdatedCategory] = useState(null)

    const updateCategory = async(id, categoryhotels)=>{
        const response = await updateCategoryRequest(id, categoryhotels)
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