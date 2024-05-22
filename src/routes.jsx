import App from "./App";
import { ContentRole } from "./Components/ContentRole";
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage.jsx'
//Rutas de cliente
import { RoomsClient } from "./Pages/HomePages/ClientPage/RoomsClient";
import { HotelsClient } from "./Pages/HomePages/ClientPage/HotelsClient";
import { ServicesClient } from "./Pages/HomePages/ClientPage/ServicesClient.jsx";
import { ReservasClient } from "./Pages/HomePages/ClientPage/ReservasClient.jsx";
import { ProfileClient } from "./Pages/HomePages/ClientPage/ProfileClient.jsx";
import { HomeClient } from "./Pages/HomePages/ClientPage/HomeClient";
import { AdminUsers } from "./Pages/HomePages/AdminPages/AdminUsers.jsx";
import { AdminCategories } from "./Pages/HomePages/AdminPages/AdminCategories.jsx";
import { AdminHotels } from "./Pages/HomePages/AdminPages/AdminHotels.jsx";
import { HomeAdminApp } from "./Pages/HomePages/AdminPages/HomeAdminApp.jsx";
import { AdminProfile } from "./Pages/HomePages/AdminPages/AdminProfile.jsx";
//Admin Hotel
import { HomeAdminHotel } from "./Pages/HomePages/AdminHotel/HomeAdminHotel";
import { Adittionals } from './Pages/HomePages/AdminHotel/Adittionals.jsx'
import { Events } from "./Pages/HomePages/AdminHotel/Events.jsx";
import { AvailableRooms } from "./Pages/HomePages/AdminHotel/AvailableRooms";
import { ProfileAdmin } from "./Pages/HomePages/AdminHotel/ProfileAdmin.jsx";
import { CategoriesAdminHotel } from "./Pages/HomePages/AdminHotel/CategoriesAdminHotel.jsx";
import { EventsHotel } from "./Pages/HomePages/AdminHotel/EventsHotel.jsx"
import { Rooms } from "./Pages/HomePages/AdminHotel/Rooms.jsx";

export const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/home/*',
        element: <ContentRole />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
    //Parte de Cliente (Pampichi)
    {
        path: '/home/zaru/rooms',
        element: <RoomsClient />
    },
    {
        path: '/home/zaru/hotels',
        element: <HotelsClient />
    },
    {
        path: '/home/zaru/services',
        element: <ServicesClient />
    },
    {
        path: '/home/zaru/reservas',
        element: <ReservasClient />
    },
    //Cliente opciones user  
    {
        path: '/home/zaru/profile',
        element: <ProfileClient />
    },
    {
        path: '/home/zaru/home',
        element: <HomeClient />
    },
    //Rutas admin
    {
        path: '/home/zaru/admin/home',
        element: <HomeAdminApp />
    },
    {
        path: '/home/zaru/admin/users',
        element: <AdminUsers />
    },
    {
        path: '/home/zaru/admin/categoriesH',
        element: <AdminCategories />
    },
    {
        path: '/home/zaru/admin/hotels',
        element: <AdminHotels />
    },
    {
        path: '/home/zaru/admin/profile',
        element: <AdminProfile></AdminProfile>
    },
    //Ruta Admin Main
    //ADMIN HOTEL
    {
        path: '/home/zaru/adminHotel/home',
        element: <HomeAdminHotel />
    },
    /*{
        path: '/home/zaru/adminHotel/availableRooms',
        element: <AvailRooms/>
    },*/
    {
        path: '/home/zaru/adminHotel/profileAdmin',
        element: <ProfileAdmin/>
    },
    {
        path: '/home/zaru/adminHotel/eventsAdminHotel',
        element: <EventsHotel/>
    },
    {
        path: '/home/zaru/adminHotel/categoriesAdminHotel',
        element: <CategoriesAdminHotel/>
    },
    {
        path: '/home/zaru/adminHotel/additionals',
        element: <Adittionals></Adittionals>
    },
    {
        path: '/home/zaru/adminHotel/events',
        element: <Events></Events>
    },
    {
        path: '/home/zaru/adminHotel/availableRooms',
        element: <AvailableRooms/>
    },
    {
        path: '/home/zaru/adminHotel/rooms',
        element: <Rooms/>
    }

]