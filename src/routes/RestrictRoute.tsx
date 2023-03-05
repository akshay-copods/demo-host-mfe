import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RestrictRoute = () => {
    let auth = { 'token': localStorage.getItem('id') }
    return (

        auth.token ? <Navigate to='/on-boarding' /> : <Outlet />

    )
}

export default RestrictRoute
