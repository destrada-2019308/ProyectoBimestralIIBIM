// useDeleteRoom.js

import { useState } from 'react';
import { deleteRoom } from '../../../../services/apiAdmin';

export const useDeleteRoom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteExistingRoom = async (roomId, config) => {
    setIsLoading(true);
    try {
      const response = await deleteRoom(roomId, config);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteExistingRoom,
    isLoading,
    error,
  };
};
