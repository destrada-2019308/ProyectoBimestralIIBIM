import { Navbar } from "../../../Components/Client/Navbar"
import { Hotels } from "../../../Components/Client/Hotels"
import { Footer } from "./Footer"
//importar el hook para obtener la info
import { useHotels } from "../../../shared/hooks/Client/useHotels"
import { useEffect } from "react"

export const HotelsClient = () => {
  const { getHotels, hotels, isFetching } = useHotels()
  //colocar useEffectSniped
  useEffect(() => {
    //cargar los hoteles
    getHotels()
      
  }, [])
  //un if para cargar datos y si no hay poner loading
  if(isFetching ){
    return(
      <span>Loading...</span>
    )
  }

  return (
    <>
      <Navbar />
      {/* Agregar hotels para representar el estado de los hoteles en la app*/}
      <Hotels hotels={hotels} />
      <Footer />
    </>
  )
}

