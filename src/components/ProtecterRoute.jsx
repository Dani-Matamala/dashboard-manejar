import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const permission = localStorage.getItem("permission");

const ProtecterRoute = ({children, redirectTo='/'}) => {

    if(!permission){
    return <Navigate to={redirectTo} />
    }

  return <Outlet/>
}

export default ProtecterRoute
