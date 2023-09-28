import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
export default function MyInput() {
  return (
    <div className="input">
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    </div>
  )
}
