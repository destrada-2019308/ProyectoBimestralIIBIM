import { useState } from "react";
import toast from "react-hot-toast";
import { addCategoryHRequest } from "../../../../services/apiAdmin.js";

export const useAddCategoryH = () => {
    const [isLoading, setIsLoading] = useState(false);

    const addCategoryH = async (
        nameCategoryHotel,
        descriptionCategoryHotel
    ) => {

        setIsLoading(true);

        const data = {
            nameCategoryHotel,
            descriptionCategoryHotel
        }

        const response = await addCategoryHRequest(data);
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
        addCategoryH,
        isLoading
    }
}

