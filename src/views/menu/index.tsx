import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
export type MenuItem = {
  id: string | number
  pId: string | number
  icon?: string
  name: string
  url?: string
  isDefaultOpen?: boolean
}
type MenuList = Array<{
  data: MenuItem
  items?: MenuList
  name?: string
}>
export default function Mene() {
  useEffect(() => {
    axios
      .get('http://localhost:8080/menu')
      .then((response) => {
        setMenuList(response.data.list)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  const [menuList, setMenuList] = useState([])
  const [openKeys, setOpenKeys] = useState<React.Key[]>([])
  const menuProps: MenuProps = {
    mode: 'inline',
    theme: 'dark',
    openKeys: openKeys as string[],
    items: menuList,
    style: { width: 256 }
  }
  const renderMenu = (list: MenuList) => {
    return <div>1111</div>
  }
  return (
    <div>
      <Menu {...menuProps}>
        {/* <div>11111</div>
        {renderMenu(menuList as MenuList)} */}
      </Menu>
    </div>
  )
}
