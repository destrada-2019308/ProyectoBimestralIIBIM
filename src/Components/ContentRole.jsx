import { Routes, Route } from 'react-router-dom'
import {HomeAdminHotel} from '../Pages/HomePages/AdminHotel/HomeAdminHotel.jsx'
import { HomeClient } from '../Pages/HomePages/ClientPage/HomeClient.jsx'
import { HomeAdminApp } from '../Pages/HomePages/AdminPages/HomeAdminApp.jsx'

export const ContentRole = () => {

  const userDetails = localStorage.getItem('user')
  const role = JSON.parse(userDetails).role
  return (
    <Routes>
      {
        role === 'ADMIN' ? <Route path='zaru' element={<HomeAdminApp />} /> : (
          role === 'CLIENT' ? <Route path='zaru' element={<HomeClient />} /> :
            <Route path='zaru' element={<HomeAdminHotel />} />
        )
      }
    </Routes>
  )
}
