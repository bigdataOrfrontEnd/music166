import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'
type Item = {
  name: string
  to?: string
  type: string
  link?: string
}
const lists = [
  { name: '发现音乐', to: '/discover', type: 'path' },
  { name: '我的音乐', to: '/my', type: 'path' },
  { name: '关注', to: '/focus', type: 'path' },
  { name: '商城', link: 'https://music.163.com/store/product', type: 'link' },
  { name: '音乐人', link: 'https://music.163.com/st/musician', type: 'link' },
  {
    name: '云推歌',
    link: 'https://music.163.com/st/ad-song/login',
    type: 'link'
  },
  { name: '下载客户端', to: '/download', type: 'path' }
]
const showItem = (item: Item) => {
  if (item.type === 'path') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return <NavLink to={item.to!}>{item.name}</NavLink>
  } else {
    return (
      <a href={item.link} target="_blank" rel="noreferrer">
        {item.name}
      </a>
    )
  }
}
const Download = () => {
  return (
    <>
      <div className="top">
        <div className="swarrp">
          <div className="left">
            <h1 className="logo">
              <a href="#" className="logoItme">
                网易云音乐
              </a>
            </h1>
            <ul className="list">
              {lists.map((item, index) => {
                return (
                  <li className="item" key={index}>
                    {showItem(item)}
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
      <div className="content"> </div>
    </>
  )
}
export default memo(Download)
