import toast from 'react-hot-toast'
import { deleteCategoryRoomRequest } from '../../../../services/apiAdmin'

export const useDeleteCategoryRoom = () => {

    const deleteCategory = async (id) => {
        const response = await deleteCategoryRoomRequest(id)
        if (response.error) {
            return toast.error('Error delete category.')
        }
        return toast.success('Deleted category succesfully.')
    }
    return {
        deleteCategory
    }
}