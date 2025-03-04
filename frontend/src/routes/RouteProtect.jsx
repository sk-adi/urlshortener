import React, { useEffect, useState } from 'react'
import { isLoggedIn } from '../api/auth'
import { Navigate, Outlet } from 'react-router-dom'

function RouteProtect() {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    useEffect(() => {
        const checkAuth = async () => {
            const token = sessionStorage.getItem("token")
            console.log(token)
            if (!token) {
                setIsAuthenticated(false)
                return ;
            }
            try {
                console.log("calling islogged in function")
                const authenticatedUser = await isLoggedIn(token)
                setIsAuthenticated(authenticatedUser.success)
                
            } catch (error) {
                setIsAuthenticated(false);
                
            }
        }

        checkAuth()
    }, [])

    if (isAuthenticated === null) return <p>Loading...</p>

    return isAuthenticated ? <Outlet/> : <Navigate to="/login" />
}

export default RouteProtect