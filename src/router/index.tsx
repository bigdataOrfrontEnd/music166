import React from 'react'
import Discover from '@/views/discover'
import { RouteObject, Navigate } from 'react-router-dom'
import My from '@/views/my'
import Focus from '@/views/fouce'
import Download from '@/views/dawlond'

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
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]
export default routers
