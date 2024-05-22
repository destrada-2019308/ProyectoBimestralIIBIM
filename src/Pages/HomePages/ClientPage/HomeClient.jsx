import { Navbar } from "../../../Components/Client/Navbar"
import { Home } from "../../../Components/Client/Home"
import styled from "styled-components"
import { Footer } from "./Footer"
const StyledPage = styled.div`
    background-color: #2c4e4d;
    
    
`

export const HomeClient = () => {

  
  

  return (
    <>
    <StyledPage>
      <Navbar  />
      <Home />
      <Footer />
      </StyledPage> 
    </>
    
  )
}
