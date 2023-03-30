import React from 'react'
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

const permission = localStorage.getItem("permission");

const ProtecterRoute = ({handlePermission, redirectTo='/'}) => {

  useEffect(() => {
    console.log("se busco el permiso")
    const savedPermission = localStorage.getItem("permission");
    console.log(savedPermission, 'saved')
    if (savedPermission) {
      handlePermission(savedPermission);
    }
  }, []);

   return  permission ? <Outlet /> : <Navigate to={redirectTo}/>
}

export default ProtecterRoute
