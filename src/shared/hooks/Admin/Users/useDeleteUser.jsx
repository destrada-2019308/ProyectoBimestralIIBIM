import toast from 'react-hot-toast'
import { deleteUserRequest } from '../../../../services/apiAdmin'

export const useDeleteUser = () => {
    const deleteUser = async (id) => {
        const response = await deleteUserRequest(id)
        if (response.error) {
            return toast.error('Error delete user.')
        }
        return toast.success('Deleted user succesfully.')
    }
    return {
        deleteUser
    }
}