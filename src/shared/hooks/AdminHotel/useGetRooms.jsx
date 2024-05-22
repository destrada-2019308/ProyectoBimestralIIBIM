import { useState } from "react";
import toast from "react-hot-toast";
import { getRoomsRequest } from "../../../services/apiAdminHotel";

export const useGetRooms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [roomsHotels, setRooms] = useState([]);

  const getRooms = async () => {
    setIsLoading(true);
    try {
      const response = await getRoomsRequest();
      console.log("Response from API:", response);
      setIsLoading(false);
      if (response.error) {
        toast.error(
          response?.err?.response?.data?.msg ||
            response?.err?.data?.msg ||
            "Error getting rooms from admin hotel. Try again."
        );
      } else {
        console.log("Rooms received from API:", response.data);
        setRooms(response.roomsHotels || []); // Utilizamos response.roomsHotels para asignar los datos de las habitaciones
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      toast.error("Error getting rooms AdminHotel. Try again.");
    }
  };
  console.log("Rooms before return:", roomsHotels);

  return {  
    getRooms,
    isLoading,  
    roomsHotels,
  };
};
