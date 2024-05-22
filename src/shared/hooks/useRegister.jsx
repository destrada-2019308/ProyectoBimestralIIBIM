import { useState } from "react";
import toast from "react-hot-toast";
import { registerRequest } from "../../services/api.js";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);

    const register = async(nameUser,
        surname,
        username, 
        password,
        email, 
        phone,
        imagesUser) =>{
        setIsLoading(true);
        
        const user = {
            nameUser,
            surname,
            username,
            password,
            email,
            phone,
            imagesUser
        }

        //Consultar al API
        const response = await registerRequest(user);
        setIsLoading(false);
        
        if(response.error){
            //? para parametros opcionales
            if(response?.err?.response?.data?.errors){
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
                    'Error general al intentar registrar el usuario. Intenta de nuevo.'
                )
        }else {
          // Registro exitoso
          toast.success('¡Usuario registrado exitosamente!');
            //navigate('/register')
      }
    }
  return {
    register, 
    isLoading
    }
}
