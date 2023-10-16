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
  const [curCardMenu, setCurCardMenu] = useState({} as any)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [cardLayouts, setCardLayouts] = useState({
    lg: [
      {
        w: 1,
        h: 1,
        minW: 1,
        minH: 1,
        i: 'ims/TaskBoad',
        name: '任务看板'
      }
    ]
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
  const onDrop = (layoutItem: any) => {
    //拖拽停止后运行的

    console.log('onDrop', layoutItem)
    const newCardLayouts = cardLayouts.lg.concat({
      ...layoutItem,
      w: curCardMenu?.width,
      h: curCardMenu?.height,
      minW: curCardMenu?.width,
      minH: curCardMenu?.height,
      i: curCardMenu?.cardId,
      name: curCardMenu?.cardName
    })
    setCardLayouts({ lg: newCardLayouts })
  }
  const onRemove = () => {
    console.log('onRemove')
  }
  const onDragStart = (card: any) => {
    setDroppingItem({
      w: card.width,
      h: card.height
    })
    setCurCardMenu(card)
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
      </div>
      <MenuList
        visible={visible}
        cardLayouts={cardLayouts}
        onDragStart={onDragStart}
      />
    </div>
  )
}
