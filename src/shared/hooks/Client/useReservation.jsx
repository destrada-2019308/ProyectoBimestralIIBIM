import { useState } from "react";
import toast from "react-hot-toast";
import { reserveRequest } from '../../../services/api';
import { useNavigate } from "react-router-dom";

export const useReservation = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const reserve = async (reserveData) => {
        setLoading(true);  // Cambiado setIsLoading a setLoading

        // Enviar la solicitud de reserva
        const response = await reserveRequest(reserveData);
        setLoading(false);  // Cambiado setIsLoading a setLoading

        // Manejo de error con el paquete de toast
        if (response.error) {
            return toast.error(
                response?.err?.response?.data?.message || 'Error al intentar hacer la reserva :c ¡Intentalo más tarde!'
            );
        }

        const { message, invoice } = response.data;
        console.log(response.data);

        // Almacenar información relevante en localStorage si es necesario
        // localStorage.setItem('reservation', JSON.stringify(reservationData));

        // Navegar a una página de confirmación u otra ruta deseada
        
        return toast.success(message);
    };

    return {
        reserve,
        loading,
    };
};