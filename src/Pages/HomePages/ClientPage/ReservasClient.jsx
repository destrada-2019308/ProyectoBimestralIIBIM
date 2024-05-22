import { Navbar } from "../../../Components/Client/Navbar"
import { Reservations } from "../../../Components/Client/Reservations"
import { useMyReservations } from "../../../shared/hooks/Client/useMyReservations"
import { useEffect } from "react"
import { Footer } from "./Footer"
export const ReservasClient = () => {
  const { reservations, getReservation } = useMyReservations();
  
  useEffect(() => {
    getReservation();
  }, []);

  return (
    <>
        <Navbar/>
        <Reservations reservations={reservations} />
        <Footer />
    </>
  )
}


