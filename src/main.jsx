import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css'
//Importe Bootstrap




export const Main = () => {
  const elementRoutes = useRoutes(routes)
  return (
    <>
    {elementRoutes}
    <Toaster position='bottom-right' reverseOrder={false}/>
    </>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main></Main>
    </BrowserRouter>
  </React.StrictMode>
)