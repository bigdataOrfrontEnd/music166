import React from 'react'
import styles from './index.module.less'
import classNames from 'classnames'
import { CloseOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
interface Props {
  visible?: boolean
}
export default function MenuList(props: any) {
  const { visible, onDragStart, cardList } = props
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
          <Popover
            key={item.id}
            content={<div>2222</div>}
            trigger="hover"
            placement="left"
          >
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
              <div className={styles['card-description']}>
                {item.description}
              </div>
            </div>
          </Popover>
        )
      })}
    </div>
  )
}
