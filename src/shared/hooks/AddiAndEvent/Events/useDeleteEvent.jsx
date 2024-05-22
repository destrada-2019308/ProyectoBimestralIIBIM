import toast from 'react-hot-toast'
import { deleteEventRequest } from '../../../../services/apiAdmin'

export const useDeleteEvent = () => {
    const deleteEvent = async (id) => {
        const response = await deleteEventRequest(id)
        if (response.error) {
            return toast.error('Error delete event.')
        }
        return toast.success('Deleted event succesfully.')
    }
    return {
        deleteEvent
    }
}

