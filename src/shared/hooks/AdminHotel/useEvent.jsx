import { useState } from "react";
import toast from "react-hot-toast";
import { getEventHotelRequest } from "../../../services/apiAdmin";

export const useEvent = () => {
  const [events, setEvents] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getEvents = async () => {
    setIsFetching(true);
    try {
      const response = await getEventHotelRequest();

      if (response.error) {
        toast.error(response?.err?.response?.data?.message || "Error fetching events");
      } else {
        console.log("Events received:", response.events);

        // Verificar si response.events es un array
        const eventsArray = Array.isArray(response.events) ? response.events : [response.events];

        setEvents(eventsArray); // Establecer eventos como un array
      }
    } catch (error) {
      console.error("Error in getEvents:", error);
      toast.error('Error al cargar eventos');
    } finally {
      setIsFetching(false);
    }
  };

  return {
    events,
    getEvents,
    isFetching
  };
};
