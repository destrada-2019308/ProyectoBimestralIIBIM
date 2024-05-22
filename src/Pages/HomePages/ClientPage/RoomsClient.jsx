import { Navbar } from "../../../Components/Client/Navbar"
import { Rooms } from "../../../Components/Client/Rooms"
import { useRoom } from "../../../shared/hooks/Client/useRoom"
import { useCategoryRooms } from "../../../shared/hooks/Client/useCategoryRooms"
import { useEffect, useState } from "react"
import { Footer } from "./Footer"


export const RoomsClient = () => {
  const { getCategoryRooms, category, isFletching} = useCategoryRooms()
  const { getRooms, rooms, isFetching } = useRoom()
  useEffect(() => {
    getRooms()
    getCategoryRooms()
    
  }, [])
  if(isFetching || isFletching ){
    return(
      <span>Loading...</span>
    )
  }
  
  return (
    <>
      <Navbar />
      
      <Rooms rooms={rooms} />
      <Footer />
    </>
  )
}
