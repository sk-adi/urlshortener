import React, { useEffect, useState } from 'react'
import { isLoggedIn } from '../api/auth'
import { Navigate } from 'react-router-dom'

function RouteProtect() {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    useEffect(() => {
        const checkAuth = async () => {
            const token = sessionStorage.getItem("token")
            if (!token) {
                setIsAuthenticated(false)
            }
            const authenticatedUser = await isLoggedIn(token)
            setIsAuthenticated(authenticatedUser.success)
        }

        checkAuth()
    }, [])

    if (isAuthenticated === null) return <p>Loading...</p>

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default RouteProtect