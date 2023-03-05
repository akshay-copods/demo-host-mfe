import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    let auth = { 'token': localStorage.getItem('id') }
    console.log('protectedRoute', auth)
    return (
        auth.token ? <Outlet /> : <Navigate to='/' />
    )
}

export default ProtectedRoute
