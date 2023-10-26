import React, { useState } from 'react'
import styles from './index.module.less'
import classNames from 'classnames'
import { CloseOutlined } from '@ant-design/icons'
interface Props {
  visible?: boolean
  cardLayouts?: unknown
}
export default function MenuList(props: any) {
  const { visible, cardLayouts, onDragStart } = props
  const [cardList, setCardList] = useState([
    {
      cardId: 'ims/TaskBoard',
      cardName: '任务看板',
      description: '监听',
      height: 11,
      id: 1,
      remark: null,
      roleIds: '1,1006',
      roleName: '系统管理员',
      siteId: 'ims',
      status: 1,
      width: 4
    },
    {
      cardId: 'ims/InvestmentCalendar',
      cardName: '投资日历',
      description: '投资日历',
      height: 11,
      id: 2,
      remark: null,
      roleIds: '1,1006',
      roleName: '系统管理员',
      siteId: 'ims',
      status: 1,
      width: 4
    }
  ])
  return (
    <div
      className={classNames({
        [styles['menu-list']]: true,
        [styles['menu-list-collapsed']]: !visible
      })}
    >
      <div className={styles['box']}>
        <div className={styles['title']}>卡片库</div>
        <CloseOutlined
          onClick={() => {
            props.changeVisible()
          }}
        />
      </div>
      {cardList?.map((item: any) => {
        return (
          <div
            key={item.id}
            className={styles['menu-item']}
            draggable={true}
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', '')
              onDragStart({ i: item.cardId, ...item })
            }}
          >
            <div className={styles['card-name']}>{item.cardName}</div>
            <div className={styles['card-description']}>{item.description}</div>
          </div>
        )
      })}
    </div>
  )
}
