import React from 'react'
import Dashboardnav from './Dashboardnav'
import { Outlet } from 'react-router-dom'

const Shared = ({id}) => {
  return (
    <div>

    <Dashboardnav id={id} />
    <Outlet/>

    </div>
  )
}

export default Shared