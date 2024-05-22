import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getRoomsByHotel } from "../../../services/api"; 

export const useRoom = (hotelId) => { 
  const [rooms, setRooms] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!hotelId) return;

    const fetchRooms = async () => {
      setIsFetching(true);
      try {
        const availableRooms = await getRoomsByHotel(hotelId); 
        setRooms(availableRooms);
      } catch (error) {
        console.error("Error al cargar habitaciones:", error);
        toast.error("Error al cargar habitaciones");
      } finally {
        setIsFetching(false);
      }
    };

    fetchRooms();
  }, [hotelId]); 

  return {
    rooms,
    isFetching,
  };
};