import React, { createContext, useContext, useState } from 'react'

export const authContext=createContext();
export default function AuthProvider({children}){
    const initialAuthUser=localStorage.getItem("users")
    const [authUser,setAuthUser]=useState(initialAuthUser ? JSON.parse(initialAuthUser):undefined)
  return (
    <authContext.Provider value={[authUser,setAuthUser]}>
            {children}
    </authContext.Provider>
  )
}

export const useAuth=()=>useContext(authContext)