import { useState } from 'react';
import './deleteUser.css'

export const DeleteAdmin = ({ onDelete, onCancel }) => {
    const [password, setPassword] = useState('');

    const handleConfirmDelete = () => {
        // Aquí puedes validar la contraseña antes de ejecutar onDelete
        onDelete(password);
        // Limpia el campo de contraseña después de confirmar la eliminación
        setPassword('');
    };



    return (
        <div className="confirm-delete-box">
        <div className="confirm-delete-content">
          <p>¿Estás seguro de que deseas eliminar este usuario?</p>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="confirm-delete-buttons">
            <button type="button" className="btn btn-success" onClick={handleConfirmDelete}>
              Confirm
            </button>
            <button type="button" className="btn btn-danger" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
}

export default DeleteAdmin;