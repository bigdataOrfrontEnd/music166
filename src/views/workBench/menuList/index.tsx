import React, { useState } from 'react'
import styles from './index.module.less'
import classNames from 'classnames'
import { CloseOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
import { cloneDeep } from 'lodash'
interface OpenList {
  [key: string]: boolean
}
export default function MenuList(props: any) {
  const { visible, onDragStart, cardList } = props
  const [openList, setOpenList] = useState<OpenList>({})
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
            open={openList[item.cardName] ?? false}
          >
            <div
              key={item.id}
              className={styles['menu-item']}
              draggable={true}
              onMouseEnter={() => {
                console.log('运行事件')
                const newOpenList = cloneDeep(openList)
                console.log(newOpenList)
                for (const [key] of Object.entries(newOpenList)) {
                  newOpenList[key] = false
                }
                newOpenList[item.cardName] = true
                console.log(newOpenList)
                setOpenList(newOpenList)
              }}
              onMouseLeave={() => {
                console.log('运行时间')
                const newOpenList = cloneDeep(openList)
                console.log(newOpenList)
                for (const [key] of Object.entries(newOpenList)) {
                  newOpenList[key] = false
                }
                newOpenList[item.cardName] = false
                setOpenList(newOpenList)
              }}
              onDragStart={(e) => {
                const newOpenList = cloneDeep(openList)
                for (const [key] of Object.entries(newOpenList)) {
                  newOpenList[key] = false
                }
                newOpenList[item.cardName] = false
                setOpenList(newOpenList)
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
