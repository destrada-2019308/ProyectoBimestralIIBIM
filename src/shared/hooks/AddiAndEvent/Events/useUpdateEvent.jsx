import { useState } from "react";
import toast from "react-hot-toast";
import { updateEventRequest } from "../../../../services/apiAdmin";

export const useUpdateEvent = () => {
  const [updatedEvent, setUpdatedEvent] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const updateEvent = async (id, event) => {
    setIsFetching(true);
    try {
      const response = await updateEventRequest(id, event);
      if (response.error) {
        toast.error(
          response?.err?.response?.data?.message || 'Error updating event'
        );
        return;
      }
      setUpdatedEvent(response.data);
      toast.success('Event updated successfully');
    } catch (error) {
      toast.error('Error updating event');
    } finally {
      setIsFetching(false);
    }
  };

  return {
    updatedEvent,
    isFetching,
    updateEvent,
  };
};
