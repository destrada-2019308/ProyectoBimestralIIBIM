import { useState } from "react";
import toast from "react-hot-toast";
import { addCategoryRoomRequest } from "../../../../services/apiAdmin";

export const useAddCategoryRoom = () => {
    const [isLoading, setIsLoading] = useState(false);

    const addCategoryRoom = async (
        nameCategoryRoom,
        descriptionCategoryRoom
    ) => {

        setIsLoading(true);

        const data = {
            nameCategoryRoom,
            descriptionCategoryRoom
        }

        const response = await addCategoryRoomRequest(data);
        setIsLoading(false);

        if (response.error) {
            if (response?.err?.response?.data?.errors) {
                let arr = response?.err?.response?.data?.errors
                for (const error of arr) {
                    return toast.error(
                        error.msg
                    )
                }
            }
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error general al intentar agregar una tarea. Intenta de nuevo.'
            )
        } else {
            toast.success('Categoria registrado exitosamente!');
        }
    }
    return {
        addCategoryRoom,
        isLoading
    }
}

