import toast from "react-hot-toast";
import { updateRoleUserRequest } from "../../../../services/apiAdmin";

export const useUpdateRole = () => {
    const updateRole = async (username) => {
        const response = await updateRoleUserRequest(username)
        if (response.error) {
            return toast.error('Error updating role')
        }
        return toast.success('updated role')
    }
    return {
        updateRole
    }
}
