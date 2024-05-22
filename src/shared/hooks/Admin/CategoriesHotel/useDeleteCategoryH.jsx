import toast from 'react-hot-toast'
import { deleteCtegorieHRequest } from '../../../../services/apiAdmin'

export const useDeleteCategoryH = () => {
    const deleteCategory = async (id) => {
        const response = await deleteCtegorieHRequest(id)
        if (response.error) {
            return toast.error('Error delete category.')
        }
        return toast.success('Deleted category succesfully.')
    }
    return {
        deleteCategory
    }
}