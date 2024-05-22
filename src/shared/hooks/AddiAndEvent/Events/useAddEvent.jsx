import React from 'react'
import { useState } from "react";
import toast from "react-hot-toast";
import { addEventRequest } from '../../../../services/apiAdmin'

export const useAddEvent = () => {
    const [isLoading, setIsLoading] = useState(false);

    const addEvent = async (
        description,
        date,
        time,
        hotel,
        additional
    ) => {

        setIsLoading(true);

        const data = {
            description,
            date,
            time,
            hotel,
            additional
        }

        const response = await addEventRequest(data);
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
                'Error general al intentar agregar un evento. Intenta de nuevo.'
            )
        } else {
            toast.success('evento registrado exitosamente!');
        }
    }
    return {
        addEvent,
        isLoading
    }
}
