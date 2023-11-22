import React from 'react'
import {
  UpSquareOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'
import styles from './index.module.less'
export default function Card() {
  return (
    <div className={styles['card']}>
      <div className={styles['card-item']}>
        <div className={styles['title']}>
          <div className={styles['leftIcon']}>
            <UpSquareOutlined />
          </div>
          <h1 className={styles['tit']}>定期存款</h1>
          <div className={styles['right']}>
            <UpSquareOutlined />
          </div>
        </div>
        <div className={styles['bt']}>意向阶段</div>
        <div className={styles['line']}></div>
        <div className={styles['content']}>
          <div className={styles['left']}>
            <p>存入</p>
            <p>2300万</p>
          </div>
          <div className={styles['right']}>
            <p>存出</p>
            <p>4235万</p>
          </div>
        </div>
      </div>
    </div>
  )
}
