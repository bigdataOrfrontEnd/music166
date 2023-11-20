import React, { useEffect, useState } from 'react'
import GridLayout from './gridLayout'
import MenuList from './menuList'
import axios from 'axios'
import styles from './index.module.less'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

export default function WorkBench() {
  const [visible, setVisible] = useState(false)
  const [curCardMenu, setCurCardMenu] = useState({} as any)
  const [cardLayouts, setCardLayouts] = useState({
    lg: []
  })
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/workbetn')
      .then((response) => {
        setCardList(response.data.list)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const changeVisible = () => {
    const flag = !visible
    setVisible(flag)
    console.log(flag)
  }

  const onDrop = (layout: any, layoutItem: any) => {
    //拖拽停止后运行的
    console.log('onDrop未＋hee', layoutItem)
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
  const onRemove = (id: any) => {
    const newCardLayouts = cardLayouts.lg.filter((item: any) => item.i !== id)
    setCardLayouts({ lg: newCardLayouts })
  }
  const onDragStart = (card: any) => {
    setCurCardMenu(card)
  }
  return (
    <div className={styles['workbench-layout']}>
      <GridLayout
        onDrop={onDrop}
        onRemove={onRemove}
        visible={visible}
        cardLayouts={cardLayouts}
        setCardLayouts={setCardLayouts}
      />
      <div className={styles['list']}>
        <div className={styles['carte']} onClick={changeVisible}>
          <span>卡片库</span>
        </div>
      </div>
      <MenuList
        visible={visible}
        cardList={cardList}
        cardLayouts={cardLayouts}
        onDragStart={onDragStart}
        changeVisible={changeVisible}
      />
    </div>
  )
}
