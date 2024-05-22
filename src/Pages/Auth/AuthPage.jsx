import { Login } from "../../Components/Login/Login.jsx";
import { Register } from "../../Components/Register/Register.jsx";

/* Importar css o cualquier paquete adicional*/
import { useRoutes } from "react-router-dom";

import { useState, useEffect } from "react"

import './AuthPage.css'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false)

  /*  */


  const handleAuthPage = () => {
    setIsLogin((prev) => !prev)
  }



  return (
    <div className="auth-container">
      {
        isLogin ? (
          <Register switchAuthAndler={handleAuthPage} />
        ) : (
          <Login switchAuthAndler={handleAuthPage} />
        )
      }
    </div>

  )
}