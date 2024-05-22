import { useState } from "react";
import toast from "react-hot-toast";
import { addAdditionalRequest } from "../../../../services/apiAdmin.js";

export const useAddAdditional = () => {
    const [isLoading, setIsLoading] = useState(false);

    const addAdditional = async (
        description,
        price
    ) => {

        setIsLoading(true);

        const data = {
            description,
            price
        }

        const response = await addAdditionalRequest(data);
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
                'Error general al intentar agregar un additional. Intenta de nuevo.'
            )
        } else {
            toast.success('Additional registrado exitosamente!');
        }
    }
    return {
        addAdditional,
        isLoading
    }
}

