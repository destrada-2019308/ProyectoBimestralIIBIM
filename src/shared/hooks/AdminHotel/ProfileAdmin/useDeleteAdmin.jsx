import { deleteUser } from '../../../../services/apiUser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useDeleteAdmin = () => {
    const deleteUserClient = async (password, navigate) => {
        const response = await deleteUser(password);
    
        if (response.error) {
          console.log(response.error);
          return toast.error(
            response?.e?.response?.data ||
              'Error al intentar Eliminar Perfil. ¡Inténtalo más tarde!'
          );
        }
    
        navigate('/');
        return toast.success('Deleted User');
      };
    
      return { deleteUserClient };
}
