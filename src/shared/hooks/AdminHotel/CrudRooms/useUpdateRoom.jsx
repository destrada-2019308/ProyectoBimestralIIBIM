// useUpdateRoom.js

import { useState } from 'react';
import { updateRoom } from '../../../../services/apiAdmin';

export const useUpdateRoom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateExistingRoom = async (roomId, formData, config) => {
    setIsLoading(true);
    try {
      const response = await updateRoom(roomId, formData, config);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateExistingRoom,
    isLoading,
    error,
  };
};
