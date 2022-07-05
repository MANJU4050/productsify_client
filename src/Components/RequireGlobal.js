import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useGlobal from '../hooks/useGlobal';
import Dashboardnav from './Dashboardnav';

const RequireGlobal = () => {
 const {accessToken} = useGlobal();
 const location =  useLocation();
 return(
    accessToken?.token?
    <>
    <Dashboardnav/>
    <Outlet/></>
    :
    <Navigate to='/' state= {{from: location}} replace />
 );
}

export default RequireGlobal