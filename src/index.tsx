import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import '@/assets/css/index.less'
import App from '@/App'
import Demo from './views/demo'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <HashRouter>
    <App />
    {/* <Demo /> */}
  </HashRouter>
)
