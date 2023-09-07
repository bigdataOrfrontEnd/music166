import React from 'react'
import { useRoutes } from 'react-router-dom'
import routers from './router'

const App: React.FC = () => {
  return <div>{useRoutes(routers)}</div>
}

export default App
