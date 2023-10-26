import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import '@/assets/css/index.less'
// import App from '@/App'
// import Demo from './views/demo'
import WorkBench from './views/workBench'
import InvestMent from './views/insertment'
// import Demo from './views/workBench/demo'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <HashRouter>
    <InvestMent />
  </HashRouter>
)
