import React, { useState } from 'react'
import styles from './index.module.less'
import classNames from 'classnames'
interface Props {
  visible?: boolean
  cardLayouts?: unknown
}
export default function MenuList(props: Props) {
  const { visible, cardLayouts } = props
  const [cardList, setCardList] = useState([
    { id: 1, cardName: '测试1', description: '本地实现' }
  ])
  return (
    <div
      className={classNames({
        [styles['menu-list']]: true,
        [styles['menu-list-collapsed']]: !visible
      })}
      draggable={true}
      onDragStart={(e) => {
        console.log(e)
      }}
    >
      {cardList?.map((item: any) => {
        return (
          <div key={item.id} className={styles['menu-item']}>
            <div className={styles['card-name']}>{item.cardName}</div>
            <div className={styles['card-description']}>{item.description}</div>
          </div>
        )
      })}
    </div>
  )
}
