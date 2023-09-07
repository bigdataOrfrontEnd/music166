import React, { memo } from 'react'
import './style.less'
const Canvas = () => {
  return (
    <div className="container">
      <canvas></canvas>
    </div>
  )
}
export default memo(Canvas)
