import { useState } from "react";
import toast from "react-hot-toast";
import { getCategorysRoomsRequest } from "../../../../services/apiAdmin";

export const useGetCategoriesR = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesRooms, setCategoriesRooms] = useState([]);

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const response = await getCategorysRoomsRequest();
      console.log("Full response from API:", response);
      setIsLoading(false);

      if (response.error) {
        console.error("Error in response:", response.err);
        toast.error(
          response.err?.response?.data?.msg ||
          response.err?.data?.msg ||
          "Error getting categories. Try again."
        );
      } else {
        console.log("Response data:", response);
        
        // Aquí verificamos si la respuesta tiene la estructura correcta
        if (Array.isArray(response.category)) {
          setCategoriesRooms(response.category); // Ajuste para la estructura correcta
          console.log("Categories received:", response.category);
        } else {
          setCategoriesRooms([]); // Si no hay datos, aseguramos que sea un array vacío
          console.warn("Category is not in the response or is empty");
        }
      }
    } catch (error) {
      console.error("Catch block error:", error);
      setIsLoading(false);
      toast.error("Error getting categories. Try again.");
    }
  };

  return {
    getCategories,
    isLoading,
    categoriesRooms,
  };
};
