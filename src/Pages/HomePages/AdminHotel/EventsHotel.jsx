import { useEffect } from 'react';
import { NavbarAdminHotel } from '../../../Components/AdminHotel/NavBarAdminHotel';
import { Events } from '../../../Components/AdminHotel/Events';
import { useEvent } from '../../../shared/hooks/AdminHotel/useEvent';

export const EventsHotel = () => {
  const { getEvents, events, isFetching } = useEvent();

  useEffect(() => {
    getEvents();
  }, []);

  if (isFetching) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <NavbarAdminHotel />
      <Events events={events} />
    </>
  );
};
