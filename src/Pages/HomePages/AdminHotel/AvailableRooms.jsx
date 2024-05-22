import { useEffect } from 'react'
import { NavbarAdminHotel } from '../../../Components/AdminHotel/NavBarAdminHotel'
import { Available } from '../../../Components/AdminHotel/Available'
import { useCategoryRooms } from "../../../shared/hooks/Client/useCategoryRooms"
import { useRoom } from "../../../shared/hooks/Client/useRoom"


export const AvailableRooms = () => {
  
    
    const { getRooms, rooms, isFetching } = useRoom()
    useEffect(() => {
      getRooms()
      
      
    }, [])
    if(isFetching ){
      return(
        <span>Loading...</span>
      )
    }
    
    return (
    <>
        <NavbarAdminHotel/>
        <Available rooms={rooms} />
        
    </>
  )
}