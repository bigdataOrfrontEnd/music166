import React from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
  name?: string
}
const Discover = (props: IProps) => {
  return <div>{props.name}</div>
}
export default Discover
