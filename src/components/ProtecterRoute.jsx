import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtecterRoute = ({permission, children, redirectTo='/'}) => {

    if(!permission){
    return <Navigate to={redirectTo} />
    }

  return <Outlet/>
}

export default ProtecterRoute
