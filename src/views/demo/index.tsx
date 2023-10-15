import React, { memo } from 'react'
import Canvas from './canvas'
import Drag from './drag'
const Demo = () => {
  return (
    <div>
      {/* <Canvas /> */}
      <Drag />
    </div>
  )
}
export default memo(Demo)
