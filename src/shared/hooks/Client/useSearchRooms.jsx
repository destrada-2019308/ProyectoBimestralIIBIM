import { useState } from "react";
import toast from "react-hot-toast";
import { searchRequest } from "../../../services/api.js";


export const useSearchRooms = () => {
    //variables para crear y setear la info de los rooms
    const [city, setCity] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [people, setPeople] = useState(1);
    // Estado para la búsqueda
    const [search, setSearch] = useState(false);
    const [availableRooms, setAvailableRooms] = useState([]);

    const searchroom = async () => {
        setSearch(true);

        // Los parámetros de la búsqueda
        const information = {
            city,
            checkIn,
            checkOut,
            people
        };

        // Respuesta con el axios
        const response = await searchRequest(information);
        setSearch(false);

        // Manejar errores con toast
        if (response.error) {
            return toast.error(response?.err?.response?.data?.message);
        }

        // Actualizar el estado con las habitaciones disponibles
        setAvailableRooms(response.data.availableRooms);
    };

   
    return {
        search,
        city,
        setCity,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        people,
        setPeople,
        searchroom,
        availableRooms
    };
};