import { useState } from "react";
import toast from "react-hot-toast";
import { getAvailableRooms } from "../../../../services/apiAdmin";

export const useGetRooms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    setIsLoading(true);
    try {
      const response = await getAvailableRooms();
      console.log("Full response from API:", response);
      setIsLoading(false);

      if (response.error) {
        console.error("Error in response:", response.error);
        toast.error(
          response.error?.response?.data?.msg ||
          response.error?.data?.msg ||
          "Error getting categories. Try again."
        );
      } else {
        console.log("Response data:", response);
        setRooms(response.availableRooms);
      }
    } catch (error) {
      console.error("Catch block error:", error);
      setIsLoading(false);
      toast.error("Error getting categories. Try again.");
    }
  };

  return {
    getRooms,
    isLoading,
    rooms,
  };
};
