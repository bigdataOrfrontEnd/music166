import React from 'react'
import Discover from '@/views/discover'
import { RouteObject, Navigate } from 'react-router-dom'
import My from '@/views/my'

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/my',
    element: <My />
  }
]
export default routers
