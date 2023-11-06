import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routers from './router'
import styles from './app.module.less'
import classNames from 'classnames'
import Sider from './layout/Sider'
const App: React.FC = () => {
  const [collapse, setCollapse] = useState(false)
  return (
    <div className={styles['app-content']}>
      <div
        className={classNames({
          [styles['layout-main']]: true,
          [styles['layout-aside-collapse']]: collapse
        })}
      >
        <div className={styles['layout-body']}>
          <aside className={styles['layout-sider']}>
            <Sider />
          </aside>
          <div className={styles['layout-container']}>TabList</div>
          <div className={styles['layout-content']}>
            内容区
            {/* {useRoutes(routers)} */}
          </div>
        </div>
        <div
          className={classNames({
            [styles['layout-footer']]: true,
            [styles['layout-footer-collapsed']]: false
          })}
        >
          Footer
        </div>
      </div>
    </div>
  )
}

export default App
