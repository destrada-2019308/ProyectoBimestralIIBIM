import toast from 'react-hot-toast'
import { deleteAdditionalRequest } from '../../../../services/apiAdmin'

export const useDeleteAdditional = () => {
    const deleteAdditional = async (id) => {
        const response = await deleteAdditionalRequest(id)
        if (response.error) {
            return toast.error('Error delete additional.')
        }
        return toast.success('Deleted additional succesfully.')
    }
    return {
        deleteAdditional
    }
}