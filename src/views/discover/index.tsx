import React, { memo } from 'react'

import './style.less'
const lists = [
  '发现音乐',
  '我的音乐',
  '关注',
  '商城',
  '音乐人',
  '云推歌',
  '下载客户端'
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
                  {item}
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
