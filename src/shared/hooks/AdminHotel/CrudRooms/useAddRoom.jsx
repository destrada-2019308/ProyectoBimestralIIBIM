import { useState } from "react";
import toast from "react-hot-toast";
import { addRoomRequest } from "../../../../services/apiAdmin";

export const useAddRoom = () => {
    const [isLoading, setIsLoading] = useState(false);

    const addRoom = async (
      description,
      beds,
      amountOfPeople,
      amenities,
      price,
      hotel,
      categoryRoom,
      imagesRoom
    ) => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append("description", description);
        formData.append("beds", beds);
        formData.append("amountOfPeople", amountOfPeople);
        formData.append("amenities", amenities);
        formData.append("price", price);
        //formData.append("hotel", hotel);
        formData.append("categoryRoom", categoryRoom);
        formData.append("imagesRoom", imagesRoom);

        const response = await addRoomRequest(formData);
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
                'Error general al intentar agregar una habitacion. Intenta de nuevo.'
            )
        } else {
            toast.success('habitacion registrado exitosamente!');
        }
    }
    return {
        addRoom,
        isLoading
    }
}

