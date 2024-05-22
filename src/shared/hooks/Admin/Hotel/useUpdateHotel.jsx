import { useState } from "react";
import toast from "react-hot-toast";
import { updateHotelRequest } from "../../../../services/apiAdmin.js";

export const useUpdateHotel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatedHotel, setUpdatedHotel] = useState(null);

  const updateHotel = async (id, formData) => {
    setIsLoading(true);

    const form = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        form.append(key, formData[key]);
      }
    }

    const response = await updateHotelRequest(id, form);
    setIsLoading(false);

    if (response.error) {
      toast.error(
        response?.err?.response?.data?.message ||
        'Error updating hotel'
      );
    } else {
      setUpdatedHotel(response.data);
      toast.success('Hotel updated successfully');
    }
  }

  return {
    updatedHotel,
    isLoading,
    updateHotel,
  }
}
