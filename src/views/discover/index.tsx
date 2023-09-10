import React, { memo } from 'react'

import './style.less'
const lists = [
  { name: '发现音乐', to: '/discover' },
  { name: '我的音乐', to: '/my' },
  { name: '关注', to: '/focus' },
  { name: '商城', to: '' },
  { name: '音乐人', to: '' },
  { name: '云推歌', to: '' },
  { name: '下载客户端', to: '/download' }
]
const Discover: React.FC = () => {
  return (
    <div className="top">
      <div className="swarrp">
        <div className="left">
          <h1 className="logo"></h1>
          <ul className="list">
            {lists.map((item, index) => {
              return (
                <li className="item" key={index}>
                  {item.name}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="right">
          <div className="search">
            <input type="search" className="input" />
          </div>
          <div className="cz">
            <a href="">创作者中心</a>
          </div>
          <div className="peple">
            <a href="#">登录</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Discover)
