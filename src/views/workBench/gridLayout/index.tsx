import React, { useMemo } from 'react'
import { FullscreenExitOutlined, DeleteOutlined } from '@ant-design/icons'
import { WidthProvider, Responsive } from 'react-grid-layout'
import styles from './index.module.less'
import { Row, Col } from 'antd'
export default function GridLayout(props: any) {
  const {
    padding,
    cols,
    rowHeight,
    // 配置一个可以拖拽的元素.拖拽的元素是一个"真实"元素
    // 从外面拖拽一个元素进来的时候
    // 你可以将更好的格式化参数
    // i -- id
    // w -- width
    // h -- height
    droppingItem,
    onEdit,
    onSave,
    onDrop,
    onRemove,
    isFullscreen,
    setIsFullscreen,
    cardLayouts,
    setCardLayouts,
    setTemLayouts,
    isAdd
  } = props
  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), [])
  const renderItem = (item: any) => {
    const { i, children, name } = item
    return (
      <div className={styles['card-item']} key={i}>
        <div className={styles['MyDragHandleClassName']}>
          <div className={styles['title']}>{name}</div>
          <div className={styles['actions']}>
            <FullscreenExitOutlined />
            <DeleteOutlined />
          </div>
        </div>
        <div className={styles['card-content']}>
          {children}
          111
        </div>
      </div>
    )
  }
  const onDragStop = () => {
    console.log('onDragStop')
  }
  const onLayoutChange = () => {
    console.log('onLayoutChange')
  }
  return (
    <div className={styles['grid-layout']}>
      <ResponsiveReactGridLayout
        //  items之间magin [x, y]单位默认px
        margin={padding}
        // 此布局的列数
        cols={{ lg: 1 }}
        //// 行高有一个默认高度,但是你可以改变他在断点处
        rowHeight={rowHeight}
        measureBeforeMount={false}
        breakpoints={{ lg: 600 }}
        isDroppable={true}
        onDragStop={onDragStop}
        // 压缩方向
        compactType="vertical"
        onDrop={onDrop}
        // layout 是一个对象数组
        // 格式化为{x: number, y: number, w: number, h: number}
        // 布局中的索引必须与每个项组件上使用的键匹配。
        // 如果选择使用自定义关键点，可以在布局中指定该键
        // 对象数组就像这样
        // {i: string, x: number, y: number, w: number, h: number}

        layouts={cardLayouts}
        // 回调保存布局
        // 得到布局数据在拖拽完成
        onLayoutChange={onLayoutChange}
        // 定义呈现调整大小就是正常的栅栏布局
        // 's' - South handle (bottom-center)
        // 'w' - West handle (left-center)
        // 'e' - East handle (right-center)
        // 'n' - North handle (top-center)
        // 'sw' - Southwest handle (bottom-left)
        // 'nw' - Northwest handle (top-left)
        // 'se' - Southeast handle (bottom-right)
        // 'ne' - Northeast handle (top-right)
        resizeHandle={['w', 'e']}
        width={400}
      >
        <div>111</div>
      </ResponsiveReactGridLayout>
    </div>
  )
}
