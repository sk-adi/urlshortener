import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../api/auth'

function ProtectedRoutes() {
    const [isAuthenticated,setIsAuthenticated]=useState(null)
    useEffect(()=>{
        const checkAuth=async()=>{
            const token=sessionStorage.getItem("token")
            if(!token){
                setIsAuthenticated(false)
            }
            const authenticatedUser=await isLoggedIn(token)
            setIsAuthenticated(authenticatedUser.success)
        }
        
        checkAuth()
    },[])

    if(isAuthenticated===null) return <p>Loading...</p>

    return isAuthenticated ? <Outlet/>:<Navigate to="/login"/>
}

export default ProtectedRoutes