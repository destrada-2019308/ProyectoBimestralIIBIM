import styled from 'styled-components';
import { useState } from "react";
import logo from "../../assets/img/logo.png"
import { useNavigate } from 'react-router-dom';

export const NavbarAdminHotel = () => {
    /* Logo de Zaru*/
    const navigate = useNavigate()

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const hideSidebar = () => {
        setSidebarVisible(false);
    };

    const toggleProfileDropdown = () => {
        setProfileDropdownVisible(!profileDropdownVisible);
    };

    const hideProfileDropdown = () => {
        setProfileDropdownVisible(false);
    };

    /* Logout */
    const handleLogout = () => {
        logoutSys();
    }

    const goToPage = (ruta) => {
        navigate(ruta)
    }

    return (
        <StyledNavbar>
            <ul className='navbar'>
                <li onClick={() => goToPage('/home/zaru/adminHotel/home')} className='logo-container'>
                    <a> <img src={logo} alt="Logo" width={50} /> </a>
                </li>
                <li onClick={() => goToPage('/home/zaru/adminHotel/availableRooms')} className='ocultarElementos'>
                    <a href='#'> Habitaciones Disponibles </a>
                </li>
                <li onClick={() => goToPage('/home/zaru/adminHotel/rooms')} className='ocultarElementos'>
                    <a href="#">CRUD ROOMS</a>
                </li>
                <li onClick={() => goToPage('/home/zaru/adminHotel/categoriesAdminHotel')} className='ocultarElementos'>
                    <a href="#">CRUD Categorias hotel</a>
                </li>
                <li onClick={() => goToPage('/home/zaru/adminHotel/eventsAdminHotel')} className='ocultarElementos'>
                    <a href="#">Ver EVENTOS</a>
                </li>
                <li onClick={() => goToPage('/home/zaru/adminHotel/additionals')} className='ocultarElementos'>
                    <a href="#">Addtionals</a>
                </li>
                <li onClick={() => goToPage('/home/zaru/adminHotel/events')} className='ocultarElementos'>
                    <a href="#">Events</a>
                </li>
                <li  className='perfil' onClick={toggleProfileDropdown} >
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                        </svg>
                    </a>
                    <ul className={`perfil-dropdown ${profileDropdownVisible ? 'visible' : ''}`}>
                        <li onClick={() => goToPage('/home/zaru/adminHotel/profileAdmin')}><a href="#">ProfileAdmin</a></li>
                        <li onClick={handleLogout}><a href="/">Logout</a></li>
                    </ul>
                </li>
                <li className='boton'><a href="#" onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="28"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a></li>
            </ul>
            { /* Aqui es el sidebar */}
            <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                <li><a href="#" onClick={hideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a></li>
                <li onClick={() => goToPage('/home/zaru/admin/hotels')}><a href="#">Hotels</a></li>
                <li onClick={() => goToPage('/home/zaru/admin/categoriesH')}><a href="#">Caegoria hotel</a></li>
                <li onClick={() => goToPage('/home/zaru/admin/users')}><a href="#">Users</a></li>
                <li onClick={handleLogout}><a href="/">Logout</a></li>
            </ul>
        </StyledNavbar>
    )
}

export const StyledNavbar = styled.header`
    top: 0;
    position: absolute; 
    z-index: 2;
    width: 100%;
    background-color: white;
    right: 0;
    .navbar {        
        list-style: none;        
        display: flex;
        margin: 0;
        height: 5vh;
        
        
    }

    .navbar li {       
        height: 100%;
        align-items: center;
    }
    
    .navbar a {
        display: flex;
        align-items: center;
        padding: 0 15px;
        text-decoration: none;
        color: black;
        height: 100%;
        width: 100%; /* Establece el ancho de los elementos <a> al 100% */
    }

    .navbar a:hover {
        background-color: #f0f0f0;
    }
    
    .logo-container {
        
        margin-right: auto; /* Mueve el logo a la izquierda */
    }
    /* Sidebar */
    .sidebar {
        position: fixed;
        margin: 0;
        padding: 0;
        top: 0; 
        right: 0;
        height: 100vh;
        width: 250px;
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(12px);
        box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);     
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }

    .sidebar.visible {
        transform: translateX(0);
    }

    .sidebar ul {        
        padding: 0;
    }

    .sidebar li {        
        list-style: none;
        padding: 10px;
        width: 100%;
        
    }

    .sidebar a {   
        display: flex;
        text-decoration: none;
        color: black;     
    }

    .sidebar li:hover {
        background-color: #bebebe;
    }

    //ocultar boton
    .navbar .boton {
        display: none;
    }

    .logo-container a:hover {
        background-color: transparent; /* Anula el efecto hover */
    }

    /* Dropdown para el perfil */

    .perfil-dropdown {
    position: absolute;
    top: 100%;
    
    right: 0;
     //animación
    transform: translateY(-10px);
    opacity: 0; 
    transition: transform 0.3s ease, opacity 0.3s ease; 
    
    background-color: white;
    border: 1px solid #ccc;
    justify-content: center;
    border-radius: 4px;
}

.perfil-dropdown.visible {
    transform: translateY(0); /* Muestra el dropdown desplazándolo hacia abajo */
    opacity: 1; /* Hace visible el dropdown */
}

    .perfil-dropdown.visible {
        display: block;
    }

    .perfil-dropdown li {
        padding: 10px;
    }

    .perfil-dropdown a {
        text-decoration: none;
        color: black;
    }


    //aplicare responsive con los iconos para celular
   @media (max-width: 800px){    

  .navbar .ocultarElementos{
    display: none;
  }
  .navbar .boton{
    display: flex;
  }

  .perfil-dropdown.visible{
    display: none;
  }

  
}

@media (max-width: 480px){    

    .sidebar{
        width: 100%;
        padding: 15px 8px;
    }
    

}

`; 