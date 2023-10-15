import React, { useState } from 'react'
import GridLayout from './gridLayout'
import MenuList from './menuList'
import classNames from 'classnames'
import {
  SaveOutlined,
  SyncOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import styles from './index.module.less'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

export default function WorkBench() {
  const [visible, setVisible] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [cardLayouts, setCardLayouts] = useState({
    lg: [{ i: 'A', x: 4, y: 5, w: 6, h: 15 }]
  })
  const [temLayouts, setTemLayouts] = useState({ lg: [] })
  const [globalValue, setGlobalValue] = useState({ name: 'lee' })
  const [isAdd, setIsAdd] = useState(false)
  const [originLayouts, setOriginLayouts] = useState({ lg: [] })
  const [droppingItem, setDroppingItem] = useState({
    h: 4,
    w: 1
  })
  const hanleSave = () => {
    console.log('lll')
  }
  const handleReload = () => {
    console.log('sddd')
  }
  const changeVisible = () => {
    const flag = !visible
    setVisible(flag)
  }
  const onEdit = () => {
    console.log('编辑')
  }
  const onSave = () => {
    console.log('onSave')
  }
  const onDrop = () => {
    console.log('onDrop')
  }
  const onRemove = () => {
    console.log('onRemove')
  }
  return (
    <div className={styles['workbench-layout']}>
      <div
        className={classNames({
          [styles['card-content']]: true,
          // visible
          [styles['card-content-collapsed']]: visible
        })}
      >
        <div className={styles['tool-icon-wrap']}>
          <SaveOutlined onClick={hanleSave} />
          <SyncOutlined onClick={handleReload} />
          {visible ? (
            <MenuUnfoldOutlined onClick={changeVisible} />
          ) : (
            <MenuFoldOutlined onClick={changeVisible} />
          )}
        </div>
      </div>
      <GridLayout
        droppingItem={droppingItem}
        isFullscreen={isFullscreen}
        setIsFullscreen={setIsFullscreen}
        onEdit={onEdit}
        onSave={onSave}
        onDrop={onDrop}
        onRemove={onRemove}
        visible={visible}
        cardLayouts={cardLayouts}
        setCardLayouts={setCardLayouts}
        setTemLayouts={setTemLayouts}
        isAdd={isAdd}
        // {...layoutConfig}
      />
      <MenuList visible={visible} cardLayouts={cardLayouts} />
    </div>
  )
}
