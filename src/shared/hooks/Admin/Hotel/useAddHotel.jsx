import { useState } from "react";
import toast from "react-hot-toast";
import { addHotelRequest } from "../../../../services/apiAdmin.js";

export const useAddHotel = () => {
    const [isLoading, setIsLoading] = useState(false);

    const addHotel = async (
        name,
        country,
        city,
        address,
        phone,
        categoryHotel,
        imageHotel
    ) => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("country", country);
        formData.append("city", city);
        formData.append("address", address);
        formData.append("phone", phone);
        formData.append("categoryHotel", categoryHotel);
        formData.append("imageHotel", imageHotel);

        const response = await addHotelRequest(formData);
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
                'Error general al intentar agregar una hotel. Intenta de nuevo.'
            )
        } else {
            toast.success('Hotel registrado exitosamente!');
        }
    }
    return {
        addHotel,
        isLoading
    }
}

