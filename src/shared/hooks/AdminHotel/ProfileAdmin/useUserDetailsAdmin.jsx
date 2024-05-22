import {useLogout as logOut} from "../../useLogout"
import { useState } from 'react'

const getUserAdminDetails = () =>{
    const loggedUser = localStorage.getItem('adminhotel')
    if(loggedUser) return JSON.parse(loggedUser)
    return null
}

const logoutSys = ()=>{
    logOut()
}

export const useUserDetailsAdmin = () => {
    const [loggedUser, setUserDetails] = useState(getUserAdminDetails())
    return {
      isLogged: Boolean(loggedUser),
      username: loggedUser?.username ? loggedUser.username : 'Guest',
      nameUser: loggedUser?.nameUser ? loggedUser.nameUser : 'Guest',
      email: loggedUser?.email ? loggedUser.email : 'Guest',
      logoutSys
    }
}

