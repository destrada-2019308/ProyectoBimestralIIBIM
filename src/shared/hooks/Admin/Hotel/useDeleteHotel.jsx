import toast from 'react-hot-toast'
import { deleteHotelRequest } from '../../../../services/apiAdmin'

export const useDeleteHotel = () => {
    const deleteHotel = async (id) => {
        const response = await deleteHotelRequest(id)
        if (response.error) {
            return toast.error('Error delete hotel.')
        }
        return toast.success('Deleted hotel succesfully.')
    }
    return {
        deleteHotel
    }
}
