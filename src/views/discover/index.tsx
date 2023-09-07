import React, { memo } from 'react'
import type { ReactNode } from 'react'
import './style.less'
interface IProps {
  children?: ReactNode
  name?: string
}
const Discover: React.FC<IProps> = () => {
  return <div className="top">Discover</div>
}
export default memo(Discover)
