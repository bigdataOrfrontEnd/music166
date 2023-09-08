import React, { memo, useRef, useEffect } from 'react'
import './style.less'
type Circle = {
  x: number
  y: number
  r: number
  sAngle: number
  eAngle: number
  color?: string
}
const Canvas = () => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let canvasWidth: number
  let canvasHeight: number
  let ctx: CanvasRenderingContext2D
  useEffect(() => {
    const cavase = initCanvas()
    canvasWidth = cavase.width
    canvasHeight = cavase.height
    ctx = cavase.getContext('2d') as CanvasRenderingContext2D
    animate()
  })
  //设置文字
  const drawText = (text: string, x: number, y: number) => {
    ctx.font = '60px 宋体'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, x, y)
  }
  //获取时间
  const getCurrentTime = () => {
    const date = new Date()
    return [date.getHours(), date.getMinutes(), date.getSeconds()]
  }
  /**
   * 补零
   */
  const repairZero = <T,>(text: T) => {
    return ('0' + text).slice(-2)
  }
  //画圆
  const drawCircle = ({ x, y, r, sAngle, eAngle, color = 'red' }: Circle) => {
    ctx.beginPath()
    //画圆
    ctx.arc(x, y, r, sAngle, eAngle)
    //线宽
    ctx.lineWidth = 8
    //线帽类型
    ctx.lineCap = 'round'
    //颜色
    ctx.strokeStyle = color
    ctx.stroke()
  }
  //将角度转化为弧度
  const convertToArc = (angle: number) => {
    return (angle * Math.PI) / 180
  }

  //动画
  const draw = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    //解构时间
    const [hh, mm, ss] = getCurrentTime()
    const x = canvasWidth / 2
    const y = canvasHeight / 2
    drawText(`${repairZero(hh)}:${repairZero(mm)}:${repairZero(ss)}`, x, y)
    //定义圆形的r
    const radiusArray = [200, 175, 150]
    //定义图形的颜色
    const colorArray = ['#2ecc71', '#e67e22', '#a29bfe']
    //根据时间确定圆形的角度
    // milliseconds 能让弧度变化更自然
    const milliseconds = new Date().getMilliseconds() / 1000
    // 60 秒 = 一圈 = 360°
    const secondsArc =
      convertToArc((ss + milliseconds) * (360 / 60)) - Math.PI / 2
    // 60 分 = 一圈 = 360°
    const minutesArc =
      convertToArc(mm * (360 / 60)) - Math.PI / 2 + secondsArc / 60
    // 12 小时 = 一圈 = 360°，24小时 = 两圈 所以要对 12 进行取余操作
    const hoursArc =
      convertToArc((hh % 12) * (360 / 12)) - Math.PI / 2 + minutesArc / 60

    const arcArray = [secondsArc, minutesArc, hoursArc]
    //时的角度
    // 分的角度
    // 秒的角度

    //画圆
    radiusArray.forEach((r, i) => {
      drawCircle({
        x,
        y,
        r,
        sAngle: -Math.PI / 2,
        eAngle: arcArray[i],
        color: colorArray[i]
      })
    })
  }
  const animate = () => {
    draw()
    window.requestAnimationFrame(animate)
  }
  //初始化canvas
  const initCanvas = () => {
    const wrap = wrapRef.current as HTMLDivElement
    const canvas = canvasRef.current as HTMLCanvasElement
    canvas.width = wrap.clientWidth
    canvas.height = wrap.clientHeight
    return canvas
  }
  return (
    <div className="container" ref={wrapRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
export default memo(Canvas)
